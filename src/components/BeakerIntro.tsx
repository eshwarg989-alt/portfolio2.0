import { useEffect, useRef, useState } from 'react';

interface BeakerIntroProps {
  onComplete: () => void;
}

export default function BeakerIntro({ onComplete }: BeakerIntroProps) {
  const [spillProgress, setSpillProgress] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const progress = e.clientX / window.innerWidth;
      setMouseX(progress);
      setSpillProgress(Math.min(progress * 100, 100));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (spillProgress >= 95) {
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  }, [spillProgress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      style={{
        opacity: spillProgress >= 95 ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
        pointerEvents: spillProgress >= 95 ? 'none' : 'auto',
      }}
    >
      <div className="text-center">
        <div className="relative inline-block">
          <svg
            width="200"
            height="300"
            viewBox="0 0 200 300"
            className="drop-shadow-2xl"
            style={{
              transform: `rotate(${mouseX * 45}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <defs>
              <linearGradient id="beakerGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#bae6fd', stopOpacity: 0.5 }} />
              </linearGradient>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <path
              d="M 60 50 L 50 250 Q 50 270 70 270 L 130 270 Q 150 270 150 250 L 140 50 Z"
              fill="url(#beakerGlass)"
              stroke="#93c5fd"
              strokeWidth="3"
            />

            <path
              d="M 55 60 L 145 60 L 145 50 L 55 50 Z"
              fill="#93c5fd"
              stroke="#60a5fa"
              strokeWidth="2"
            />

            <rect
              x="58"
              y={250 - (spillProgress / 100) * 180}
              width="84"
              height={(spillProgress / 100) * 180}
              fill="url(#liquidGradient)"
              rx="2"
              style={{
                transition: 'y 0.1s ease-out, height 0.1s ease-out',
              }}
            />

            {spillProgress > 30 && (
              <>
                <ellipse
                  cx={150 + mouseX * 100}
                  cy={100 + mouseX * 150}
                  rx={10 + mouseX * 15}
                  ry={15 + mouseX * 20}
                  fill="#3b82f6"
                  opacity={0.6}
                  style={{
                    animation: 'fall 0.8s ease-in infinite',
                  }}
                />
                <ellipse
                  cx={145 + mouseX * 90}
                  cy={130 + mouseX * 160}
                  rx={8 + mouseX * 12}
                  ry={12 + mouseX * 18}
                  fill="#1d4ed8"
                  opacity={0.7}
                  style={{
                    animation: 'fall 0.6s ease-in infinite',
                    animationDelay: '0.2s',
                  }}
                />
                <ellipse
                  cx={155 + mouseX * 110}
                  cy={80 + mouseX * 140}
                  rx={6 + mouseX * 10}
                  ry={10 + mouseX * 15}
                  fill="#2563eb"
                  opacity={0.8}
                  style={{
                    animation: 'fall 0.7s ease-in infinite',
                    animationDelay: '0.4s',
                  }}
                />
              </>
            )}
          </svg>

          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64">
            <div className="bg-blue-500/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${spillProgress}%` }}
              />
            </div>
            <p className="text-blue-200 text-sm mt-3 font-light tracking-wider">
              Move cursor right to enter
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(50px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
