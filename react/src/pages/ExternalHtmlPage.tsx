import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';

type Props = {
  url: string;
  title: string;
  enableAudio?: boolean;
};

async function fetchText(url: string) {
  const res = await fetch(url, { mode: 'cors' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

const ExternalHtmlPage: React.FC<Props> = ({ url, title, enableAudio = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const html = await fetchText(url);
        if (!mounted) return;
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const container = doc.querySelector('.container');
        if (!container) throw new Error('container not found in external HTML');
        // Remove external back-link and top h1 to avoid duplicates inside our React container
        const back = container.querySelector('.back-link');
        if (back && back.parentElement) back.parentElement.removeChild(back);
        const topH1 = container.querySelector('h1');
        if (topH1 && topH1.parentElement) topH1.parentElement.removeChild(topH1);
        if (containerRef.current) {
          containerRef.current.innerHTML = container.innerHTML;
        }
        // After mount, wire behaviors
        setTimeout(() => {
          try {
            initToggles(containerRef.current!);
            if (enableAudio) initAudio(containerRef.current!);
          } catch (e) {
            console.error(e);
          }
        }, 0);
      } catch (e: any) {
        console.error(e);
        setError(e.message || String(e));
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [url, enableAudio]);

  const { layout } = useLayout();
  const layoutClass = layout === 'two-column' ? 'layout-two-column' : layout === 'single-column' ? 'layout-single-column' : '';
  return (
    <div className={`container ${layoutClass}`}>
      <Link to="/" className="back-link">← トップページに戻る</Link>
      <h1>{title}</h1>
      {loading && <p>読み込み中...</p>}
      {error && <p className="description">読み込みエラー: {error}</p>}
      <div ref={containerRef} className="injected" />
    </div>
  );
};

function initToggles(root: HTMLElement) {
  const headings = Array.from(root.querySelectorAll('h2, h3, h4')) as HTMLElement[];
  headings.forEach(h => h.classList.add('collapsible'));

  function boundaryRegex(level: number): RegExp {
    // H2 collapses until next H2. H3 collapses until next H2 or H3. H4 collapses until next H2/H3/H4
    if (level === 2) return /^H2$/;
    if (level === 3) return /^H[23]$/;
    return /^H[234]$/;
  }

  function levelOf(tag: string): number { return tag === 'H2' ? 2 : tag === 'H3' ? 3 : 4; }

  function hideRangeFrom(elem: Element | null, stop: RegExp): Element | null {
    let cur: Element | null = elem;
    while (cur && !(stop.test(cur.tagName))) {
      const el = cur as HTMLElement;
      el.style.display = 'none';
      el.style.maxHeight = '0px';
      el.style.overflow = 'hidden';
      el.style.opacity = '0';
      el.style.margin = '0';
      cur = cur.nextElementSibling;
    }
    return cur; // returns the first boundary element (or null)
  }

  function showRangeFrom(elem: Element | null, stop: RegExp) {
    let cur: Element | null = elem;
    while (cur && !(stop.test(cur.tagName))) {
      const el = cur as HTMLElement;
      if (/^H[2-4]$/.test(el.tagName)) {
        // show the header itself but keep its content collapsed by default
        el.style.display = '';
        el.style.maxHeight = '';
        el.style.overflow = '';
        el.style.opacity = '';
        el.style.margin = '';
        el.classList.add('collapsed');
        // hide its content and jump to the boundary to avoid re-showing it in this loop
        cur = hideRangeFrom(el.nextElementSibling, boundaryRegex(levelOf(el.tagName)));
        continue;
      } else {
        el.style.display = '';
        el.style.maxHeight = '';
        el.style.overflow = '';
        el.style.opacity = '';
        el.style.margin = '';
      }
      cur = cur.nextElementSibling;
    }
  }

  function setCollapsed(header: HTMLElement, collapsed: boolean) {
    const level = levelOf(header.tagName);
    const stop = boundaryRegex(level);
    if (collapsed) {
      header.classList.add('collapsed');
      hideRangeFrom(header.nextElementSibling, stop);
    } else {
      header.classList.remove('collapsed');
      showRangeFrom(header.nextElementSibling, stop);
    }
  }

  function annotateIndent(header: HTMLElement) {
    if ((header as any)._indentAnnotated) return;
    (header as any)._indentAnnotated = true;
    const level = levelOf(header.tagName);
    header.classList.add(`heading-l${level}`);
    const stop = boundaryRegex(level);
    let cur: Element | null = header.nextElementSibling;
    const indentLevel = Math.max(0, level - 2); // h2->0, h3->1, h4->2
    while (cur && !(stop.test(cur.tagName))) {
      const el = cur as HTMLElement;
      if (!/^H[2-4]$/.test(el.tagName)) {
        el.classList.add(`indent-${indentLevel}`);
      }
      cur = cur.nextElementSibling;
    }
  }

  headings.forEach(h => {
    if (!h.classList.contains('initialized')) {
      h.classList.add('initialized');
      annotateIndent(h);
      // default collapsed for all levels
      setCollapsed(h, true);
      h.addEventListener('click', (e) => {
        e.stopPropagation();
        const nowCollapsed = h.classList.contains('collapsed');
        setCollapsed(h, !nowCollapsed);
      });
    }
  });
}

async function initAudio(root: HTMLElement) {
  const mapUrl = 'https://shinyanogit.github.io/medical-interview-english/audio/audio_map.json';
  let audioMap: Record<string, string> = {};
  try {
    audioMap = await fetch(mapUrl).then(r => r.json());
  } catch (e) {
    console.warn('Failed to load audio_map.json; audio disabled');
    return;
  }

  let current: HTMLLIElement | null = null;
  let audioEl: HTMLAudioElement | null = null;

  function cleanup() {
    if (audioEl) {
      audioEl.pause();
      audioEl = null as any;
    }
    if (current) {
      current.classList.remove('playing');
      current = null;
    }
  }

  function candidateKeys(raw: string): string[] {
    const variants = new Set<string>();
    const trimmed = raw.replace(/\s+/g, ' ').trim();
    if (trimmed) variants.add(trimmed);
    const withoutAi = trimmed.replace(/\s*\(ai\)\s*$/i, '').trim();
    if (withoutAi) variants.add(withoutAi);
    return Array.from(variants);
  }

  root.querySelectorAll('li.question-item').forEach((liEl) => {
    const li = liEl as HTMLLIElement;
    li.addEventListener('click', () => {
      const key = li.dataset.text || li.textContent?.trim() || '';
      let file: string | undefined;
      for (const variant of candidateKeys(key)) {
        if (audioMap[variant]) {
          file = audioMap[variant];
          break;
        }
      }
      if (!file) {
        console.warn('Audio not found for:', key);
        return;
      }
      const src = `https://shinyanogit.github.io/medical-interview-english/audio/${file}`;
      if (current === li && audioEl) {
        if (!audioEl.paused) {
          audioEl.pause();
          li.classList.remove('playing');
          return;
        }
      }
      cleanup();
      audioEl = new Audio(src);
      current = li;
      li.classList.add('playing');
      audioEl.addEventListener('ended', () => cleanup());
      audioEl.addEventListener('error', () => cleanup());
      audioEl.play();
    });
  });
}

export default ExternalHtmlPage;
