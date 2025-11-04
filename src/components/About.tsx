import { Code2, Rocket, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: 'Clean Code',
              description:
                'Writing maintainable, scalable, and efficient code that stands the test of time.',
              delay: 'delay-100',
            },
            {
              icon: Rocket,
              title: 'Fast Performance',
              description:
                'Optimizing every aspect to deliver lightning-fast user experiences.',
              delay: 'delay-300',
            },
            {
              icon: Sparkles,
              title: 'Modern Design',
              description:
                'Creating beautiful, intuitive interfaces that users love to interact with.',
              delay: 'delay-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 ${
                isVisible
                  ? `opacity-100 translate-y-0 ${item.delay}`
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-500" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-lg text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
