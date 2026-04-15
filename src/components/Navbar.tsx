import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a1628]/80 backdrop-blur-xl shadow-2xl shadow-orange-500/10 border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-bold text-lg tracking-wide hover:text-orange-400 transition-all duration-300 hover:scale-105"
        >
          Ansh <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-all duration-300 tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <button
            onClick={() => handleNav('#contact')}
            className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 hover:scale-105 transform"
          >
            Hire Me
          </button>
        </nav>

        <button
          className="md:hidden text-white hover:text-orange-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a1628]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-slate-300 hover:text-orange-400 transition-colors text-left text-sm font-medium py-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
