import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

// ── Types ──

type TokenType = "bold" | "word" | "paren" | "break";

interface Token {
  type: TokenType;
  word?: string;
  text?: string;
  hasAudio: boolean;
  start: number;
  end: number;
}

interface TimestampEntry {
  word: string;
  start: number;
  end: number;
}

// ── Pure functions (ported from play.js) ──

function parseTokens(text: string): Token[] {
  const tokens: Token[] = [];
  text.split("\n\n").forEach((para, pi) => {
    if (pi > 0) tokens.push({ type: "break", hasAudio: false, start: -1, end: -1 });
    if (!para.trim()) return;
    const re = /(\*\*[^*]+\*\*)|(（[^）]+）)|(\S+)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(para)) !== null) {
      if (m[1]) {
        m[1]
          .slice(2, -2)
          .split(/\s+/)
          .forEach((w) => {
            if (w) tokens.push({ type: "bold", word: w, hasAudio: true, start: 0, end: 0 });
          });
      } else if (m[2]) {
        tokens.push({ type: "paren", text: m[2], hasAudio: false, start: -1, end: -1 });
      } else if (m[3]) {
        tokens.push({ type: "word", word: m[3], hasAudio: true, start: 0, end: 0 });
      }
    }
  });
  return tokens;
}

function norm(s: string): string {
  return s.toLowerCase().replace(/[.,;:!?'"()\[\]\-\/—:]/g, "");
}

function align(
  origWords: string[],
  ts: TimestampEntry[]
): { start: number; end: number }[] {
  const result: { start: number; end: number }[] = [];
  let ti = 0;
  for (const ow of origWords) {
    const oc = norm(ow);
    if (!oc) {
      result.push({ start: -1, end: -1 });
      continue;
    }
    let bestI = ti;
    let bestS = 0;
    let consume = 1;
    for (let s = ti; s < Math.min(ti + 6, ts.length); s++) {
      const tc = norm(ts[s].word);
      if (tc === oc) {
        bestI = s;
        bestS = 1;
        consume = 1;
        break;
      }
      let combined = tc;
      for (
        let j = s + 1;
        j < Math.min(s + 5, ts.length) && combined.length < oc.length + 3;
        j++
      ) {
        combined += norm(ts[j].word);
        if (combined === oc) {
          bestI = s;
          bestS = 1;
          consume = j - s + 1;
          break;
        }
      }
      if (bestS === 1) break;
      if (oc.startsWith(tc) || tc.startsWith(oc) || oc.includes(tc)) {
        if (0.5 > bestS) {
          bestI = s;
          bestS = 0.5;
        }
      }
    }
    if (bestI < ts.length) {
      const endIdx = Math.min(bestI + consume - 1, ts.length - 1);
      result.push({ start: ts[bestI].start, end: ts[endIdx].end });
      if (bestS > 0) ti = bestI + consume;
    } else {
      const prev = result.length > 0 ? result[result.length - 1] : { end: 0 };
      result.push({ start: prev.end, end: prev.end + 0.3 });
    }
  }
  return result;
}

// ── Audio Chain Context ──

interface PlayerHandle {
  id: string;
  playFromStart: (fromChain?: boolean) => void;
  unlockForChain: () => void;
  setChainActive: (active: boolean) => void;
  order: number;
}

interface AudioChainContextValue {
  registerPlayer: (player: PlayerHandle) => void;
  unregisterPlayer: (id: string) => void;
  startChainFromTop: () => void;
  stopChain: () => void;
  onPlayerEnded: (playerId: string) => void;
  isChainActive: boolean;
  stopGlobal: (() => void) | null;
  setStopGlobal: (fn: (() => void) | null) => void;
}

const AudioChainContext = createContext<AudioChainContextValue | null>(null);

export const AudioChainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const playersRef = useRef<PlayerHandle[]>([]);
  const chainRef = useRef<{
    active: boolean;
    ids: string[];
    index: number;
  }>({ active: false, ids: [], index: -1 });
  const stopGlobalRef = useRef<(() => void) | null>(null);
  const [isChainActive, setIsChainActive] = useState(false);

  const getSortedPlayers = useCallback(() => {
    return [...playersRef.current].sort((a, b) => a.order - b.order);
  }, []);

  const refreshChainUi = useCallback(() => {
    const active = chainRef.current.active;
    setIsChainActive(active);
    playersRef.current.forEach((p) => p.setChainActive(active));
  }, []);

  const stopChain = useCallback(() => {
    chainRef.current = { active: false, ids: [], index: -1 };
    refreshChainUi();
  }, [refreshChainUi]);

  const playChainCurrent = useCallback(() => {
    const chain = chainRef.current;
    if (!chain.active) return;
    if (chain.index < 0 || chain.index >= chain.ids.length) {
      stopChain();
      return;
    }
    const currentId = chain.ids[chain.index];
    const players = getSortedPlayers();
    const player = players.find((p) => p.id === currentId);
    if (!player) {
      chain.index += 1;
      playChainCurrent();
      return;
    }
    player.playFromStart(true);
  }, [getSortedPlayers, stopChain]);

  const startChainFromTop = useCallback(() => {
    const players = getSortedPlayers();
    if (!players.length) return;
    if (stopGlobalRef.current) stopGlobalRef.current();
    players.forEach((p) => p.unlockForChain());
    chainRef.current = {
      active: true,
      ids: players.map((p) => p.id),
      index: 0,
    };
    refreshChainUi();
    playChainCurrent();
  }, [getSortedPlayers, refreshChainUi, playChainCurrent]);

  const onPlayerEnded = useCallback(
    (playerId: string) => {
      const chain = chainRef.current;
      if (!chain.active) return;
      if (chain.ids[chain.index] !== playerId) return;
      chain.index += 1;
      if (chain.index >= chain.ids.length) {
        stopChain();
        return;
      }
      playChainCurrent();
    },
    [stopChain, playChainCurrent]
  );

  const registerPlayer = useCallback(
    (player: PlayerHandle) => {
      playersRef.current = playersRef.current.filter((p) => p.id !== player.id);
      playersRef.current.push(player);
      refreshChainUi();
    },
    [refreshChainUi]
  );

  const unregisterPlayer = useCallback((id: string) => {
    playersRef.current = playersRef.current.filter((p) => p.id !== id);
  }, []);

  const setStopGlobal = useCallback((fn: (() => void) | null) => {
    stopGlobalRef.current = fn;
  }, []);

  return (
    <AudioChainContext.Provider
      value={{
        registerPlayer,
        unregisterPlayer,
        startChainFromTop,
        stopChain,
        onPlayerEnded,
        isChainActive,
        stopGlobal: stopGlobalRef.current,
        setStopGlobal,
      }}
    >
      {children}
    </AudioChainContext.Provider>
  );
};

// ── AudioHighlightPlayer Component ──

type Props = {
  text: string;
  audioSrc: string;
  timestampSrc: string;
  order?: number;
};

const AudioHighlightPlayer: React.FC<Props> = ({
  text,
  audioSrc,
  timestampSrc,
  order = 0,
}) => {
  const playerId = useId();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hlTimerRef = useRef<number | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [playing, setPlayingState] = useState(false);
  const [chainActive, setChainActiveLocal] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [tsLoaded, setTsLoaded] = useState(false);
  const playingRef = useRef(false);
  const chain = useContext(AudioChainContext);

  // Parse tokens and load timestamps
  useEffect(() => {
    const parsed = parseTokens(text);

    fetch(timestampSrc)
      .then((r) => r.json())
      .then((tsWords: TimestampEntry[]) => {
        const audioTokens = parsed.filter((t) => t.hasAudio);
        if (tsWords.length > 0) {
          const aligned = align(
            audioTokens.map((t) => t.word!),
            tsWords
          );
          let ai = 0;
          parsed.forEach((t) => {
            if (t.hasAudio) {
              t.start = aligned[ai]?.start ?? 0;
              t.end = aligned[ai]?.end ?? 0;
              ai++;
            }
          });
        }
        setTokens(parsed);
        setTsLoaded(true);
      })
      .catch(() => {
        setTokens(parsed);
        setTsLoaded(true);
      });
  }, [text, timestampSrc]);

  // Create audio element
  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.preload = "auto";
    (audio as any).playsInline = true;
    audioRef.current = audio;

    audio.addEventListener("ended", () => {
      setPlaying(false);
      chain?.setStopGlobal(null);
      chain?.onPlayerEnded(playerId);
    });

    return () => {
      audio.pause();
      audio.src = "";
      if (hlTimerRef.current) clearInterval(hlTimerRef.current);
    };
  }, [audioSrc, playerId]);

  const startHL = useCallback(() => {
    if (hlTimerRef.current) clearInterval(hlTimerRef.current);
    hlTimerRef.current = window.setInterval(() => {
      const audio = audioRef.current;
      if (!audio) return;
      const ct = audio.currentTime;
      spansRef.current.forEach((sp) => {
        if (!sp) return;
        const st = parseFloat(sp.dataset.start || "-1");
        const on = st >= 0 && Math.abs(ct - st) < 0.3;
        sp.classList.toggle("highlight", on);
      });
    }, 80);
  }, []);

  const stopHL = useCallback(() => {
    if (hlTimerRef.current) {
      clearInterval(hlTimerRef.current);
      hlTimerRef.current = null;
    }
    spansRef.current.forEach((sp) => {
      if (sp) sp.classList.remove("highlight");
    });
  }, []);

  const setPlaying = useCallback(
    (state: boolean) => {
      playingRef.current = state;
      setPlayingState(state);
      if (state) startHL();
      else stopHL();
    },
    [startHL, stopHL]
  );

  const stopFn = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setPlaying(false);
    chain?.stopChain();
  }, [setPlaying, chain]);

  const playFromStart = useCallback(
    (fromChain = false) => {
      if (!fromChain) chain?.stopChain();
      if (chain?.stopGlobal && chain.stopGlobal !== stopFn)
        chain.stopGlobal();
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = 0;
      const promise = audio.play();
      if (promise) {
        promise.catch(() => {
          setPlaying(false);
          if (fromChain) chain?.stopChain();
        });
      }
      setPlaying(true);
      chain?.setStopGlobal(stopFn);
    },
    [chain, stopFn, setPlaying]
  );

  const unlockForChain = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      const prevMuted = audio.muted;
      audio.muted = true;
      const promise = audio.play();
      if (promise && typeof promise.then === "function") {
        promise
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.muted = prevMuted;
          })
          .catch(() => {
            audio.muted = prevMuted;
          });
      } else {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = prevMuted;
      }
    } catch (_) {}
  }, []);

  // Register with chain context
  useEffect(() => {
    if (!chain) return;
    chain.registerPlayer({
      id: playerId,
      playFromStart,
      unlockForChain,
      setChainActive: setChainActiveLocal,
      order,
    });
    return () => chain.unregisterPlayer(playerId);
  }, [chain, playerId, playFromStart, unlockForChain, order]);

  const handleWordClick = useCallback(
    (start: number) => {
      chain?.stopChain();
      if (chain?.stopGlobal && chain.stopGlobal !== stopFn)
        chain.stopGlobal();
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = start;
      const promise = audio.play();
      if (promise) promise.catch(() => setPlaying(false));
      setPlaying(true);
      chain?.setStopGlobal(stopFn);
    },
    [chain, stopFn, setPlaying]
  );

  const handleIndicatorClick = useCallback(() => {
    if (playingRef.current) {
      stopFn();
      chain?.setStopGlobal(null);
    } else {
      playFromStart(false);
    }
  }, [stopFn, playFromStart, chain]);

  const handleChainClick = useCallback(() => {
    if (!chain) return;
    if (chainActive) {
      chain.stopChain();
      if (chain.stopGlobal) chain.stopGlobal();
    } else {
      chain.startChainFromTop();
    }
  }, [chain, chainActive]);

  if (!tsLoaded) return null;

  let spanIndex = 0;

  return (
    <div
      className={`audio-highlight-player ${playing ? "playing" : ""}`}
    >
      <div className="ahp-controls">
        <span
          className={`ahp-indicator ${playing ? "active" : ""}`}
          onClick={handleIndicatorClick}
        >
          {playing ? "⏸ セクション停止" : "▶ セクション再生"}
        </span>
        {chain && (
          <span
            className={`ahp-chain-btn ${chainActive ? "active" : ""}`}
            onClick={handleChainClick}
          >
            {chainActive ? "■ 通し再生を停止" : "▸ 上から通し再生"}
          </span>
        )}
      </div>
      {tokens.map((token, i) => {
        if (token.type === "break") {
          return <br key={i} />;
        }
        if (token.type === "paren") {
          return (
            <span key={i} className="audio-paren">
              {token.text}{" "}
            </span>
          );
        }
        const idx = spanIndex++;
        return (
          <React.Fragment key={i}>
            <span
              ref={(el) => {
                spansRef.current[idx] = el;
              }}
              className={`audio-token ${token.type === "bold" ? "audio-bold" : "audio-word"}`}
              data-start={token.start}
              onClick={() => {
                if (token.start >= 0) handleWordClick(token.start);
              }}
            >
              {token.word}
            </span>{" "}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AudioHighlightPlayer;
