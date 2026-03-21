"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Always active on mount
    setIsActive(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isActive) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full blur-3xl transition-opacity duration-300"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.25) 50%, transparent 70%)",
        opacity: isActive ? 1 : 0,
      }}
    />
  );
}