import React, { useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  pulsePhase: number;
  color: string;
}

export const FreshCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const emberColors = [
      'rgba(224, 122, 67, ', // primary copper
      'rgba(255, 162, 91, ', // warm amber
      'rgba(242, 150, 84, ', // bright copper
      'rgba(200, 101, 45, ', // deep copper
      'rgba(255, 140, 66, ', // glowing orange
    ];

    // Generate glowing copper ember particles
    const emberCount = Math.min(85, Math.floor((width * height) / 16000));
    let embers: Ember[] = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.7 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003,
      pulsePhase: Math.random() * Math.PI * 2,
      color: emberColors[Math.floor(Math.random() * emberColors.length)],
    }));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render drifting embers
      embers.forEach((ember) => {
        // Drift upwards
        ember.y -= ember.speedY;
        ember.x += ember.speedX;
        ember.pulsePhase += 0.03;

        // Wrap around when rising past top
        if (ember.y < -10) {
          ember.y = height + 10;
          ember.x = Math.random() * width;
        }
        if (ember.x < -10) ember.x = width + 10;
        if (ember.x > width + 10) ember.x = -10;

        // Mouse interaction: gentle repulsion / glow
        const dx = mouse.x - ember.x;
        const dy = mouse.y - ember.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentAlpha = ember.opacity + Math.sin(ember.pulsePhase) * 0.2;
        let currentSize = ember.size;

        if (dist < mouse.radius) {
          const factor = 1 - dist / mouse.radius;
          ember.x -= (dx / dist) * factor * 1.5;
          ember.y -= (dy / dist) * factor * 1.5;
          currentAlpha = Math.min(1, currentAlpha + factor * 0.4);
          currentSize += factor * 1.5;
        }

        currentAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        // Draw soft glow behind particle
        const gradient = ctx.createRadialGradient(
          ember.x,
          ember.y,
          0,
          ember.x,
          ember.y,
          currentSize * 2.5
        );
        gradient.addColorStop(0, `${ember.color}${currentAlpha})`);
        gradient.addColorStop(1, `${ember.color}0)`);

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, currentSize * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw solid core
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, currentSize * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `${ember.color}${currentAlpha * 1.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070605]">
      {/* Interactive Floating Embers Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Atmospheric Warm Copper Volumetric Nebulae / Lighting Orbs */}
      <div className="absolute -top-32 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-[#E07A43]/15 via-[#C8652D]/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-[#9A3412]/15 via-[#E07A43]/6 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#E07A43]/10 via-[#FFA25B]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Bottom Volcanic Horizon Warm Rim Glow */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#E07A43]/12 via-[#C8652D]/5 to-transparent pointer-events-none" />
    </div>
  );
};
