"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Animated gradient background - stays behind everything */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl animate-pulse" />

      {/* Cursor spotlight */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
        }}
      />

      {/* Purple mouse glow */}
      <div
        className="fixed pointer-events-none z-50 rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.35) 50%, transparent 70%)",
        }}
      />
    </>
  );
}