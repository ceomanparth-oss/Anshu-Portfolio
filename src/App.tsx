import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Campaigns from './components/Campaigns';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Campaigns />
      <Skills />
      <Contact />
    </div>
  );
}
