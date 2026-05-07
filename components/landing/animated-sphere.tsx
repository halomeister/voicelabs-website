"use client";

import { useEffect, useRef } from "react";

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxRadius = Math.min(rect.width, rect.height) * 0.45;

      // Draw concentric pulsing rings (voice ripple effect)
      const ringCount = 8;
      for (let i = 0; i < ringCount; i++) {
        const phase = (time * 1.2 + i * 0.8) % (Math.PI * 2);
        const radiusProgress = (Math.sin(phase) * 0.5 + 0.5);
        const radius = maxRadius * 0.2 + radiusProgress * maxRadius * 0.8;
        const alpha = 0.08 + (1 - radiusProgress) * 0.25;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw waveform bars in a circular pattern
      const barCount = 64;
      for (let i = 0; i < barCount; i++) {
        const angle = (i / barCount) * Math.PI * 2;
        const freq1 = Math.sin(time * 2 + i * 0.3) * 0.5 + 0.5;
        const freq2 = Math.sin(time * 1.5 + i * 0.5) * 0.3 + 0.3;
        const freq3 = Math.sin(time * 3 + i * 0.15) * 0.2 + 0.2;
        const amplitude = (freq1 + freq2 + freq3) / 3;

        const innerRadius = maxRadius * 0.3;
        const barLength = amplitude * maxRadius * 0.55;

        const x1 = centerX + Math.cos(angle) * innerRadius;
        const y1 = centerY + Math.sin(angle) * innerRadius;
        const x2 = centerX + Math.cos(angle) * (innerRadius + barLength);
        const y2 = centerY + Math.sin(angle) * (innerRadius + barLength);

        const alpha = 0.15 + amplitude * 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Center dot (microphone indicator)
      const pulseSize = 8 + Math.sin(time * 3) * 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, 0.6)`;
      ctx.fill();

      // Inner glow ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize + 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 0, 0, 0.15)`;
      ctx.lineWidth = 2;
      ctx.stroke();

      time += 0.015;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
