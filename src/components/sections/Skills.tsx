import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    color: "primary",
    icon: "⬡",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3 / Tailwind CSS", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 72 },
      { name: "Framer Motion", level: 70 }
    ]
  },
  {
    title: "Backend",
    color: "accent",
    icon: "⬡",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "REST API Development", level: 85 },
      { name: "JWT Authentication", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 72 }
    ]
  },
  {
    title: "Tools & Platforms",
    color: "accent2",
    icon: "⬡",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Postman (API Testing)", level: 82 },
      { name: "VS Code", level: 90 },
      { name: "Canva", level: 80 },
      { name: "Microsoft Tools (Word, Excel, PowerPoint)", level: 85 }
    ]
  },
  {
    title: "AI & Emerging Tech",
    color: "primary",
    icon: "⬡",
    skills: [
      { name: "AI Tools (ChatGPT, Copilot, Cursor, Antigravity)", level: 85 },
      { name: "Prompt Engineering", level: 75 },
      { name: "Blockchain Fundamentals", level: 70 },
      { name: "Stellar Blockchain", level: 65 }
    ]
  }
];

const techIcons = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#00ACD7' },
  { name: 'Git & Github', color: '#2496ED' },
  { name: 'Postman', color: '#FF9900' },
  { name: 'Canva', color: '#E10098' },
  { name: 'Microsoft Tools', color: '#DC382D' },
  { name: 'Supabase', color: '#326CE5' },
  { name: 'Firebase', color: '#7B42BC' },
  { name: 'Next.js', color: '#1b1a1aff' },
  { name: 'AI Tools', color: '#cbc0c0ff' },
  { name: 'Prompt Engineering', color: '#6e6a6aff' },
  { name: 'Blockchain Fundamentals', color: '#1b1a1aff' },
  { name: 'Stellar Blockchain', color: '#4e4444ff' }
];

const SkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      ref={ref} 
      className="relative pl-6 py-2 border-l border-primary/20 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Node & connecting line */}
      <div className={`absolute top-1/2 -left-[5px] w-[9px] h-[9px] -translate-y-1/2 rotate-45 border border-primary transition-all duration-300 ${hovered ? 'bg-primary glow-primary scale-125' : 'bg-background'}`} />
      <div className={`absolute top-1/2 left-0 w-6 h-[1px] -translate-y-1/2 transition-all duration-300 ${hovered ? 'bg-primary' : 'bg-primary/20'}`} />
      
      <div className={`flex justify-between items-center text-sm relative z-10 transition-transform duration-300 ${hovered ? 'translate-x-2' : ''}`}>
        <span className={`font-mono uppercase tracking-widest ${hovered ? 'text-primary text-shadow-glow' : 'text-muted-foreground'}`}>{name}</span>
        <span className={`font-mono text-xs ${color === 'primary' ? 'text-primary' :
          color === 'accent' ? 'text-accent' : 'text-accent2'
          } ${hovered ? 'glow-primary' : ''}`}>[{level}%]</span>
      </div>
      
      {/* Small data bar replacement */}
      <div className={`mt-2 h-[2px] w-full bg-primary/10 overflow-hidden relative transition-transform duration-300 ${hovered ? 'translate-x-2' : ''}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
          className={`h-full shadow-[0_0_10px_currentColor] ${color === 'primary' ? 'bg-primary text-primary' :
            color === 'accent' ? 'bg-accent text-accent' :
              'bg-accent2 text-accent2'
            }`}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[130px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary glow-primary" />
            <span className="text-primary text-xs font-mono tracking-widest uppercase">03 // Neural_Nodes</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase"
          >
            Core <span className="text-primary text-shadow-glow">Capabilities</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-xl mb-16 font-mono text-sm leading-relaxed"
          >
            &gt; Syncing neural pathways...<br/>
            &gt; Evaluating technical expertise...<br/>
            &gt; Access granted. Displaying active skill nodes.
          </motion.p>

          {/* Category tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`px-6 py-2.5 text-xs font-mono uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${activeCategory === i
                  ? 'bg-primary/20 text-primary border-primary glow-primary shadow-float'
                  : 'bg-background/50 border-border text-muted-foreground hover:text-primary hover:border-primary/50'
                  }`}
              >
                <span className={`w-2 h-2 ${activeCategory === i ? 'bg-primary shadow-[0_0_8px_currentColor]' : 'bg-transparent border border-muted-foreground'}`}/>
                {cat.title}
              </button>
            ))}
          </motion.div>

          {/* Active category skills */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skillCategories[activeCategory].color}
                  delay={i * 0.1}
                />
              ))}
            </motion.div>

            {/* Skill overview card */}
            <motion.div
              key={`card-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="cyber-panel p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="text-6xl mb-6 font-mono text-primary/40 group-hover:text-primary transition-colors text-shadow-glow">
                {activeCategory === 0 ? '01' : activeCategory === 1 ? '02' : activeCategory === 2 ? '03' : '04'}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-wider text-primary">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 font-mono text-sm relative z-10 border-l-2 border-primary/30 pl-4 py-2">
                {activeCategory === 0 && "Building conceptual UI matrices. Specialized in real-time interfaces, GPU-accelerated rendering, and neuro-responsive user components."}
                {activeCategory === 1 && "Designing decentralized data layers and autonomous API networks. Bridging client instances with secure central mainframes."}
                {activeCategory === 2 && "Configuring deployment drones and automating cloud infrastructures. Maximizing efficiency through containerized virtualization environments."}
                {activeCategory === 3 && "Integrating AI subsystems and cryptography. Designing advanced logic flows and predictive algorithms."}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {skillCategories[activeCategory].skills.map((s) => (
                  <span
                    key={s.name}
                    className={`text-[10px] px-2 py-1 border font-mono uppercase tracking-widest ${skillCategories[activeCategory].color === 'primary'
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : skillCategories[activeCategory].color === 'accent'
                        ? 'bg-accent/10 text-accent border-accent/30'
                        : 'bg-accent2/10 text-accent2 border-accent2/30'
                      }`}
                  >
                    {s.name.split(' /')[0].split(' (')[0]}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech icons ticker */}
          <motion.div variants={itemVariants} className="mt-16 overflow-hidden border-y border-primary/20 py-6 relative">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-[10px] text-primary text-center mb-6 tracking-widest uppercase font-mono glow-primary inline-block bg-primary/10 px-4 py-1 border border-primary/30 relative left-1/2 -top-6 -translate-y-1/2 -translate-x-1/2">
              [ Active_Tech_Feeds ]
            </p>
            <div className="relative flex gap-6 overflow-hidden">
              <motion.div
                className="flex gap-6 shrink-0"
                animate={{ x: [0, -70 * techIcons.length] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                {[...techIcons, ...techIcons].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 border border-border bg-background hover:bg-primary/5 hover:border-primary/40 transition-colors shrink-0"
                  >
                    <span
                      className="w-1.5 h-1.5 animate-pulse"
                      style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                    />
                    <span className="text-xs text-foreground uppercase tracking-wider font-mono whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
