import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const timelineItems = [
  {
    year: 'Feb 2026 - Apr 2026',
    role: 'Blockchain Contributor',
    company: 'Rise In',
    description:
      'Participating in the Stellar Journey to Mastery program and building practical familiarity with asset issuance, trustlines, and secure transfer flows on Stellar.',
    tags: ['Stellar', 'Web3', 'JavaScript'],
  },
  {
    year: 'May 2025 - Jul 2025',
    role: 'Documentation Intern',
    company: 'RumiCare Event',
    description:
      'Supported documentation, event coordination, and digital materials for workshops and operational planning.',
    tags: ['Documentation', 'Coordination', 'Technical Writing'],
  },
  {
    year: '2025 - Present',
    role: 'Full-stack and Blockchain Projects',
    company: 'Personal Development',
    description:
      'Building project-based experience across payments, e-commerce, AI experiments, and blockchain prototypes while improving product and engineering depth.',
    tags: ['React', 'Node.js', 'MongoDB', 'Blockchain'],
  },
  {
    year: '2023 - 2026',
    role: 'B.Sc. Computer Science',
    company: 'University Program',
    description:
      'Studying computer science fundamentals with exposure to programming, web development, networking, and emerging technologies.',
    tags: ['Programming', 'Web Development', 'Data Structures'],
  },
];

const hackathons = [
  {
    title: 'ZeroDay National Hackathon',
    organizer: 'SIES College',
    date: 'Dec 2025',
    description:
      'Built solutions in a national hackathon environment under time pressure and tight teamwork constraints.',
    tags: ['Hackathon', 'Development', 'Teamwork'],
    certificate: '/certificate/ZeroDay Certificate .pdf',
  },
  {
    title: 'SHUBARAMBH Intercollegiate Hackathon',
    organizer: 'Atharva College',
    date: 'Dec 2025',
    description:
      'Won 3rd place by shipping a competitive project solution during the event.',
    tags: ['3rd Place', 'Problem Solving', 'Collaboration'],
    certificate: '/certificate/shubharambh.pdf',
  },
  {
    title: 'Build & Grow AI Hackathon 2.0',
    organizer: 'GDG NMIMS',
    date: 'Dec 2025',
    description:
      'Reached the top 20 finalist group in a large-scale AI hackathon with a strong national participant pool.',
    tags: ['AI', 'Finalist', 'Innovation'],
    certificate: '/certificate/GDG Certificate.pdf',
  },
  {
    title: 'HackFusion Hackathon',
    organizer: 'Sardar Patel Institute of Technology',
    date: 'Feb 2026',
    description:
      'Worked through a high-pressure hackathon format focused on rapid collaboration and prototype delivery.',
    tags: ['Hackathon', 'Prototype', 'Execution'],
    certificate: '/certificate/Hackfusion Certificate.pdf',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-foreground/5" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Experience</div>
          <h2 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground sm:text-[16px]">
            Education & work
          </h2>

          {/* Timeline — compact list on mobile, grid cards on lg */}
          <div className="mt-4 sm:mt-6">
            {/* Mobile: minimal timeline list */}
            <div className="space-y-0 lg:hidden">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.role}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative border-l-2 border-border py-4 pl-4 first:pt-0 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-5 h-2 w-2 rounded-full bg-foreground/40 first:top-1" />

                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-[12px] font-semibold text-foreground">{item.role}</h3>
                  <span className="mt-0.5 inline-block text-[11px] text-muted-foreground">{item.company}</span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-1.5 py-0.5 text-[9px] font-medium text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: card grid */}
            <div className="hidden gap-6 lg:grid lg:grid-cols-2">
              {timelineItems.map((item, index) => (
                <motion.article
                  key={`${item.year}-${item.role}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="section-panel"
                >
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    {item.year}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-[13px] font-semibold text-foreground">{item.role}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      {item.company}
                    </span>
                  </div>
                  <p className="mt-3 text-[12px] leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/75 px-2.5 py-0.5 text-[9px] text-foreground/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div className="mt-8 border-t border-border/80 pt-6 sm:mt-16 sm:pt-12">
            <h3 className="text-[14px] font-semibold tracking-tight text-foreground sm:text-[15px]">
              Hackathons
            </h3>

            {/* Mobile: horizontal scroll cards */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2 hide-scrollbar sm:hidden">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  className="flex w-[240px] flex-shrink-0 flex-col rounded-[16px] border border-border/80 bg-background/75 p-3.5"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {hackathon.date}
                  </p>
                  <h4 className="mt-1.5 text-[12px] font-semibold leading-snug text-foreground">{hackathon.title}</h4>
                  <p className="mt-1 text-[10px] text-muted-foreground">{hackathon.organizer}</p>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <div className="flex gap-1">
                      {hackathon.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-2 py-0.5 text-[9px] font-medium text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={hackathon.certificate}
                      download
                      className="text-[10px] font-medium text-foreground/60 underline decoration-border underline-offset-2"
                    >
                      Cert →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: grid cards */}
            <p className="mt-2 hidden max-w-2xl text-[12px] leading-6 text-muted-foreground sm:block">
              Fast-paced environments where I practiced collaboration, iteration, and shipping under pressure.
            </p>
            <div className="mt-8 hidden gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4">
              {hackathons.map((hackathon, index) => (
                <motion.article
                  key={hackathon.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.07 }}
                  className="section-panel flex h-full flex-col"
                >
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    {hackathon.organizer} • {hackathon.date}
                  </p>
                  <h4 className="mt-2 text-[13px] font-semibold text-foreground">{hackathon.title}</h4>
                  <p className="mt-3 flex-grow text-[12px] leading-6 text-muted-foreground">{hackathon.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/75 px-3 py-1 text-[11px] text-foreground/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={hackathon.certificate}
                    download
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all duration-300 hover:gap-2 hover:text-foreground"
                  >
                    View certificate
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
