import { useEffect, useState } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import profilePic from '../pic (1).jpg';

const roles = [
  'Marketing Operations Lead',
  'Execution Specialist',
  'AI-ML Engineer',
  'Startup Founder',
  'Business analysis',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-[#0a1628] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2040] to-[#0a1628]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.2) 0%, transparent 50%)',
        }}
      />
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Available for High-Impact Roles
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
               Anshu Raj
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold text-slate-300 mb-2 h-8">
              <span className="text-orange-400">{displayed}</span>
              <span className="animate-pulse text-orange-300">|</span>
            </div>

            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              "Turning strategies into ground-level reality — highly responsive and available for real-time assistance to maintain execution momentum."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleScroll('#campaigns')}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 transform"
              >
                View My Campaigns
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 backdrop-blur-sm">
                <Download size={18} />
                <a href="/Anshu_Raj.pdf" target="_blank" rel="noopener noreferrer" className="text-white">
                  Download Resume
                </a>
              </button>
              
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { label: 'PhysicsWallah', color: 'text-sky-400' },
                { label: 'Planet Spark', color: 'text-orange-400' },
                { label: 'Galgotias University', color: 'text-emerald-400' },
                { label: 'GICRISE', color: 'text-orange-400' },
              ].map((org) => (
                <span key={org.label} className={`text-xs font-bold tracking-widest uppercase ${org.color} opacity-70`}>
                  {org.label}
                </span>
              ))}
              <div className="basis-full" />
              {[
                { label: 'Applied Enginering Servises', color: 'text-emerald-400' },
                { label: 'Just Dial', color: 'text-orange-400' },
                { label: 'ANA Groups', color: 'text-sky-400' },
              ].map((org) => (
                <span key={org.label} className={`text-xs font-bold tracking-widest uppercase ${org.color} opacity-70`}>
                  {org.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden border-4 border-orange-500/70 shadow-2xl shadow-orange-500/50 relative">
              <img
                src={profilePic}
                alt="Anshu Raj"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/20 to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-15 bg-orange-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-500/20 rounded-full blur-xl" />
          </div>

          <div className="hidden lg:flex flex-col gap-3 absolute top-12 right-0">
            <div className="bg-[#0f2040] border border-white/10 rounded-xl px-3 py-2 shadow-xl animate-slide-down">
              <div className="text-lg font-bold text-orange-400">12+</div>
              <div className="text-xs text-slate-400">Schools Handled</div>
            </div>
            <div className="bg-[#0f2040] border border-white/10 rounded-xl px-3 py-2 shadow-xl animate-slide-up">
              <div className="text-lg font-bold text-sky-400">10K+</div>
              <div className="text-xs text-slate-400">Audience Reached</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-orange-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
