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

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="text-foreground/80 font-medium">{name}</span>
        <span className={`font-mono text-xs ${color === 'primary' ? 'text-primary' :
          color === 'accent' ? 'text-accent' : 'text-accent2'
          }`}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
          className={`h-full rounded-full ${color === 'primary' ? 'bg-gradient-primary' :
            color === 'accent' ? 'bg-gradient-accent' :
              'bg-gradient-to-r from-accent2 to-emerald-400'
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
            <div className="w-12 h-[1px] bg-gradient-primary" />
            <span className="text-primary text-sm font-mono tracking-widest uppercase">Skills</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-gradient-accent">Technical</span> Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-xl mb-16"
          >
            A curated toolkit refined through years of real-world engineering challenges
            and continuous learning.
          </motion.p>

          {/* Category tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === i
                  ? 'bg-gradient-primary text-primary-foreground shadow-float'
                  : 'glass border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                  }`}
              >
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
              className="glass rounded-2xl p-8 border border-border/50"
            >
              <div className="text-5xl mb-6">
                {activeCategory === 0 ? '🎨' : activeCategory === 1 ? '⚙️' : activeCategory === 2 ? '☁️' : '🛠️'}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeCategory === 0 && "Building pixel-perfect, performant UIs with modern frameworks. Obsessed with smooth animations, accessibility, and developer experience."}
                {activeCategory === 1 && "Designing and building robust, scalable APIs and data layers. From REST to GraphQL, monoliths to microservices."}
                {activeCategory === 2 && "Automating infrastructure and deployment pipelines. Cloud-native by default, always optimizing for reliability and cost."}
                {activeCategory === 3 && "Versioning, testing, documentation, and system design. The craft behind the code that keeps teams moving fast."}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[activeCategory].skills.map((s) => (
                  <span
                    key={s.name}
                    className={`text-xs px-2 py-1 rounded-md font-mono ${skillCategories[activeCategory].color === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : skillCategories[activeCategory].color === 'accent'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-accent2/10 text-accent2'
                      }`}
                  >
                    {s.name.split(' /')[0].split(' (')[0]}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech icons ticker */}
          <motion.div variants={itemVariants} className="mt-16 overflow-hidden">
            <p className="text-xs text-muted-foreground text-center mb-6 tracking-widest uppercase">
              Technologies I work with daily
            </p>
            <div className="relative flex gap-6 overflow-hidden">
              <motion.div
                className="flex gap-6 shrink-0"
                animate={{ x: [0, -50 * techIcons.length] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                {[...techIcons, ...techIcons].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 glass rounded-lg px-4 py-2.5 border border-border/40 hover:border-primary/20 transition-colors shrink-0"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
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
