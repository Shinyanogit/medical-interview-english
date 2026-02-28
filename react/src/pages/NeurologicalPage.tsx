import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../context/LayoutContext";
import Section from "../components/Section";
import PageIframe from "../components/PageIframe";

const basePath =
  import.meta.env.BASE_URL === "/" || import.meta.env.BASE_URL === ""
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const buildAppPath = (relative: string) => {
  const trimmed = relative.replace(/^\/+/, "");
  const url = `${basePath}/${trimmed}`.replace(/^\/\//, "/");
  return url.startsWith("/") ? url : `/${url}`;
};

const NeurologicalPage: React.FC = () => {
  const { layout } = useLayout();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLegacy, setShowLegacy] = useState(false);
  const legacyUrl = useMemo(
    () => buildAppPath("legacy/neurological.html"),
    []
  );
  const imageMap = useMemo(
    () => ({
      visualField: buildAppPath("images/neurological/1.jpg"),
      softPalate: buildAppPath("images/neurological/2.jpg"),
      sternocleidomastoid: buildAppPath("images/neurological/3.jpg"),
      keepHandsSteady: buildAppPath("images/neurological/4.jpg"),
      moveArm: buildAppPath("images/neurological/5.jpg"),
      involuntary: buildAppPath("images/neurological/6.jpg"),
      pushLegDown: buildAppPath("images/neurological/7.jpg"),
    }),
    []
  );
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );
  const [audioMap, setAudioMap] = useState<Record<string, string> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentItemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const loadAudioMap = async () => {
      try {
        const res = await fetch(buildAppPath("audio/audio_map.json"));
        if (!res.ok) return;
        const json = (await res.json()) as Record<string, string>;
        setAudioMap(json);
      } catch {
        // ignore, audio will be disabled
      }
    };
    loadAudioMap();
  }, []);

  const handlePlay = useCallback(
    (key: string, item?: HTMLLIElement | null) => {
      if (!audioMap) return;
      const file = audioMap[key];
      if (!file) {
        return;
      }
      const src = buildAppPath(`audio/${file}`);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (currentItemRef.current) {
        currentItemRef.current.classList.remove("playing");
        currentItemRef.current = null;
      }
      const audio = new Audio(src);
      audioRef.current = audio;
      if (item) {
        currentItemRef.current = item;
        item.classList.add("playing");
      }
      const cleanup = () => {
        if (audioRef.current === audio) {
          audioRef.current = null;
        }
        if (currentItemRef.current === item) {
          currentItemRef.current?.classList.remove("playing");
          currentItemRef.current = null;
        }
      };
      audio.addEventListener("ended", cleanup);
      audio.addEventListener("error", cleanup);
      audio.play().catch(cleanup);
    },
    [audioMap]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const item = target?.closest("li.question-item") as HTMLLIElement | null;
      if (!item) return;
      const key = item.dataset.text?.trim();
      if (!key) return;
      handlePlay(key, item);
    };
    container.addEventListener("click", handleClick);
    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [handlePlay]);

  const bindImage = (
    src: string,
    alt: string
  ): React.ImgHTMLAttributes<HTMLImageElement> => ({
    src,
    alt,
    loading: "lazy",
    className: "zoomable",
    onClick: () => setLightbox({ src, alt }),
  });

  const layoutClass =
    layout === "two-column"
      ? "layout-two-column"
      : layout === "single-column"
      ? "layout-single-column"
      : "";

  return (
    <div ref={containerRef} className={`container ${layoutClass}`}>
      <Link to="/physical-exam" className="back-link">
        ← 身体診察に戻る
      </Link>
      <h1>神経</h1>

      <Section title="脳神経の診察 (Cranial Nerve Examination)" level={2}>
        <Section title="視野 (Visual Field)" level={3}>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.visualField, "視野の診察")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="I'm going to test your visual fields.">
                  <div className="question-text">
                    I'm going to test{" "}
                    <span className="paraphrase">(check, examine, assess)</span>{" "}
                    your <b>visual fields</b>{" "}
                    <span className="paraphrase">
                      (peripheral vision, side vision)
                    </span>
                    .
                  </div>
                </li>
                <li className="question-item" data-text="Please cover your left eye with your left hand.">
                  <div className="question-text">
                    Please{" "}
                    <span className="paraphrase">(Could you, Would you)</span>{" "}
                    <b>cover your left eye</b> with your left hand.
                  </div>
                </li>
                <li className="question-item" data-text="Please look straight at my eye.">
                  <div className="question-text">
                    Please{" "}
                    <span className="paraphrase">(Could you, Would you)</span>{" "}
                    <b>look straight at my eye</b>{" "}
                    <span className="paraphrase">
                      (look directly at me, keep your eyes on mine)
                    </span>
                    .
                  </div>
                </li>
                <li className="question-item" data-text="I am going to put my hands like this.">
                  <div className="question-text">
                    I am going to <b>put my hands like this</b>{" "}
                    <span className="paraphrase">
                      (右下、左上に両手を配置)
                    </span>
                    .
                  </div>
                </li>
                <li className="question-item" data-text="If my finger moves, please point to the finger.">
                  <div className="question-text">
                    If my finger moves, please <b>point to the finger</b>.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="description">両手の上下左右を入れ替え再度実施。</p>
        </Section>
        <Section title="眼球運動・眼振 (Extraocular Movements and Nystagmus)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test your eye movements.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>eye movements</b>{" "}
                <span className="paraphrase">
                  (ocular movements, extraocular movements)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please follow my finger with your eyes.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>follow my finger</b> with your eyes{" "}
                <span className="paraphrase">
                  (track my finger, watch my finger)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Keep your head still.">
              <div className="question-text">
                <b>Keep your head still</b>{" "}
                <span className="paraphrase">
                  (Don't move your head, Hold your head steady)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Just move your eyes.">
              <div className="question-text">
                <b>Just move your eyes</b>{" "}
                <span className="paraphrase">
                  (Only your eyes, Move only your eyes)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Tell me if you see double.">
              <div className="question-text">
                Tell me if you see <b>double</b>{" "}
                <span className="paraphrase">
                  (two images, diplopia)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section
          title="眼裂（瞼裂）・瞳孔／対光反射 (Palpebral Fissure, Pupil, and Light Reflex)"
          level={3}
        >
          <ul>
            <li className="question-item" data-text="I'm going to check your pupil reflexes.">
              <div className="question-text">
                I'm going to check{" "}
                <span className="paraphrase">(test, examine, assess)</span> your{" "}
                <b>pupil reflexes</b>{" "}
                <span className="paraphrase">
                  (pupillary responses, light reflexes)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please look at my nose.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>look at my nose</b>{" "}
                <span className="paraphrase">
                  (look straight ahead, look at me)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="I'm going to shine a light in your eyes.">
              <div className="question-text">
                I'm going to <b>shine a light</b>{" "}
                <span className="paraphrase">(point a light, flash a light)</span>{" "}
                in your eyes.
              </div>
            </li>
            <li className="question-item" data-text="This might be bright.">
              <div className="question-text">
                This might be <b>bright</b>{" "}
                <span className="paraphrase">
                  (a bit uncomfortable, glaring)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="眼底 (Fundoscopic Examination)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to look at the back of your eyes.">
              <div className="question-text">
                I'm going to look at{" "}
                <span className="paraphrase">(examine, check)</span> the{" "}
                <b>back of your eyes</b>{" "}
                <span className="paraphrase">(retina, fundus)</span>.
              </div>
            </li>
            <li className="question-item" data-text="I am going to use this ophthalmoscope.">
              <div className="question-text">
                I am going to use this <b>ophthalmoscope</b>{" "}
                <span className="paraphrase">
                  (eye instrument, eye scope)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please look straight ahead.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>look straight ahead</b>{" "}
                <span className="paraphrase">
                  (look forward, focus forward)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="顔面の感覚 (Facial Sensation)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test the sensation on your face using this tissue paper.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> the{" "}
                <b>sensation</b>{" "}
                <span className="paraphrase">
                  (feeling, sense of touch)
                </span>{" "}
                on your face using this tissue paper.
              </div>
            </li>
            <li className="question-item" data-text="Close your eyes.">
              <div className="question-text">
                <b>Close your eyes</b>{" "}
                <span className="paraphrase">
                  (Shut your eyes, Keep your eyes closed)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Do you feel this?">
              <div className="question-text">
                Do you <b>feel this</b>{" "}
                <span className="paraphrase">
                  (sense this, notice this)
                </span>
                ?
              </div>
            </li>
            <li className="question-item" data-text="Is it the same on both sides?">
              <div className="question-text">
                Is it the <b>same on both sides</b>{" "}
                <span className="paraphrase">
                  (equal bilaterally, symmetric)
                </span>
                ?
              </div>
            </li>
          </ul>
        </Section>
        <Section title="顔面筋 (Facial Muscles)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test your facial muscles.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>facial muscles</b>{" "}
                <span className="paraphrase">
                  (face muscles, facial movements)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please smile for me.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>smile</b>{" "}
                <span className="paraphrase">
                  (show me a smile, give me a big smile)
                </span>{" "}
                for me.
              </div>
            </li>
            <li className="question-item" data-text="Show me your teeth.">
              <div className="question-text">
                <b>Show me your teeth</b>{" "}
                <span className="paraphrase">
                  (Open your mouth and show your teeth)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Puff your cheeks out.">
              <div className="question-text">
                <b>Puff your cheeks out</b>{" "}
                <span className="paraphrase">
                  (Blow your cheeks up, Fill your cheeks with air)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Raise your eyebrows.">
              <div className="question-text">
                <b>Raise your eyebrows</b>{" "}
                <span className="paraphrase">
                  (Lift your eyebrows, Make a surprised face)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Close your eyes tight.">
              <div className="question-text">
                <b>Close your eyes tight</b>{" "}
                <span className="paraphrase">
                  (Squeeze your eyes shut, Shut your eyes tightly)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section
          title="軟口蓋・咽頭後壁の動き (Soft Palate and Posterior Pharynx Movement)"
          level={3}
        >
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.softPalate, "軟口蓋・咽頭後壁の動き")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="Open your mouth and say ah.">
                  <div className="question-text">
                    Open your mouth{" "}
                    <span className="paraphrase">(Open wide)</span> and{" "}
                    <b>say ah</b>{" "}
                    <span className="paraphrase">(make an ah sound)</span>.
                  </div>
                </li>
                <li className="question-item" data-text="I am going to use this stick to gently press your tongue.">
                  <div className="question-text">
                    I am going to use this stick to gently <b>press your tongue</b>.
                  </div>
                </li>
                <li className="question-item" data-text="I'm looking at the back of your throat.">
                  <div className="question-text">
                    I'm looking at{" "}
                    <span className="paraphrase">(examining, inspecting)</span> the{" "}
                    <b>back of your throat</b>{" "}
                    <span className="paraphrase">(pharynx, throat)</span>.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section title="舌 (Tongue)" level={3}>
          <ul>
            <li className="question-item" data-text="Please stick your tongue out.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>stick your tongue out</b>{" "}
                <span className="paraphrase">
                  (put your tongue out, show me your tongue)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Move your tongue left and right.">
              <div className="question-text">
                <b>Move your tongue</b>{" "}
                <span className="paraphrase">(Shift your tongue)</span> left and
                right{" "}
                <span className="paraphrase">
                  (side to side, back and forth)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Push your tongue against the inside of your cheek.">
              <div className="question-text">
                <b>Push your tongue</b> against{" "}
                <span className="paraphrase">(Press your tongue to)</span> the{" "}
                inside of your cheek{" "}
                <span className="paraphrase">(side of your mouth)</span>.
              </div>
            </li>
          </ul>
        </Section>
        <Section title="胸鎖乳突筋 (Sternocleidomastoid)" level={3}>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.sternocleidomastoid, "胸鎖乳突筋の診察")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="I'm going to test your neck muscles.">
                  <div className="question-text">
                    I'm going to test{" "}
                    <span className="paraphrase">(check, examine, assess)</span> your{" "}
                    <b>neck muscles</b>{" "}
                    <span className="paraphrase">(neck strength)</span>.
                  </div>
                </li>
                <li className="question-item" data-text="Please shrug your shoulders.">
                  <div className="question-text">
                    Please{" "}
                    <span className="paraphrase">(Could you, Would you)</span>{" "}
                    <b>shrug your shoulders</b>{" "}
                    <span className="paraphrase">
                      (lift your shoulders, raise your shoulders)
                    </span>
                    .
                  </div>
                </li>
                <li className="question-item" data-text="Turn your head to the left.">
                  <div className="question-text">
                    <b>Turn your head</b>{" "}
                    <span className="paraphrase">
                      (Move your head, Rotate your head)
                    </span>{" "}
                    to the left <span className="paraphrase">(left side)</span>.{" "}
                    <span className="paraphrase">
                      (→患者の左頬と右肩に手を添える)
                    </span>
                  </div>
                </li>
                <li className="question-item" data-text="I am going to pull your chin back with my left hand.">
                  <div className="question-text">
                    I am going to <b>pull your chin back</b> with my left hand.
                  </div>
                </li>
                <li className="question-item" data-text="Don't let me turn your head.">
                  <div className="question-text">
                    <b>Don't let me turn your head</b>{" "}
                    <span className="paraphrase">
                      (Try not to let me, Resist when I)
                    </span>{" "}
                    .
                  </div>
                </li>
                <li className="question-item" data-text="Now turn to the right.">
                  <div className="question-text">
                    Now <b>turn to the right</b>{" "}
                    <span className="paraphrase">(move, rotate)</span>.{" "}
                    <span className="paraphrase">
                      (→右側でも上記を同様に行う)
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </Section>

      <Section title="上肢の運動系の診察 (Upper Extremity Motor Examination)" level={2}>
        <Section title="Barréバレー徴候（上肢） (Barré Sign - Upper Extremities)" level={3}>
          <ul>
            <li className="question-item" data-text="Please hold your arms out in front of you like holding a pizza.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>hold your arms out</b>{" "}
                <span className="paraphrase">
                  (extend your arms, stretch your arms forward)
                </span>{" "}
                in front of you like holding a pizza.
              </div>
            </li>
            <li className="question-item" data-text="Close your eyes.">
              <div className="question-text">
                <b>Close your eyes</b>{" "}
                <span className="paraphrase">
                  (Shut your eyes, Keep your eyes closed)
                </span>
                .
              </div>
            </li>
          </ul>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.keepHandsSteady, "Keep your hands steady")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="Keep your hands steady.">
                  <div className="question-text">
                    <b>Keep your hands steady</b>{" "}
                    <span className="paraphrase">
                      (Hold your hands still, Don't let your hands drift)
                    </span>
                    .
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section
          title="握力と上肢の徒手筋力テスト (Grip Strength and Manual Muscle Testing of Upper Extremities)"
          level={3}
        >
          <ul>
            <li className="question-item" data-text="I'm going to test your arm strength.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>arm strength</b>{" "}
                <span className="paraphrase">(muscle strength, power)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Squeeze my fingers as hard as you can.">
              <div className="question-text">
                <b>Squeeze my fingers</b>{" "}
                <span className="paraphrase">(Grip, Hold)</span> as hard as you
                can{" "}
                <span className="paraphrase">
                  (with all your strength, as tightly as possible)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Hold your elbows up in the air.">
              <div className="question-text">
                <b>Hold your elbows up</b>{" "}
                <span className="paraphrase">
                  (Lift your elbows, Raise your elbows)
                </span>{" "}
                in the air.
              </div>
            </li>
            <li className="question-item" data-text="Don't let me push your arms down.">
              <div className="question-text">
                <b>Don't let me push your arms down</b>{" "}
                <span className="paraphrase">
                  (Try not to let me, Resist when I)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Pull my hand up towards your chin.">
              <div className="question-text">
                <b>Pull my hand up</b>{" "}
                <span className="paraphrase">(Bring my hand up)</span> towards
                your chin.
              </div>
            </li>
            <li className="question-item" data-text="Spread your fingers wide apart.">
              <div className="question-text">
                <b>Spread your fingers</b>{" "}
                <span className="paraphrase">
                  (Separate your fingers, Open your fingers)
                </span>{" "}
                wide apart.
              </div>
            </li>
            <li className="question-item" data-text="Don't let me squeeze them together.">
              <div className="question-text">
                <b>Don't let me squeeze them together</b>{" "}
                <span className="paraphrase">
                  (Resist when I push them together)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="筋トーヌス（肘関節） (Muscle Tone - Elbow Joint)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to check your muscle tone.">
              <div className="question-text">
                I'm going to check{" "}
                <span className="paraphrase">(test, examine, assess)</span> your{" "}
                <b>muscle tone</b>{" "}
                <span className="paraphrase">
                  (muscle stiffness, muscle tension)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please relax your arm.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>relax your arm</b>{" "}
                <span className="paraphrase">
                  (let your arm go limp, don't tense up)
                </span>
                .
              </div>
            </li>
          </ul>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.moveArm, "筋トーヌス（肘関節）")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="I'm going to move your arm.">
                  <div className="question-text">
                    I'm going to <b>move your arm</b>{" "}
                    <span className="paraphrase">(bend, flex)</span>.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section title="上半身の不随意運動 (Involuntary Movements of Upper Body)" level={3}>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.involuntary, "上半身の不随意運動")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="I'm going to look for any involuntary movements.">
                  <div className="question-text">
                    I'm going to look for any <b>involuntary movements</b>{" "}
                    <span className="paraphrase">
                      (abnormal movements, tremors, twitches)
                    </span>
                    .
                  </div>
                </li>
                <li className="question-item" data-text="Please put your hands on your knees like this, and just relax.">
                  <div className="question-text">
                    Please <b>put your hands on your knees</b> like this, and just
                    relax.
                  </div>
                </li>
                <li className="question-item" data-text="Spread your fingers a little like this, hold your hand out in front of you, and leave it like this.">
                  <div className="question-text">
                    Spread your fingers a little like this,{" "}
                    <b>hold your hand out in front of you</b>, and leave it like
                    this.
                  </div>
                </li>
                <li className="question-item" data-text="Turn your wrist up and hold it there like this.">
                  <div className="question-text">
                    <b>Turn your wrist up</b> and hold it there like this.
                  </div>
                </li>
                <li className="question-item" data-text="Do you notice any tremors or shaking?">
                  <div className="question-text">
                    Do you notice any <b>tremors</b>{" "}
                    <span className="paraphrase">
                      (shaking, shivering)
                    </span>{" "}
                    or shaking?
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
        <Section title="鼻指鼻試験 (Finger-to-Nose Test)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test your coordination.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>coordination</b>{" "}
                <span className="paraphrase">
                  (motor control, accuracy)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Touch your nose with your finger, then touch my finger.">
              <div className="question-text">
                <b>Touch your nose</b>{" "}
                <span className="paraphrase">(Tap your nose)</span> with your
                finger, then touch my finger.
              </div>
            </li>
            <li className="question-item" data-text="Keep going back and forth.">
              <div className="question-text">
                <b>Keep going back and forth</b>{" "}
                <span className="paraphrase">
                  (Continue alternating, Repeat)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Now speed up.">
              <div className="question-text">
                Now <b>speed up</b>{" "}
                <span className="paraphrase">
                  (go faster, increase your pace)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="手回内・回外試験 (Pronation-Supination Test)" level={3}>
          <ul>
            <li className="question-item" data-text="I want you to flip your hands over like this.">
              <div className="question-text">
                I want you to <b>flip your hands over</b>{" "}
                <span className="paraphrase">
                  (turn your hands, rotate your hands)
                </span>{" "}
                like this.
              </div>
            </li>
            <li className="question-item" data-text="Keep alternating palm up and palm down.">
              <div className="question-text">
                <b>Keep alternating</b>{" "}
                <span className="paraphrase">
                  (Keep switching, Keep turning)
                </span>{" "}
                palm up and palm down.
              </div>
            </li>
            <li className="question-item" data-text="Go faster.">
              <div className="question-text">
                <b>Go faster</b>{" "}
                <span className="paraphrase">
                  (Speed up, Increase your pace)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
      </Section>

      <Section title="起立と歩行の診察 (Standing and Gait Examination)" level={2}>
        <Section
          title="起立と歩行の診察（通常歩行，つぎ足歩行） (Standing and Gait - Normal and Tandem Walking)"
          level={3}
        >
          <ul>
            <li className="question-item" data-text="I'd like you to walk across the room.">
              <div className="question-text">
                I'd like you to <b>walk across the room</b>{" "}
                <span className="paraphrase">
                  (walk to the other side, walk forward)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Now walk back towards me.">
              <div className="question-text">
                Now <b>walk back</b>{" "}
                <span className="paraphrase">(return, come back)</span> towards
                me.
              </div>
            </li>
            <li className="question-item" data-text="Can you walk heel to toe?">
              <div className="question-text">
                Can you walk <b>heel to toe</b>{" "}
                <span className="paraphrase">
                  (tandem walk, walk in a straight line)
                </span>
                ?
              </div>
            </li>
            <li className="question-item" data-text="Place one foot directly in front of the other.">
              <div className="question-text">
                <b>Place one foot directly in front of the other</b>{" "}
                <span className="paraphrase">
                  (Put one foot right in front of the other)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="Rombergロンベルグ試験 (Romberg Test)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test your balance.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>balance</b>{" "}
                <span className="paraphrase">
                  (equilibrium, stability)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Please stand with your feet together.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>stand with your feet together</b>{" "}
                <span className="paraphrase">
                  (put your feet side by side)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Now close your eyes.">
              <div className="question-text">
                Now <b>close your eyes</b>{" "}
                <span className="paraphrase">(shut)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Try not to sway.">
              <div className="question-text">
                <b>Try not to sway</b>{" "}
                <span className="paraphrase">
                  (Keep your balance, Stay still, Don't wobble)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
      </Section>

      <Section title="下肢の運動系の診察 (Lower Extremity Motor Examination)" level={2}>
        <Section title="下肢の徒手筋力テスト (Manual Muscle Testing of Lower Extremities)" level={3}>
          <ul>
            <li className="question-item" data-text="Now I'm going to test your leg strength.">
              <div className="question-text">
                Now I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>leg strength</b>{" "}
                <span className="paraphrase">
                  (lower extremity strength, power)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Bring your knee up towards your chest.">
              <div className="question-text">
                <b>Bring your knee up</b>{" "}
                <span className="paraphrase">
                  (Lift your knee, Raise your knee)
                </span>{" "}
                towards your chest.
              </div>
            </li>
          </ul>
          <div className="figure-with-text">
            <div className="section-figure">
              <img {...bindImage(imageMap.pushLegDown, "下肢の徒手筋力テスト")} />
            </div>
            <div className="text-block">
              <ul>
                <li className="question-item" data-text="Don't let me push your leg down.">
                  <div className="question-text">
                    <b>Don't let me push your leg down</b>{" "}
                    <span className="paraphrase">
                      (Try not to let me, Resist when I)
                    </span>
                    .
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li className="question-item" data-text="Hold your leg out straight.">
              <div className="question-text">
                <b>Hold your leg out straight</b>{" "}
                <span className="paraphrase">
                  (Extend your leg, Straighten your leg)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Push down on my hand with your foot.">
              <div className="question-text">
                <b>Push down</b>{" "}
                <span className="paraphrase">(Press down)</span> on my hand with
                your foot.
              </div>
            </li>
            <li className="question-item" data-text="Pull your foot up towards your chin.">
              <div className="question-text">
                <b>Pull your foot up</b>{" "}
                <span className="paraphrase">
                  (Flex your foot, Bring your foot up)
                </span>{" "}
                towards your chin.
              </div>
            </li>
            <li className="question-item" data-text="Point your toes down.">
              <div className="question-text">
                <b>Point your toes down</b>{" "}
                <span className="paraphrase">
                  (Push your foot down, Plantarflex your foot)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="踵膝試験 (Heel-to-Shin Test)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to have you lie down for this test.">
              <div className="question-text">
                I'm going to have you <b>lie down</b>{" "}
                <span className="paraphrase">
                  (ask you to lie down, need you to recline)
                </span>{" "}
                for this test.
              </div>
            </li>
            <li className="question-item" data-text="Take your heel and run it up your shin.">
              <div className="question-text">
                Take your heel{" "}
                <span className="paraphrase">(Use your heel)</span> and{" "}
                <b>run it up your shin</b>{" "}
                <span className="paraphrase">
                  (slide it along your shin)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Start at your knee and go down to your ankle.">
              <div className="question-text">
                <b>Start at your knee</b> and go down to your ankle.
              </div>
            </li>
            <li className="question-item" data-text="Now do the other side.">
              <div className="question-text">
                Now do the <b>other side</b>.
              </div>
            </li>
          </ul>
        </Section>
      </Section>

      <Section title="感覚系の診察 (Sensory Examination)" level={2}>
        <Section title="四肢の触覚と痛覚 (Tactile and Pain Sensation of Extremities)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to test your sensation with this tissue paper.">
              <div className="question-text">
                I'm going to test{" "}
                <span className="paraphrase">(check, examine, assess)</span> your{" "}
                <b>sensation</b>{" "}
                <span className="paraphrase">
                  (feeling, sense of touch)
                </span>{" "}
                with this tissue paper.
              </div>
            </li>
            <li className="question-item" data-text="Close your eyes.">
              <div className="question-text">
                <b>Close your eyes</b>{" "}
                <span className="paraphrase">
                  (Shut your eyes, Keep your eyes closed)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Tell me when you feel this.">
              <div className="question-text">
                Tell me when you <b>feel this</b>{" "}
                <span className="paraphrase">
                  (notice this, sense this)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Does this feel the same on both sides?">
              <div className="question-text">
                Does this feel the <b>same on both sides</b>{" "}
                <span className="paraphrase">
                  (equal bilaterally, symmetric)
                </span>
                ?
              </div>
            </li>
            <li className="question-item" data-text="Now I'm going to use something sharp.">
              <div className="question-text">
                Now I'm going to use something <b>sharp</b>{" "}
                <span className="paraphrase">
                  (pointed, prickly)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Tell me if this feels sharp or dull.">
              <div className="question-text">
                Tell me if this feels <b>sharp or dull</b>{" "}
                <span className="paraphrase">
                  (pointed or blunt, prickly or smooth)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="Do both sides feel equally sharp?">
              <div className="question-text">
                Do both sides feel <b>equally sharp</b>{" "}
                <span className="paraphrase">
                  (the same, symmetric)
                </span>
                ?
              </div>
            </li>
          </ul>
        </Section>
      </Section>

      <Section title="反射の診察 (Reflex Examination)" level={2}>
        <Section title="腱反射 (Tendon Reflexes)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to check your reflexes.">
              <div className="question-text">
                I'm going to check{" "}
                <span className="paraphrase">(test, examine, assess)</span> your{" "}
                <b>reflexes</b>{" "}
                <span className="paraphrase">(tendon reflexes)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Please relax.">
              <div className="question-text">
                Please{" "}
                <span className="paraphrase">(Could you, Would you)</span>{" "}
                <b>relax</b>{" "}
                <span className="paraphrase">
                  (let yourself go limp, don't tense up)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="I'm going to tap your chin with this hammer.">
              <div className="question-text">
                I'm going to <b>tap your chin</b>{" "}
                <span className="paraphrase">(strike, hit)</span> with this
                hammer <span className="paraphrase">(reflex hammer)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Let your jaw muscle loose.">
              <div className="question-text">
                Let your <b>jaw muscle loose</b>{" "}
                <span className="paraphrase">
                  (Relax your jaw muscle, Don't tighten your jaw muscle)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="I'm going to tap your elbow and inner elbow with this hammer.">
              <div className="question-text">
                I'm going to <b>tap your elbow and inner elbow</b>{" "}
                <span className="paraphrase">(strike, hit)</span> with this
                hammer <span className="paraphrase">(reflex hammer)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Let your arm hang loose.">
              <div className="question-text">
                Let your <b>arm hang loose</b>{" "}
                <span className="paraphrase">
                  (Relax your arm, Don't tighten your arm)
                </span>
                .
              </div>
            </li>
            <li className="question-item" data-text="I'm going to tap your knee with this hammer.">
              <div className="question-text">
                I'm going to <b>tap your knee</b>{" "}
                <span className="paraphrase">(strike, hit)</span> with this
                hammer <span className="paraphrase">(reflex hammer)</span>.
              </div>
            </li>
            <li className="question-item" data-text="Let your leg hang loose.">
              <div className="question-text">
                Let your <b>leg hang loose</b>{" "}
                <span className="paraphrase">
                  (Relax your leg, Don't tighten your leg)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
        <Section title="病的反射 (Pathological Reflexes)" level={3}>
          <ul>
            <li className="question-item" data-text="I'm going to stroke the bottom of your foot with this toothpick.">
              <div className="question-text">
                I'm going to stroke{" "}
                <span className="paraphrase">(scratch, rub)</span> the{" "}
                <b>bottom of your foot</b>{" "}
                <span className="paraphrase">(sole of your foot)</span> with this
                toothpick.
              </div>
            </li>
            <li className="question-item" data-text="I'm checking for a Babinski sign.">
              <div className="question-text">
                I'm checking for a <b>Babinski sign</b>{" "}
                <span className="paraphrase">
                  (abnormal reflex, plantar reflex)
                </span>
                .
              </div>
            </li>
          </ul>
        </Section>
      </Section>

      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <button
          type="button"
          className="auth-button auth-button-primary"
          onClick={() => setShowLegacy((prev) => !prev)}
        >
          {showLegacy ? "旧版を閉じる" : "旧版を表示"}
        </button>
        <Link to="/neurological/old" className="back-link">
          旧版を別ページで開く
        </Link>
      </div>

      {showLegacy && (
        <Section title="旧版（Neurological legacy）" level={2} fullWidth>
          <PageIframe src={legacyUrl} title="神経診察（旧版）" />
        </Section>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <p className="lightbox-caption">クリックで閉じる</p>
        </div>
      )}
    </div>
  );
};

export default NeurologicalPage;
