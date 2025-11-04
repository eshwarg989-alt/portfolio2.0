import { useEffect, useRef, useState } from 'react';

const skillsData = [
  { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
  { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-blue-500' },
  { name: 'PostgreSQL', level: 87, color: 'from-blue-700 to-blue-500' },
  { name: 'Docker', level: 83, color: 'from-blue-500 to-blue-600' },
  { name: 'AWS', level: 80, color: 'from-orange-500 to-yellow-500' },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skillsData.length).fill(0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      skillsData.forEach((skill, index) => {
        setTimeout(() => {
          let current = 0;
          const increment = skill.level / 50;
          const interval = setInterval(() => {
            current += increment;
            if (current >= skill.level) {
              current = skill.level;
              clearInterval(interval);
            }
            setAnimatedLevels((prev) => {
              const newLevels = [...prev];
              newLevels[index] = Math.round(current);
              return newLevels;
            });
          }, 20);
        }, index * 100);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-5xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-2xl font-bold text-blue-400 tabular-nums">
                    {animatedLevels[index]}%
                  </span>
                </div>

                <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${animatedLevels[index]}%`,
                      boxShadow: isVisible
                        ? '0 0 20px rgba(59, 130, 246, 0.5)'
                        : 'none',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Constantly learning and adapting to new technologies to build cutting-edge solutions
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
