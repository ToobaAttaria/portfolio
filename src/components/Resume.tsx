import { useState } from 'react';
import {
  Briefcase,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  BadgeCheck,
} from 'lucide-react';

const experience = [
  {
    role: 'Intern – Full Stack Developer',
    company: 'Brooklyn Textiles International Pvt Ltd',
    duration: 'April 2026 – July 2026',
    points: [
      'Assisted in developing and maintaining software solutions for internal business operations.',
      'Participated in debugging, testing, and improving application performance.',
      'Worked with databases to manage and retrieve application data.',
      'Gained practical experience working in a professional software development environment.',
    ],
    link: 'https://drive.google.com/file/d/1uEJC39bJJZEreh8NQgHKzSA2O-o2xyaK/view?usp=sharing',
    linkLabel: 'View Experience Letter',
  },
];

const certificates = [
  {
    title: 'Web and Mobile App Development',
    issuer: 'SMIT (Saylani Mass IT Training)',
    link: 'https://drive.google.com/file/d/1f0BrZCOnkHrassZCpWOBMfiQcTl1gha5/view?usp=sharing',
  },
  {
    title: 'JavaScript Essentials',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/file/d/1-kIuZ_WBcwwB00IveJ0Cn11mPFsmlU6Y/view?usp=sharing',
  },
  {
    title: 'Computer Applications',
    issuer: 'TEVTA',
    link: 'https://drive.google.com/file/d/1Lg978Yb1qDawMav4L5RSFw7D7zzHHIgX/view?usp=drive_link',
  },
  {
    title: 'CCA (Certificate in Computer Applications)',
    issuer: 'CCA',
    link: 'https://drive.google.com/file/d/1H4w_jBQeFTUpTrJ7KRk9tRE3BoaCQZ64/view?usp=drive_link',
  },
];

const INITIAL_CERT_COUNT = 3;

const Resume = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certificates : certificates.slice(0, INITIAL_CERT_COUNT);

  return (
    <section id="resume" className="py-16 md:py-16 relative mx-auto px-6 max-w-5xl">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-14 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-zinc-400">
            Resume
          </h1>
          <p className="text-gray-400 mt-2 text-lg max-w-xl">
            Professional experience and certifications.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
              <Briefcase className="text-accent" size={22} />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.role}
                className="relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 overflow-hidden
                  hover:border-accent/50 transition-all duration-300"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-accent font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-zinc-400 bg-zinc-800/70 border border-zinc-700 rounded-full px-4 py-1.5 self-start whitespace-nowrap">
                    <Calendar size={14} className="text-accent" />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {exp.points.map((point) => (
                    <li key={point} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black bg-accent
                      px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all duration-300"
                  >
                    {exp.linkLabel} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
              <Award className="text-accent" size={22} />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Certificates</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCerts.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between
                  hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_hsl(var(--accent))]
                  transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-300"></div>

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4 group-hover:border-accent/60 transition-colors duration-300">
                    <BadgeCheck className="text-accent" size={20} />
                  </div>
                  <h3 className="text-white font-semibold leading-snug group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1.5">{cert.issuer}</p>
                </div>

                <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 group-hover:text-accent transition-colors duration-300">
                  View Certificate
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </a>
            ))}
          </div>

          {certificates.length > INITIAL_CERT_COUNT && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="px-8 py-3 rounded-full border border-accent text-accent font-medium
                  hover:bg-accent hover:text-black transition-all duration-300 inline-flex items-center gap-2"
              >
                {showAllCerts ? (
                  <>Show Less <ChevronUp size={16} /></>
                ) : (
                  <>Show More ({certificates.length - INITIAL_CERT_COUNT} more) <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;