import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://demo.example.com',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered responses, message encryption, and file sharing capabilities.',
    tech: ['TypeScript', 'WebSocket', 'OpenAI', 'Redis'],
    github: 'https://github.com/yourusername/ai-chat',
    demo: 'https://chat.example.com',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative project management platform with task tracking, team communication, and progress analytics.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/yourusername/project-manager',
    demo: 'https://pm.example.com',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with hourly forecasts, location-based alerts, and interactive maps.',
    tech: ['React', 'Weather API', 'Tailwind', 'Charts.js'],
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather.example.com',
    gradient: 'from-orange-600 to-yellow-600',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with multi-platform integration and scheduled posting.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/yourusername/social-dashboard',
    demo: 'https://social.example.com',
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracker with workout plans, nutrition logging, and progress visualization.',
    tech: ['React Native', 'Firebase', 'TensorFlow', 'Charts'],
    github: 'https://github.com/yourusername/fitness-tracker',
    demo: 'https://fitness.example.com',
    gradient: 'from-red-600 to-rose-600',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-7xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`h-2 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
                />

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
