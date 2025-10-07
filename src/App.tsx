import './i18n/config';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
