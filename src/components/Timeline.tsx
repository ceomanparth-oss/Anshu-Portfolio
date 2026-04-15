import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Rocket, Star, Lightbulb } from 'lucide-react';

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
    role: 'GICRISE Lead (Incubation Centre)',
    org: 'Galgotias University',
    badge: 'Startup Ecosystem',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    icon: Lightbulb,
    iconColor: 'bg-emerald-500',
    points: [
      'Supported execution of innovation bootcamps and startup programs',
      'Coordinated partnerships with 15+ schools for innovation initiatives',
      'Assisted in startup incubation processes including coordination and documentation',
      'Gained exposure to funding, mentorship, and early-stage startup ecosystems',
    ],
  },
  {
    period: '2024 – 2025',
    role: 'Vice President, Entrepreneurship Cell',
    org: 'Galgotias University',
    badge: 'Leadership',
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    icon: Rocket,
    iconColor: 'bg-sky-500',
    points: [
      'Led Startup Pitch Fest — coordinated 150+ student startup teams',
      'Executed 5-part Founder Talk Series with industry experts',
      'Drove campus-wide engagement through startup events and branding initiatives',
      'Built strong network with founders, mentors, and student entrepreneurs',
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
  {
    period: '2014 – 2017',
    role: 'Diploma in Mechanical Engineering',
    org: 'CT Group of Institutions (Jalandhar)',
    badge: 'Education',
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    icon: GraduationCap,
    iconColor: 'bg-amber-500',
    points: [
      'Strong foundation in thermodynamics, manufacturing, and engineering mechanics',
      'Hands-on experience through workshops and lab training',
      'Exposure to industrial tools and basic production systems',
      'Enhanced problem-solving through technical projects',
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
        <div className={`w-12 h-12 ${item.iconColor} rounded-full flex items-center justify-center shadow-xl shadow-current/40 flex-shrink-0 ring-4 ring-[#0a1628] hover:scale-110 transition-transform duration-300`}>
          <Icon size={20} className="text-white" />
        </div>
        {index < timeline.length - 1 && (
          <div className="w-1 flex-1 bg-gradient-to-b from-white/30 via-white/10 to-transparent mt-3 relative" />
        )}
      </div>

      <div className="pb-10 flex-1 group">
        <div className="bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-2 group-hover:bg-[#0d1f3c]/80">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-slate-400 text-xs font-bold tracking-wide uppercase">{item.period}</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${item.badgeColor}`}>
              {item.badge}
            </span>
          </div>
          <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">{item.role}</h3>
          <p className="text-orange-400/80 text-sm font-medium mb-4">{item.org}</p>
          <ul className="space-y-2">
            {item.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-sky-500 rounded-full mt-1.5 flex-shrink-0 shadow-md shadow-orange-500/50" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="bg-[#0a1628] py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            A Journey Driven by<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
              Grit & Growth
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Marketing Execution → Startup Leadership → Strategic Sales → Technical Innovation
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
