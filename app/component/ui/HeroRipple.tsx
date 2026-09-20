"use client";

import { useEffect, useRef } from "react";

interface RipplePulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  intensity: number;
  speed: number;
  life: number;
  maxLife: number;
}

const HeroRipple = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
    lastSpawnX: -1000,
    lastSpawnY: -1000,
  });

  const ripples = useRef<RipplePulse[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement || canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const spacing = 16;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const spawnRipple = (x: number, y: number, intensity = 1.0) => {
      ripples.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 220,
        intensity,
        speed: 3.2,
        life: 0,
        maxLife: 60,
      });
      mouse.current.lastSpawnX = x;
      mouse.current.lastSpawnY = y;
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouse.current.targetX = currentX;
      mouse.current.targetY = currentY;
      mouse.current.active = true;

      // Spawn a new ripple if mouse has moved at least 18px from last spawn
      const distFromLast = Math.hypot(
        currentX - mouse.current.lastSpawnX,
        currentY - mouse.current.lastSpawnY
      );

      if (distFromLast > 18) {
        spawnRipple(currentX, currentY, Math.min(1.2, distFromLast / 30));
      }
    };

    const handlePointerLeave = () => {
      mouse.current.active = false;
      mouse.current.targetX = -1000;
      mouse.current.targetY = -1000;
    };

    container.addEventListener("pointermove", handlePointerMove as EventListener);
    container.addEventListener("pointerleave", handlePointerLeave as EventListener);

    /*
     * Get your actual Tailwind primary color.
     *
     * If your primary is defined as:
     * --color-primary: #ff6500;
     *
     * this automatically picks it up.
     */
    const getPrimaryColor = () => {
      const root = getComputedStyle(document.documentElement);
      const cssColor =
        root.getPropertyValue("--color-primary").trim() ||
        root.getPropertyValue("--primary").trim();
      return cssColor || "#fb6c00";
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const primary = getPrimaryColor();

      // Smooth mouse position lerping
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.12;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.12;

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update active expanding ripples
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const r = ripples.current[i];
        r.radius += r.speed;
        r.life += 1;
        if (r.life >= r.maxLife || r.radius >= r.maxRadius) {
          ripples.current.splice(i, 1);
        }
      }

      // Draw dot grid with combined ripple wave calculations
      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (let y = -spacing; y < height + spacing; y += spacing) {
          let totalDispX = 0;
          let totalDispY = 0;
          let totalGlow = 0;

          // 1. Continuous Cursor Aura (when active)
          if (mouse.current.active) {
            const dx = x - mx;
            const dy = y - my;
            const dist = Math.hypot(dx, dy);
            const auraRadius = 200;

            if (dist < auraRadius) {
              const influence = Math.pow(1 - dist / auraRadius, 2);
              const wave = Math.sin(dist * 0.08 - time * 0.004) * influence;
              const angle = Math.atan2(dy, dx);

              totalDispX += Math.cos(angle) * wave * 18;
              totalDispY += Math.sin(angle) * wave * 18;
              totalGlow += influence * 0.45;
            }
          }

          // 2. Expanding Ripple Wavefronts
          for (let i = 0; i < ripples.current.length; i++) {
            const r = ripples.current[i];
            const dx = x - r.x;
            const dy = y - r.y;
            const dist = Math.hypot(dx, dy);

            const ringDiff = Math.abs(dist - r.radius);
            const waveWidth = 32;

            if (ringDiff < waveWidth && dist > 0) {
              const progress = ringDiff / waveWidth;
              const waveShape = (1 + Math.cos(progress * Math.PI)) * 0.5; // Bell curve
              const lifeFade =
                Math.pow(1 - r.life / r.maxLife, 1.2) *
                Math.max(0, 1 - dist / r.maxRadius);

              const ringPower = waveShape * lifeFade * r.intensity;
              const angle = Math.atan2(dy, dx);

              totalDispX += Math.cos(angle) * ringPower * 14;
              totalDispY += Math.sin(angle) * ringPower * 14;
              totalGlow += ringPower * 0.65;
            }
          }

          const drawX = x + totalDispX;
          const drawY = y + totalDispY;

          const baseSize = 0.8;
          const dotSize = baseSize + Math.min(1.6, totalGlow * 1.2);
          const opacity = Math.min(0.85, 0.10 + totalGlow * 0.55);

          ctx.beginPath();
          ctx.fillStyle = primary;
          ctx.globalAlpha = opacity;
          ctx.arc(drawX, drawY, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      container.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener
      );
      container.removeEventListener(
        "pointerleave",
        handlePointerLeave as EventListener
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        h-full
        w-full
      "
    />
  );
};

export default HeroRipple;