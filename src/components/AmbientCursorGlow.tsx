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
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 transition-transform duration-150 ease-out will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(220, 38, 38, 0.2) 45%, transparent 70%)',
          left: `${position.x - 250}px`,
          top: `${position.y - 250}px`,
        }}
      />
    </div>
  );
};
