import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Users, Globe, Lightbulb, TrendingUp, Rocket, Building2, Settings} from 'lucide-react';

const orgs = [
  {
    name: 'PhysicsWallah (TGS)',
    color: 'border-sky-500/40 hover:border-sky-500/70',
    accent: 'text-sky-400',
    bg: 'bg-sky-500/10',
    campaigns: [
      {
        title: 'NTST – National Talent Search Test',
        icon: BookOpen,
        desc: 'Assisted end-to-end planning, design coordination, and field execution across multiple cities.',
        tag: 'National Level',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
      {
        title: 'Fit-Test Family Event',
        icon: Users,
        desc: 'Supported 2000+ audience multi-city event with real-time logistics and coordination.',
        tag: '2000+ Audience',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
      {
        title: 'Hello Bachchon Screenings',
        icon: Globe,
        desc: 'Managed school-level screenings across multiple institutions.',
        tag: 'Multi-City',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
      {
        title: 'Udaan Mahotsav',
        icon: Rocket,
        desc: 'Executed flagship multi-city campaign across 10+ locations.',
        tag: 'Flagship Event',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
      {
        title: 'Summer Camp Learning Tracks',
        icon: BookOpen,
        desc: 'Executed structured programs including Entrepreneurship, Olympiad, and activities.',
        tag: 'Program Execution',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
      {
        title: 'Vendor & Operations Coordination',
        icon: Settings,
        desc: 'Handled vendor coordination and operational workflows.  Coordinated campaign rollout across 12+ schools.',
        tag: 'Operations | 12+ Schools',
        tagColor: 'bg-sky-500/20 text-sky-300',
      },
    ],
  },

  {
    name: 'Galgotias University (E-Cell & Branding)',
    color: 'border-orange-500/40 hover:border-orange-500/70',
    accent: 'text-orange-400',
    bg: 'bg-orange-500/10',
    campaigns: [
      {
        title: 'Startup Pitch Fest',
        icon: Award,
        desc: 'Led coordination for 150+ startup teams.',
        tag: '150+ Startups',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'Founder Talk Series',
        icon: Lightbulb,
        desc: 'Executed 5-part expert session series.',
        tag: '5-Part Series',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'Digital Campus Outreach',
        icon: Globe,
        desc: 'Managed branding and engagement campaigns.',
        tag: 'Branding',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'Launchpad – Entrepreneurial Summit',
        icon: Rocket,
        desc: 'Executed large-scale entrepreneurial event.',
        tag: 'Summit',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'Pitch Me – Startup Revival Challenge',
        icon: TrendingUp,
        desc: 'Worked on startup revival strategy challenges.',
        tag: 'Innovation',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'Meta Certification Program',
        icon: Award,
        desc: 'Executed digital marketing certification collaboration.',
        tag: 'Certification',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
      {
        title: 'E-Talks (Fintech Edition)',
        icon: Lightbulb,
        desc: 'Organized fintech-focused speaker sessions.',
        tag: 'Speaker Series',
        tagColor: 'bg-orange-500/20 text-orange-300',
      },
    ],
  },

  {
    name: 'GICRISE Incubation Centre',
    color: 'border-emerald-500/40 hover:border-emerald-500/70',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    campaigns: [
      {
        title: 'Galgotias IdeAThon',
        icon: Rocket,
        desc: 'Startup innovation program with VC exposure.',
        tag: 'Innovation',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
      },
      {
        title: 'Innovation Bootcamps',
        icon: Lightbulb,
        desc: 'Startup workshops and founder training.',
        tag: 'Startup Ecosystem',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
      },
      {
        title: 'School Innovation Partnerships',
        icon: BookOpen,
        desc: 'Worked with 15+ schools for innovation programs.',
        tag: '15+ Schools',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
      },
      {
        title: 'International Trade Show',
        icon: Globe,
        desc: 'Supported international startup showcase.',
        tag: 'Global Exposure',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
      },
      {
        title: 'Startup Ecosystem Programs',
        icon: Users,
        desc: 'Worked on incubation and startup support systems.',
        tag: 'Incubation',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
      },
    ],
  },

  {
    name: 'Manparth LLP',
    color: 'border-amber-500/40 hover:border-amber-500/70',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    campaigns: [
      {
        title: 'Holistic Education Campaigns',
        icon: Users,
        desc: 'Executed 12+ school campaigns impacting 1000+ students.',
        tag: '1000+ Students',
        tagColor: 'bg-amber-500/20 text-amber-300',
      },
      {
        title: 'Skill Development Workshops',
        icon: Lightbulb,
        desc: 'Conducted personal growth and awareness sessions.',
        tag: 'Workshops',
        tagColor: 'bg-amber-500/20 text-amber-300',
      },
      {
        title: 'Start in UP – Seed Grant',
        icon: Award,
        desc: 'Recognized under government startup initiative.',
        tag: 'Govt. Recognized',
        tagColor: 'bg-amber-500/20 text-amber-300',
      },
    ],
  },

  {
    name: 'Just Dial Ltd',
    color: 'border-slate-500/40 hover:border-slate-500/70',
    accent: 'text-slate-300',
    bg: 'bg-slate-500/10',
    campaigns: [
      {
        title: 'B2B Market Expansion Campaign',
        icon: TrendingUp,
        desc: 'Executed field sales campaigns with 15+ deals/month.',
        tag: '15+ Deals/Month',
        tagColor: 'bg-slate-500/20 text-slate-300',
      },
      {
        title: 'Client Acquisition & Conversion',
        icon: Users,
        desc: 'Handled onboarding and deal conversion strategies.',
        tag: 'Sales',
        tagColor: 'bg-slate-500/20 text-slate-300',
      },
    ],
  },
];

const CampaignCard = ({ campaign, accent }) => {
  const Icon = campaign.icon;

  return (
    <div className="bg-[#0a1628] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <Icon size={18} className={accent} />
        <span className={`text-xs px-2 py-1 rounded-full ${campaign.tagColor}`}>
          {campaign.tag}
        </span>
      </div>
      <h4 className="text-white font-semibold text-sm mb-2">
        {campaign.title}
      </h4>
      <p className="text-slate-400 text-sm">
        {campaign.desc}
      </p>
    </div>
  );
};

const OrgSection = ({ org }) => {
  return (
    <div className={`border ${org.color} rounded-2xl p-6`}>
      <h3 className={`mb-4 font-bold ${org.accent}`}>
        {org.name}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {org.campaigns.map((c, i) => (
          <CampaignCard key={i} campaign={c} accent={org.accent} />
        ))}
      </div>
    </div>
  );
};

export default function Campaigns() {
  return (
    <section id="campaigns" className="bg-[#0d1f3c] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Impact Gallery</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Campaigns & Execution<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
              Across Ecosystems
            </span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Executed campaigns and initiatives across multiple domains — combining marketing, operations, and startup ecosystem exposure to deliver real-world impact.
          </p>
        </div>

        <div className="space-y-6">
          {orgs.map((org, i) => (
            <OrgSection key={org.name} org={org} index={i} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '12+', label: 'Schools', color: 'text-sky-400' },
            { val: '10K+', label: 'Event Audience', color: 'text-orange-400' },
            { val: '150+', label: 'Startups', color: 'text-emerald-400' },
            { val: '1K+', label: 'Students Impacted', color: 'text-amber-400' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0a1628] border border-white/10 rounded-xl p-5 text-center">
              <div className={`text-3xl font-extrabold ${s.color}`}>{s.val}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
