import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-light text-blue-300 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Your Name
            </h1>
            <h3 className="text-2xl md:text-4xl font-light text-blue-200">
              Full Stack Developer
            </h3>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Crafting elegant solutions through code. Passionate about building
            innovative web applications that make a difference.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-2 border border-blue-400/30">
              <img
                src="/WhatsApp Image 2025-11-04 at 18.13.30_b0204f0c.jpg"
                alt="Profile"
                className="w-full h-auto rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </a>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
