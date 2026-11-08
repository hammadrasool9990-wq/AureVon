import React, { useState, useEffect } from 'react';

export const AmbientCursorGlow: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if pointer/fine cursor is present
    const mq = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mq.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isPointerDevice || !position) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-500 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-25 transition-transform duration-150 ease-out will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(56, 189, 248, 0.16) 40%, rgba(20, 184, 166, 0.08) 60%, transparent 75%)',
          left: `${position.x - 260}px`,
          top: `${position.y - 260}px`,
        }}
      />
    </div>
  );
};
