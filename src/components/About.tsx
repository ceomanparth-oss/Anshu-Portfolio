import { useEffect, useRef, useState } from 'react';
import { MapPin, Zap, Target, Users } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Schools Handled', color: 'text-orange-400', icon: Target },
  { value: '10K+', label: 'Audience Managed', color: 'text-sky-400', icon: Users },
  { value: '150+', label: 'Startups Assisted', color: 'text-emerald-400', icon: Zap },
  { value: '3+', label: 'Years Field Experience', color: 'text-amber-400', icon: MapPin },
];

const pillars = [
  { label: 'Operations & Sales', icon: '📈', desc: 'Campaign Execution & B2B Field Sales' },
  { label: 'Business analysis', icon: '📊', desc: 'Data Analysis & Strategic Insights' },
  { label: 'Tech', icon: '🤖', desc: 'AI/ML Engineering & Tools' },
  { label: 'Startup', icon: '🚀', desc: 'Incubation & Entrepreneurship' },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="bg-[#0d1f3c] py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">Technical & Operations</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              I have grown into a professional who bridges <span className="text-orange-400 font-semibold">technical thinking (AI/ML)</span> with <span className="text-sky-400 font-semibold">marketing execution and business analysis</span>, enabling a strong balance of strategy and on-ground impact.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently, I execute national-level campaigns across 12+ schools for PhysicsWallah, handling operations and coordination at scale. At Galgotias University, I led initiatives in the Entrepreneurship Cell, managing startup events and campus branding. Earlier, I co-founded Manparth LLP and handled B2B deal closures at Just Dial, building strong business and market understanding.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I believe true growth comes from consistently executing ideas with a solution-oriented and analytical approach to drive real results.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm pt-2">
              <MapPin size={16} className="text-orange-400 flex-shrink-0" />
              <span className="font-semibold">Jamshedpur, Jharkhand → Noida</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="group bg-gradient-to-br from-[#0a1628]/80 to-[#0d1f3c]/80 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/30 cursor-pointer hover:bg-[#0a1628]/90"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <div className="text-white font-bold text-sm group-hover:text-orange-400 transition-colors">{p.label}</div>
                <div className="text-slate-400 text-xs mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label, color, icon: Icon }, i) => (
            <div
              key={label}
              className={`group relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] border border-white/10 rounded-2xl px-4 py-8 text-center transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Icon size={24} className={`${color} mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl font-extrabold ${color} mb-2`}>{value}</div>
              <div className="text-slate-400 text-xs font-semibold">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
