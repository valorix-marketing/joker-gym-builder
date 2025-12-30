import React, { useEffect, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Smooth follow
      position.current.x += (targetPosition.current.x - position.current.x) * 0.15;
      position.current.y += (targetPosition.current.y - position.current.y) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${position.current.x - 10}px, ${position.current.y - 10}px)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${position.current.x - 150}px, ${position.current.y - 150}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={followerRef}
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          background: 'linear-gradient(135deg, hsl(51, 100%, 50%), hsl(351, 81%, 49%))',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)',
        }}
      />
      {/* Large glow effect */}
      <div
        ref={glowRef}
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-[1] opacity-20 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  );
};

export default MouseFollower;
