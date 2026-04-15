import {
  Code2,
  Palette,
  Megaphone,
  Brain,
  Heart,
  Car,
  BarChart,
  Cpu,
  Film,
  Globe
} from 'lucide-react';

/* ================= SKILLS ================= */

const skillGroups = [
  {
    title: 'Marketing & Operations',
    icon: Megaphone,
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    skills: [
      'ATL/BTL Campaign Execution',
      'Vendor Management',
      'Data Tracking & Reporting',
      'CRM & MIS Systems',
      'Event Coordination',
      'Ground-Level Operations'
    ],
  },
  {
    title: 'Business Analysis',
    icon: BarChart,
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/10',
    skills: [
      'Data Analysis & Insights',
      'Business Process Optimization',
      'KPI Tracking & Metrics',
      'Market Research & Trends',
      'Performance Tracking & creation',
      'Strategic Recommendations'
    ],
  },
  {
    title: 'Technical Skills',
    icon: Code2,
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    skills: [
      'Python',
      'SQL',
      'Machine Learning',
      'Computer Vision (OpenCV)',
      'Advanced Excel',
      'WordPress'
    ],
  },
  {
    title: 'Creative Tools',
    icon: Palette,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    skills: [
      'Canva',
      'Figma',
      'Adobe Suite',
      'Presentation Design',
      'Content Creation'
    ],
  },
  {
    title: 'Leadership & Soft Skills',
    icon: Brain,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    skills: [
      'Team Coordination',
      'Cross-functional Collaboration',
      'B2B Sales & Negotiation',
      'Problem-Solving',
      'Real-Time Execution',
      'Stakeholder Management'
    ],
  },

];

/* ================= PROJECTS ================= */

const projects = [
  {
    title: 'Heart Disease Prediction System',
    icon: Heart,
    tech: ['Python', 'Scikit-learn', 'Pandas', 'ML Pipeline'],
    desc: 'Built ML model with 85%+ accuracy for early detection.',
    accent: 'text-rose-400',
    border: 'border-rose-500/30',
    badge: '85% Accuracy',
    badgeColor: 'bg-rose-500/20 text-rose-300',
  },
  {
    title: 'Road Lane Detection System',
    icon: Car,
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    desc: 'Real-time lane detection using computer vision.',
    accent: 'text-sky-400',
    border: 'border-sky-500/30',
    badge: 'Computer Vision',
    badgeColor: 'bg-sky-500/20 text-sky-300',
  },
  {
    title: 'Student Grade Prediction System',
    icon: BarChart,
    tech: ['Python', 'Machine Learning'],
    desc: 'Predicts student academic performance.',
    accent: 'text-indigo-400',
    border: 'border-indigo-500/30',
    badge: 'Predictive Model',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
  },
  {
    title: 'AI-Based Coal Optimization (CoDA)',
    icon: Cpu,
    tech: ['Python', 'AI/ML'],
    desc: 'Improved efficiency and reduced loss using AI.',
    accent: 'text-amber-400',
    border: 'border-amber-500/30',
    badge: '98% Accuracy',
    badgeColor: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Netflix Clone (React)',
    icon: Film,
    tech: ['React', 'JavaScript'],
    desc: 'Responsive Netflix UI clone with modern design.',
    accent: 'text-red-400',
    border: 'border-red-500/30',
    badge: 'Frontend',
    badgeColor: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'E-Commerce Web Application',
    icon: Globe,
    tech: ['HTML', 'CSS', 'JavaScript'],
    desc: 'Responsive e-commerce UI with product display.',
    accent: 'text-green-400',
    border: 'border-green-500/30',
    badge: 'Web App',
    badgeColor: 'bg-green-500/20 text-green-300',
  },
];

/* ================= HOOK ================= */

// Hook - not currently used but kept for future scroll animations
// function useInView(threshold = 0.1) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) setInView(true);
//     }, { threshold });
//
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//
//   return { ref, inView };
// }

/* ================= COMPONENT ================= */

export default function Skills() {

  return (
    <section id="skills" className="bg-[#0a1628] py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with description */}
        <div className="text-center mb-10">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Expertise & Proficiency</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-2">
            Comprehensive Skill Set
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Mastering diverse domains across marketing, technology, analytics, and leadership to deliver exceptional results.
          </p>
        </div>

        {/* Premium Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {skillGroups.map(({ title, icon: Icon, color, border, bg, skills }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border ${border} rounded-2xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 cursor-pointer overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon size={24} className={`${color} transition-colors duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm mt-2 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {title}
                </h3>

                {/* Skills */}
                <div className="space-y-1.5">
                  {skills.map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <span className={`${color} mt-1 flex-shrink-0 text-xs`}>•</span>
                      <span className="text-slate-300 text-xs leading-snug hover:text-white transition-colors duration-200">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Border accent on hover */}
              <div className={`absolute inset-0 rounded-2xl ${border} group-hover:${border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} style={{
                borderWidth: '2px',
                opacity: '0'
              }} />
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Portfolio</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
              Technical Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`group relative bg-gradient-to-br from-[#0d1f3c] to-[#0a1628] border ${p.border} p-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 overflow-hidden`}>
                  <div className={`absolute inset-0 ${p.border.replace('border', 'bg')} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-3">
                      <div className={`p-2 rounded-lg ${p.border.replace('border', 'bg').replace('/30', '/10')} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`${p.accent} transition-colors`} size={20} />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${p.badgeColor} border ${p.border.replace('border', 'border')}`}>
                        {p.badge}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-base mb-1 group-hover:text-orange-400 transition-colors duration-300">{p.title}</h4>
                    <p className="text-slate-400 text-xs mb-3 leading-snug">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs text-slate-300 bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded transition-colors duration-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MANY MORE */}
        <div className="text-center mt-10 bg-gradient-to-r from-orange-500/10 via-transparent to-sky-500/10 rounded-2xl py-5 px-6 border border-orange-500/20">
          <p className="text-slate-300 text-sm">
            + Built <span className="text-white font-semibold">15+ additional projects</span> including UI clones, games, animations, responsive websites, Resume Builder, 2048 Game, Chess Game, and more.
          </p>
        </div>

      </div>
    </section>
  );
}