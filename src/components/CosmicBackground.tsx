import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  speed: number;
  twinkleFactor: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for interactive constellation connection
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    // Generate stars
    const starCount = Math.floor((width * height) / 8000);
    const stars: Star[] = Array.from({ length: Math.min(starCount, 140) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      twinkleFactor: Math.random() * Math.PI * 2,
    }));

    // Shooting star state
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      opacity: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      if (shootingStar.active) return;
      shootingStar = {
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 70,
        speed: Math.random() * 12 + 15,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
        opacity: 1,
        active: true,
      };
    };

    const shootingInterval = setInterval(() => {
      if (Math.random() > 0.4) triggerShootingStar();
    }, 4000);

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

      // Render stars & twinkle
      stars.forEach((star) => {
        star.twinkleFactor += star.speed;
        const currentAlpha = star.alpha + Math.sin(star.twinkleFactor) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 238, 255, ${clampedAlpha})`;
        ctx.fill();

        // Connect star to mouse if close enough
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const lineAlpha = (1 - dist / mouse.radius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      });

      // Render subtle constellation bonds between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const lineAlpha = (1 - dist / 80) * 0.12;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Render shooting star
      if (shootingStar.active) {
        ctx.save();
        ctx.beginPath();
        const endX = shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length;
        const endY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;

        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          endX,
          endY
        );
        gradient.addColorStop(0, `rgba(0, 242, 254, 0)`);
        gradient.addColorStop(0.7, `rgba(139, 92, 246, ${shootingStar.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.lineCap = 'round';
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.02;

        if (shootingStar.opacity <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Ambient glowing nebulae */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/10 via-pink-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
    </div>
  );
};
