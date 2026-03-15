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
            <div className="w-12 h-[2px] bg-primary glow-primary" />
            <span className="text-primary text-xs font-mono tracking-widest uppercase">04 // Chronos_Log</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
            System <span className="text-primary text-shadow-glow">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16 font-mono text-sm leading-relaxed">
            &gt; Retreiving experience logs...<br/>
            &gt; Decrypting historical data points...<br/>
            &gt; Visualizing career trajectory in digital space.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 transform -translate-x-1/2">
             <div className="absolute inset-0 bg-primary glow-primary opacity-50" />
             {/* Animated scanning bar */}
             <motion.div 
               className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
               animate={{ top: ['0%', '100%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
             />
          </div>

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
              <div className="w-12 h-[2px] bg-accent glow-accent" />
              <span className="text-accent text-xs font-mono tracking-widest uppercase">
                05 // Combat_Trials
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
              Hackathons & <span className="text-accent drop-shadow-[0_0_10px_rgba(138,43,226,0.5)]">Competitions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mb-16 font-mono text-sm leading-relaxed">
              &gt; Analyzing competitive performance...<br/>
              &gt; Scanning for architectural innovation...<br/>
              &gt; High-intensity collaborative development logs found.
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
        className={`hidden md:block absolute top-8 w-4 h-4 rotate-45 border-2 ${item.color === 'primary' ? 'border-primary bg-primary/20 glow-primary' :
          item.color === 'accent' ? 'border-accent bg-accent/20 drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]' :
            'border-accent2 bg-accent2/20 drop-shadow-[0_0_8px_rgba(255,43,214,0.5)]'
          } ${isEven ? '-right-[7.5%] translate-x-1/2' : '-left-[7.5%] -translate-x-1/2'}`}
        style={{ zIndex: 10 }}
      />

      {/* Card */}
      <div className={`group cyber-panel p-6 border ${isEven ? 'md:mr-6' : 'md:ml-6'} ${item.color === 'primary' ? 'border-primary/30 hover:border-primary' :
          item.color === 'accent' ? 'border-accent/30 hover:border-accent' :
            'border-accent2/30 hover:border-accent2'
        } transition-all duration-300 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl opacity-80">{typeIcons[item.type]}</span>
            <div>
              <div className="font-mono text-[10px] text-primary/70 uppercase tracking-widest">{item.year}</div>
              <h3 className="font-display font-bold text-foreground uppercase tracking-wide group-hover:text-primary transition-colors">{item.role}</h3>
            </div>
          </div>
          <span className={`text-[10px] uppercase tracking-widest font-mono font-bold px-2 py-1 border ${item.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' :
            item.color === 'accent' ? 'bg-accent/10 text-accent border-accent/20' :
              'bg-accent2/10 text-accent2 border-accent2/20'
            }`}>
            {item.company}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-mono relative z-10 border-l border-primary/20 pl-4">
          &gt; {item.description}
        </p>

        <div className="flex flex-wrap gap-2 relative z-10">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-border bg-background/50 text-muted-foreground font-mono uppercase tracking-widest"
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
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="flex items-start justify-between mb-5 gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-3xl text-primary drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">{hackathon.icon}</div>
          <div>
            <h3 className="font-display font-bold text-foreground text-lg uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">{hackathon.title}</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60">{hackathon.organizer} • {hackathon.date}</p>
          </div>
        </div>
      </div>

      {hackathon.achievement && (
        <div className="mb-4 relative z-10">
          <span className={`text-[10px] uppercase tracking-widest font-mono font-bold px-2 py-1 border ${hackathon.color === 'primary' ? 'bg-primary/10 text-primary border-primary/30' :
            hackathon.color === 'accent' ? 'bg-accent/10 text-accent border-accent/30' :
              'bg-accent2/10 text-accent2 border-accent2/30'
            }`}>
            [{hackathon.achievement}]
          </span>
        </div>
      )}

      <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow font-mono relative z-10">
        {hackathon.description}
      </p>

      <div className="mt-auto space-y-5 relative z-10">
        <div className="flex flex-wrap gap-2">
          {hackathon.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-border bg-background/50 text-muted-foreground font-mono uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-primary/20">
          <a
            href={hackathon.certificate}
            download
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary hover:text-accent transition-all duration-300 w-fit group/btn"
          >
            <span className="border-b border-primary group-hover:border-accent pb-0.5">[ View_Artifact ]</span>
            <span className="text-xs">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
