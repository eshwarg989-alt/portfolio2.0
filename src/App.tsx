import { useState } from 'react';
import BeakerIntro from './components/BeakerIntro';
import MoleculesBackground from './components/MoleculesBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <BeakerIntro onComplete={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <MoleculesBackground />
          <Navigation />
          <div className="relative">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
