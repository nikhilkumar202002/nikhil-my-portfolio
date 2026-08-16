"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import "../sections/Styles.css";

const phases = ["Create", "Develop", "Interact", "Optimize", "Deliver"];
const loadDuration = 3600;

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const activePhase = useMemo(() => {
    const phaseIndex = Math.min(
      phases.length - 1,
      Math.floor((progress / 100) * phases.length),
    );

    return phases[phaseIndex];
  }, [progress]);

  useEffect(() => {
    let raf = 0;
    let hideTimer: number | undefined;
    let startTime: number | undefined;

    const step = (timestamp: number) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min((elapsed / loadDuration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        raf = window.requestAnimationFrame(step);
        return;
      }

      setIsClosing(true);
      hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 420);
    };

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);
      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`preloader ${isClosing ? "is-closing" : ""}`}
      aria-hidden="true"
    >
      <h2 className="preloader-wordmark" aria-hidden="true">
        <span className="preloader-wordmark-track">
          <span className="preloader-wordmark-item">
            NIKHIL KUMAR S VISUALIZER
          </span>
          <span className="preloader-wordmark-item">
            NIKHIL KUMAR S VISUALIZER
          </span>
          <span className="preloader-wordmark-item">
            NIKHIL KUMAR S VISUALIZER
          </span>
        </span>
      </h2>

      <div className="preloader-center-row" aria-hidden="true">
        <div className="preloader-stage">
          <div className="preloader-image-wrap">
            <Image
              src="/images/profile-image.jpg"
              alt=""
              width={168}
              height={228}
              priority
              className="preloader-image"
            />
          </div>

          <p className="preloader-phase">{activePhase}</p>
        </div>
      </div>

      <div className="preloader-progress" aria-hidden="true">
        <span className="preloader-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <span className="preloader-percent">{Math.round(progress)}%</span>
    </div>
  );
};

export default Preloader;
