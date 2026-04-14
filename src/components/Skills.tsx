import React, { useEffect, useRef, useState } from 'react';
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

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ================= COMPONENT ================= */

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-[#0a1628] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SKILLS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map(({ title, icon: Icon, color, border, bg, skills }) => (
            <div key={title} className={`bg-[#0d1f3c] border ${border} rounded-2xl p-6`}>
              <Icon size={20} className={color} />
              <h3 className="text-white font-bold mt-3 mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-slate-400 text-xs bg-white/5 px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <h3 className="text-white font-bold text-xl mb-6 text-center">
          Technical Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={`bg-[#0d1f3c] border ${p.border} p-6 rounded-xl`}>
                <div className="flex justify-between items-center mb-3">
                  <Icon className={p.accent} />
                  <span className={`text-xs px-2 py-1 rounded ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <h4 className="text-white font-semibold">{p.title}</h4>
                <p className="text-slate-400 text-sm mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MANY MORE */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            + Built <span className="text-white font-semibold">15+ additional projects</span> including UI clones, games, animations, responsive websites, Resume Builder, 2048 Game, Chess Game, and more.
          </p>
        </div>

      </div>
    </section>
  );
}