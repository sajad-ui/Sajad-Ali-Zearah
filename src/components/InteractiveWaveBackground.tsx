import React, { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  opacity: number;
}

export const InteractiveWaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, distanceMoved: 0 });
  const ripplesRef = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Add a Ripple at coordinates
    const addRipple = (x: number, y: number) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 5,
        maxRadius: Math.random() * 80 + 120, // expanding water wave diameter
        speed: Math.random() * 1.5 + 2, // growth speed of the wave
        opacity: 0.35, // starting opacity
      });

      // Keep maximum 15 concurrent ripples for high performance
      if (ripplesRef.current.length > 15) {
        ripplesRef.current.shift();
      }
    };

    // Track Mouse Coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const mouse = mouseRef.current;

      // Calculate distance from last ripple spawn location
      const dx = x - mouse.lastX;
      const dy = y - mouse.lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      mouse.x = x;
      mouse.y = y;
      mouse.distanceMoved += distance;

      // Spawn ripples only when mouse travels at least 25 pixels
      if (mouse.distanceMoved > 25) {
        addRipple(x, y);
        mouse.lastX = x;
        mouse.lastY = y;
        mouse.distanceMoved = 0;
      }
    };

    // Support touch devices (scrolling and dragging)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const { clientX: x, clientY: y } = touch;
        const mouse = mouseRef.current;
        const dx = x - mouse.lastX;
        const dy = y - mouse.lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 30) {
          addRipple(x, y);
          mouse.lastX = x;
          mouse.lastY = y;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Dynamic wave mesh lines parameters (creates gentle rolling background waves)
    const waveCount = 3;
    let waveOffset = 0;

    // Loop callback
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      waveOffset += 0.008;

      // 1. DRAW PERSISTENT ACCENT BACKGROUND WAVES OF "AL-AYEN"
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const amplitude = 12 + w * 6;
        const frequency = 0.003 - w * 0.0005;
        const yOffset = height * 0.75 + w * 40; // waves drift along the bottom third of the portal

        ctx.moveTo(0, yOffset);
        for (let x = 0; x < width; x += 10) {
          // Dynamic mouse elevation: waves are pushed and distorted if the mouse is close!
          const dx = x - mouseRef.current.x;
          const dy = yOffset - mouseRef.current.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);
          let mouseDistortion = 0;
          if (distToMouse < 250) {
            mouseDistortion = Math.sin(distToMouse * 0.03 - waveOffset * 5) * (20 * (1 - distToMouse / 250));
          }

          const sine = Math.sin(x * frequency + waveOffset + w) * amplitude;
          ctx.lineTo(x, yOffset + sine + mouseDistortion);
        }

        // Oxford Blue and Al-Ayen Emeral Green color blends
        if (w === 0) {
          ctx.strokeStyle = 'rgba(0, 33, 71, 0.04)'; // Oxford Blue very subtle
        } else if (w === 1) {
          ctx.strokeStyle = 'rgba(11, 102, 62, 0.035)'; // Al-Ayen Green very subtle
        } else {
          ctx.strokeStyle = 'rgba(197, 160, 89, 0.03)'; // Al-Ayen Gold very subtle
        }
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 2. DRAW INTERACTIVE MOUSE RIPPLES (Waves emanating beneath the active pointer)
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.opacity = 1 - r.radius / r.maxRadius;

        if (r.opacity <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw multiple beautiful concentric water-droplet wave rings
        for (let ring = 0; ring < 3; ring++) {
          const ringRadius = r.radius - ring * 12;
          if (ringRadius <= 0) continue;

          ctx.beginPath();
          ctx.arc(r.x, r.y, ringRadius, 0, Math.PI * 2);

          // Alternating ring colors (Oxford Blue vs Gold vs Emeral Green)
          let strokeColor = `rgba(0, 33, 71, ${r.opacity * 0.12})`; // Default Oxford Blue
          if (i % 3 === 1) {
            strokeColor = `rgba(11, 102, 62, ${r.opacity * 0.12})`; // Al-Ayen Green
          } else if (i % 3 === 2) {
            strokeColor = `rgba(197, 160, 89, ${r.opacity * 0.10})`; // Al-Ayen Gold
          }

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1.5 - ring * 0.3;
          ctx.stroke();
        }

        // Draw a soft radial glow right in the center of the wave
        ctx.beginPath();
        const glowGradient = ctx.createRadialGradient(r.x, r.y, 1, r.x, r.y, r.radius);
        glowGradient.addColorStop(0, `rgba(11, 102, 62, ${r.opacity * 0.03})`);
        glowGradient.addColorStop(0.5, `rgba(197, 160, 89, ${r.opacity * 0.015})`);
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-80"
      style={{ backfaceVisibility: 'hidden' }}
    />
  );
};
