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
      <div className="hero-orb absolute left-[-4rem] top-20 h-72 w-72 rounded-full bg-accent/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-shell"
        >
          <div className="section-kicker">Experience</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Education, internships, and competitive work
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            A cleaner view of the experiences shaping how I build, communicate, and contribute.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
                  <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {item.company}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/75 px-3 py-1 text-[11px] text-foreground/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 border-t border-border/80 pt-12">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                  Hackathons and competitions
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
                  Fast-paced environments where I practiced collaboration, iteration, and shipping under pressure.
                </p>
              </div>
              <div className="section-panel">
                <p className="text-sm leading-7 text-foreground/85">
                  These events helped strengthen product thinking, teamwork, and delivery speed.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                  <h4 className="mt-3 text-lg font-semibold text-foreground">{hackathon.title}</h4>
                  <p className="mt-4 flex-grow text-sm leading-7 text-muted-foreground">{hackathon.description}</p>
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
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:opacity-85"
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
