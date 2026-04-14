import { Phone, Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9110177207',
    href: 'tel:+919110177207',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'anshuraj.200697@gmail.com',
    href: 'mailto:anshuraj.200697@gmail.com',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'www.linkedin.com/in/anshu-raj2006/',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my projects',
    href: 'github.com/Anshworld',
    color: 'text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/30',
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Campaigns', href: '#campaigns' },
  { label: 'Skills', href: '#skills' },
];

export default function Contact() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="bg-[#0d1f3c] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Ready to Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-sky-400">
              the Future
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            "Coming from Jamshedpur, working in Noida feels like a step closer to creating a massive impact. Let's build something meaningful together."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#0a1628] border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">Available for High-Impact Roles</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              I'm actively looking for opportunities in Marketing Strategy, Operations Management, and Business Execution. Open to full-time and collaborative roles.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
              <MapPin size={14} className="text-orange-400" />
              <span>Pan India — Open to Relocation</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Marketing Operations', 'Execution Specialist', 'AI/ML Engineer', 'Startup Ecosystem'].map((tag) => (
                <span key={tag} className="text-xs text-orange-300 bg-orange-500/10 border border-orange-500/30 px-3 py-1.5 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contactItems.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') || href === '#' ? '_blank' : undefined}
                rel="noreferrer"
                className={`block bg-[#0a1628] border ${border} rounded-xl p-4 hover:border-opacity-70 transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${bg} mb-3`}>
                  <Icon size={18} className={color} />
                </div>
                <div className="text-slate-500 text-xs font-medium mb-0.5">{label}</div>
                <div className={`text-xs font-semibold ${color} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  {value}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            <span className="text-orange-400 font-bold">Anshu Raj</span> —  Marketing Operations | Execution Specialist | AI-ML Engineer
          </div>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-slate-500 hover:text-orange-400 transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919110177207"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 hover:-translate-y-1 z-40 group"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  );
}
