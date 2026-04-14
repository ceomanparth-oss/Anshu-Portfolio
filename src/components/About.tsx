import { useEffect, useRef, useState } from 'react';
import { MapPin, Zap, Target, Users } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Schools Handled', color: 'text-orange-400', icon: Target },
  { value: '10K+', label: 'Audience Managed', color: 'text-sky-400', icon: Users },
  { value: '150+', label: 'Startups Assisted', color: 'text-emerald-400', icon: Zap },
  { value: '3+', label: 'Years Field Experience', color: 'text-amber-400', icon: MapPin },
];

const pillars = [
  { label: 'Operations', icon: '⚙️', desc: 'Marketing & Campaign Execution' },
  { label: 'Sales', icon: '💼', desc: 'B2B Field Sales & Negotiation' },
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
    <section id="about" className="bg-[#0d1f3c] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            From Jamshedpur to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
              National Campaigns
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              I've grown into a professional who bridges the gap between
              <span className="text-orange-400 font-semibold"> technical logic (AI/ML)</span> and
              <span className="text-sky-400 font-semibold"> on-ground marketing reality</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              From managing B2B bulk deal closures at Just Dial, to co-founding an EdTech startup (Manparth LLP),
              to currently executing national campaigns across 12+ schools for PhysicsWallah — every step has
              been about creating real, measurable impact.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I believe that growth comes not from ideas alone, but from executing them relentlessly on the ground
              with a solution-oriented approach.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm pt-2">
              <MapPin size={14} className="text-orange-400" />
              <span>Jamshedpur, Jharkhand  →  Noida</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-[#0a1628] border border-white/10 rounded-2xl p-5 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 group"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="text-white font-bold text-lg">{p.label}</div>
                <div className="text-slate-500 text-sm mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, color, icon: Icon }, i) => (
            <div
              key={label}
              className={`text-center bg-[#0a1628] border border-white/10 rounded-2xl py-8 px-4 transition-all duration-500 hover:border-white/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Icon size={22} className={`${color} mx-auto mb-3 opacity-70`} />
              <div className={`text-4xl font-extrabold ${color} mb-1`}>{value}</div>
              <div className="text-slate-500 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
