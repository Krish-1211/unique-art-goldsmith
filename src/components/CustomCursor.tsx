import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }
    
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: -100, y: -100 };
    let lastMouse = { x: -100, y: -100 };
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const addParticle = (x: number, y: number) => {
      const isDiamond = Math.random() > 0.6;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 + 0.5, // drift downwards
        life: 0,
        maxLife: Math.random() * 40 + 30,
        size: Math.random() * (isDiamond ? 3 : 2) + 1,
        color: isDiamond ? 'rgba(255, 255, 255, 0.8)' : 'rgba(197, 160, 89, 0.6)', // White for diamond, gold for dust
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Calculate distance moved
      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Add particles based on distance moved to create a smooth trail
      if (distance > 0) {
        const steps = Math.min(Math.floor(distance / 5), 10);
        for (let i = 0; i < steps; i++) {
          const px = lastMouse.x + (dx * i) / steps;
          const py = lastMouse.y + (dy * i) / steps;
          if (Math.random() > 0.5) addParticle(px, py);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        
        // Add subtle wave to vertical motion
        p.x += Math.sin(p.life * 0.1) * 0.5;

        const opacity = 1 - p.life / p.maxLife;
        
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        
        // Draw diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.lineTo(p.size, 0);
        ctx.lineTo(0, p.size);
        ctx.lineTo(-p.size, 0);
        ctx.closePath();
        ctx.fill();
        
        // Subtle glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
