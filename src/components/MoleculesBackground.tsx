import { useEffect, useRef } from 'react';

interface Molecule {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
}

export default function MoleculesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const molecules: Molecule[] = [];
    const moleculeCount = 80;

    for (let i = 0; i < moleculeCount; i++) {
      molecules.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      molecules.forEach((mol) => {
        mol.x += mol.vx;
        mol.y += mol.vy;
        mol.z += mol.vz;

        if (mol.x < 0 || mol.x > canvas.width) mol.vx *= -1;
        if (mol.y < 0 || mol.y > canvas.height) mol.vy *= -1;
        if (mol.z < 0 || mol.z > 1000) mol.vz *= -1;

        const scale = 1000 / (1000 - mol.z);
        const x2d = mol.x;
        const y2d = mol.y;
        const size = mol.size * scale;

        const depth = mol.z / 1000;
        const opacity = 0.3 + depth * 0.7;

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${opacity * 0.5})`;
        ctx.fill();
      });

      for (let i = 0; i < molecules.length; i++) {
        for (let j = i + 1; j < molecules.length; j++) {
          const dx = molecules[i].x - molecules[j].x;
          const dy = molecules[i].y - molecules[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(molecules[i].x, molecules[i].y);
            ctx.lineTo(molecules[j].x, molecules[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
}
