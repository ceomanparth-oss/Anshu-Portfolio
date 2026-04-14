import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Rocket, Star } from 'lucide-react';

const timeline = [
  {
    period: '2026 – Present',
    role: 'Marketing Operations Intern',
    org: 'The Gurukulam School (PhysicsWallah)',
    badge: 'Current',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    icon: Star,
    iconColor: 'bg-emerald-500',
    points: [
      'Assisted in ATL & BTL campaign execution across 12+ schools',
      'Coordinated vendors, managed TGS Requisition IDs & expense tracking',
      'Bridged Creative, SIG, and Ground teams for zero operational lag',
      'Executed NTST, Fit-Test (2000+ audience), and Hello Bachchon campaigns',
    ],
  },
  {
    period: '2024 – 2025',
    role: 'Vice President, E-Cell + GICRISE Intern',
    org: 'Galgotias University',
    badge: 'Leadership',
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    icon: Rocket,
    iconColor: 'bg-sky-500',
    points: [
      'Led Startup Pitch Fest — coordinated 150+ student startup teams',
      'Executed 5-part Founder Talk Series with industry experts',
      'Supported GICRISE Innovation Bootcamps and school partnerships (15+ schools)',
      'Co-founded Manparth LLP — received Seed Support Grant, "Start in UP" initiative',
    ],
  },
  {
    period: '2022 – 2025',
    role: 'B.Tech – Computer Science (AI & ML)',
    org: 'Galgotias University',
    badge: 'Education',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    icon: GraduationCap,
    iconColor: 'bg-amber-500',
    points: [
      'Specialized in Machine Learning, Computer Vision, and Data Engineering',
      'Built Heart Disease Prediction model (85%+ accuracy)',
      'Developed Road Lane Detection system using OpenCV',
      'Balanced academics with active startup and leadership roles',
    ],
  },
  {
    period: '2021 – 2022',
    role: 'Sales Engineer',
    org: 'Applied Engineering Services',
    badge: 'Industrial',
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    icon: Briefcase,
    iconColor: 'bg-orange-500',
    points: [
      'Handled industrial client sales across Bihar & Jharkhand',
      'Built technical consulting skills alongside B2B sales execution',
      'Developed strong client relationship management abilities',
    ],
  },
  {
    period: '2017 – 2020',
    role: 'Sales Executive → Team Lead',
    org: 'Just Dial Ltd (Chandigarh & Kolkata)',
    badge: 'Foundation',
    badgeColor: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    icon: Briefcase,
    iconColor: 'bg-slate-600',
    points: [
      'Executed high-decibel B2B field sales campaigns',
      'Led team to consistently close 15+ bulk deals per month',
      'Mastered client negotiation, communication, and leadership',
      'Built the execution mindset that defines my career today',
    ],
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const { ref, inView } = useInView();
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 ${item.iconColor} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
          <Icon size={18} className="text-white" />
        </div>
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-2" />
        )}
      </div>

      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <span className="text-slate-500 text-sm font-medium">{item.period}</span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
            {item.badge}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg">{item.role}</h3>
        <p className="text-orange-400 text-sm font-medium mb-4">{item.org}</p>
        <ul className="space-y-2">
          {item.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="bg-[#0a1628] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            A Journey Driven by<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
              Grit & Growth
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
                   Marketing Execution → Startup → Sales → Technical
          </p>
        </div>

        <div className="relative">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
