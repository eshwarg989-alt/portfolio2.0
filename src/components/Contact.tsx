import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const contactData = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,CA',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false]);
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

  const handleCardClick = (index: number) => {
    setRevealedCards((prev) => {
      const newRevealed = [...prev];
      newRevealed[index] = !newRevealed[index];
      return newRevealed;
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-5xl w-full">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white text-center mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <p
          className={`text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Let's collaborate on your next project. Click on each card to reveal contact details.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactData.map((contact, index) => (
            <div
              key={contact.label}
              onClick={() => handleCardClick(index)}
              className={`group relative bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative perspective-1000">
                <div
                  className={`transition-all duration-700 ${
                    revealedCards[index] ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`${
                      revealedCards[index] ? 'opacity-0' : 'opacity-100'
                    } transition-opacity duration-300`}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                      {contact.label}
                    </h3>

                    <p className="text-blue-300 text-center text-sm">Click to reveal</p>
                  </div>

                  <div
                    className={`absolute inset-0 ${
                      revealedCards[index] ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                    style={{
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <contact.icon className="w-8 h-8 text-blue-400 mb-4" />
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors duration-300 text-center font-medium break-all px-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/20 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you
            have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Send Message
          </a>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
