"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "../sections/Styles.css";

const phases = ["Create", "Develop", "Interact", "Optimize", "Deliver"];
const loadDuration = 5200;

type FlightRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [flightRect, setFlightRect] = useState<FlightRect | null>(null);

  const wordmarkRef = useRef<HTMLHeadingElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const sourceImageRef = useRef<HTMLDivElement | null>(null);
  const flightRef = useRef<HTMLDivElement | null>(null);

  const activePhase = useMemo(() => {
    const phaseIndex = Math.min(
      phases.length - 1,
      Math.floor((progress / 100) * phases.length),
    );

    return phases[phaseIndex];
  }, [progress]);

  useEffect(() => {
    let raf = 0;
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
      window.setTimeout(() => {
        const source = sourceImageRef.current?.getBoundingClientRect();
        const target = document
          .querySelector<HTMLElement>("[data-preloader-hero-image]")
          ?.getBoundingClientRect();

        if (!source || !target) {
          setIsVisible(false);
          return;
        }

        setFlightRect({
          left: source.left,
          top: source.top,
          width: source.width,
          height: source.height,
        });
      }, 140);
    };

    raf = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isClosing || !flightRect) {
      return;
    }

    const target = document
      .querySelector<HTMLElement>("[data-preloader-hero-image]")
      ?.getBoundingClientRect();

    const flight = flightRef.current;

    if (!target || !flight) {
      setIsVisible(false);
      return;
    }

    const raf = window.requestAnimationFrame(() => {
      gsap.to(wordmarkRef.current, {
        autoAlpha: 0.12,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(stageRef.current, {
        autoAlpha: 0,
        y: -12,
        duration: 0.55,
        ease: "power2.out",
      });

      gsap.to(flight, {
        left: target.left,
        top: target.top,
        width: target.width,
        height: target.height,
        duration: 1.3,
        ease: "power3.inOut",
        onComplete: () => {
          setIsVisible(false);
        },
      });
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [flightRect, isClosing]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`preloader ${isClosing ? "is-closing" : ""}`}
      aria-hidden="true"
    >
      <h2 ref={wordmarkRef} className="preloader-wordmark" aria-hidden="true">
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
        <div ref={stageRef} className="preloader-stage">
          <div ref={sourceImageRef} className="preloader-image-wrap">
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

      {flightRect ? (
        <div
          ref={flightRef}
          className="preloader-flight"
          style={{
            left: flightRect.left,
            top: flightRect.top,
            width: flightRect.width,
            height: flightRect.height,
          }}
        >
          <Image
            src="/images/profile-image.jpg"
            alt=""
            fill
            priority
            className="preloader-flight-image"
          />
        </div>
      ) : null}

      <div className="preloader-progress" aria-hidden="true">
        <span
          className="preloader-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="preloader-percent">{Math.round(progress)}%</span>
    </div>
  );
};

export default Preloader;
