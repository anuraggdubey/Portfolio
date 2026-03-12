import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timelineItems = [
  {
    year: "Feb 2026 — Apr 2026",
    role: "Blockchain Contributor — Stellar Journey to Mastery",
    company: "Rise In",
    type: "project",
    description:
      "Participating in the Stellar Journey to Mastery program by Rise In, building decentralized applications on the Stellar blockchain and learning asset issuance, trustlines, and secure asset transfers.",
    tags: ["Stellar Blockchain", "Web3", "JavaScript"],
    color: "primary",
  },

  {
    year: "May 2025 — Jul 2025",
    role: "Documentation Intern",
    company: "RumiCare Event (College Internship)",
    type: "work",
    description:
      "Worked as a documentation intern for the RumiCare event, assisting in technical documentation, event coordination, and digital content preparation for workshops and activities.",
    tags: ["Documentation", "Technical Writing", "Event Coordination"],
    color: "accent2",
  },

  {
    year: "2025 — Present",
    role: "Full Stack & Blockchain Projects",
    company: "Personal Development",
    type: "project",
    description:
      "Building multiple projects including Merchant Mitra (UPI assistant for merchants), Sweet Bites e-commerce platform, Voice Cloning & Detection system, and a Stellar blockchain asset registry.",
    tags: ["React", "Node.js", "MongoDB", "Blockchain"],
    color: "primary",
  },

  {
    year: "2023 — 2026",
    role: "B.Sc Computer Science",
    company: "University Program",
    type: "education",
    description:
      "Pursuing Bachelor of Science in Computer Science with focus on programming, web development, networking, and emerging technologies like blockchain and artificial intelligence.",
    tags: ["Programming", "Data Structures", "Web Development"],
    color: "accent",
  }
];

const hackathons = [
  {
    title: "ZeroDay National Hackathon",
    organizer: "SIES College",
    date: "Dec 2025",
    description: "Participated in a national-level hackathon competing with teams from multiple colleges to develop innovative solutions under strict time constraints.",
    tags: ["Hackathon", "Development", "Innovation"],
    certificate: "/certificate/ZeroDay Certificate .pdf",
    icon: "🚀",
    color: "accent",
  },
  {
    title: "SHUBARAMBH Intercollegiate Hackathon",
    organizer: "Atharva College",
    date: "Dec 2025",
    achievement: "🥉 3rd Place Winner",
    description: "Secured third place by building a technology solution during the competitive SHUBARAMBH hackathon event.",
    tags: ["Hackathon", "Teamwork", "Problem Solving"],
    certificate: "/certificate/shubharambh.pdf",
    icon: "🏆",
    color: "primary",
  },
  {
    title: "Build & Grow AI Hackathon 2.0",
    organizer: "GDG (Google Developer Group) – NMIMS",
    date: "Dec 2025",
    achievement: "Top 20 Finalist",
    description: "Competed among 1500+ participants and 300 teams in a national AI hackathon organized by GDG.",
    tags: ["AI", "Hackathon", "Innovation"],
    certificate: "/certificate/GDG Certificate.pdf",
    icon: "🚀",
    color: "accent2",
  },
  {
    title: "HackFusion Hackathon",
    organizer: "Sardar Patel Institute of Technology",
    date: "Feb 2026",
    description: "Participated in HackFusion where teams built innovative technology solutions within a limited time frame.",
    tags: ["Hackathon", "Collaboration", "Problem Solving"],
    certificate: "/certificate/Hackfusion Certificate.pdf",
    icon: "🚀",
    color: "primary",
  }
];

const typeIcons: Record<string, string> = {
  work: '💼',
  project: '🚀',
  certification: '🏆',
  education: '🎓',
};

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const hackathonsRef = useRef(null);
  const hackathonsInView = useInView(hackathonsRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[140px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-primary" />
            <span className="text-primary text-sm font-mono tracking-widest uppercase">Journey</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16">
            A timeline of where I've been, what I've built, and how I've grown as an engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/40 via-border to-transparent transform -translate-x-1/2" />

          <div className="space-y-8">
            {timelineItems.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Hackathons Section */}
        <div className="mt-32 relative" ref={hackathonsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hackathonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-primary" />
              <span className="text-primary text-sm font-mono tracking-widest uppercase">
                Hackathons
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Hackathons & <span className="text-gradient-accent">Competitions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-16">
              Competitive events where I collaborated with teams to build innovative solutions under time pressure.
            </p>
          </motion.div>

          {/* responsive grid layout: Desktop → grid-cols-2, Large screens → grid-cols-4, Mobile → grid-cols-1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathons.map((hackathon, i) => (
              <HackathonCard key={i} hackathon={hackathon} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }: { item: typeof timelineItems[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={`relative md:w-[46%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
    >
      {/* Connector dot - desktop only */}
      <div
        className={`hidden md:block absolute top-8 w-3 h-3 rounded-full border-2 ${item.color === 'primary' ? 'border-primary bg-primary/20' :
          item.color === 'accent' ? 'border-accent bg-accent/20' :
            'border-accent2 bg-accent2/20'
          } ${isEven ? '-right-[7.5%] translate-x-1/2' : '-left-[7.5%] -translate-x-1/2'}`}
        style={{ zIndex: 10 }}
      />

      {/* Card */}
      <div className={`group glass rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 ${isEven ? 'md:mr-6' : 'md:ml-6'
        }`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{typeIcons[item.type]}</span>
            <div>
              <div className="font-mono text-xs text-muted-foreground">{item.year}</div>
              <h3 className="font-display font-semibold text-foreground">{item.role}</h3>
            </div>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-md ${item.color === 'primary' ? 'bg-primary/10 text-primary' :
            item.color === 'accent' ? 'bg-accent/10 text-accent' :
              'bg-accent2/10 text-accent2'
            }`}>
            {item.company}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const HackathonCard = ({ hackathon, index }: { hackathon: typeof hackathons[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 flex flex-col h-full hover:shadow-float"
    >
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{hackathon.icon}</div>
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg leading-tight mb-1">{hackathon.title}</h3>
            <p className="text-sm text-muted-foreground">{hackathon.organizer} • {hackathon.date}</p>
          </div>
        </div>
      </div>

      {hackathon.achievement && (
        <div className="mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-md inline-block ${hackathon.color === 'primary' ? 'bg-primary/10 text-primary' :
            hackathon.color === 'accent' ? 'bg-accent/10 text-accent' :
              'bg-accent2/10 text-accent2'
            }`}>
            {hackathon.achievement}
          </span>
        </div>
      )}

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
        {hackathon.description}
      </p>

      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {hackathon.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50">
          <a
            href={hackathon.certificate}
            download
            className="flex items-center gap-2 text-xs font-mono text-primary hover:text-accent transition-colors w-fit"
          >
            📄 Download Certificate
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
