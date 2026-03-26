import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3 / Tailwind', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React / Next.js', level: 80 },
      { name: 'TypeScript', level: 72 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Auth', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 72 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Canva', level: 80 },
      { name: 'Microsoft Tools', level: 85 },
    ],
  },
  {
    title: 'AI & Emerging',
    skills: [
      { name: 'AI Tools', level: 85 },
      { name: 'Prompt Engineering', level: 75 },
      { name: 'Blockchain', level: 70 },
      { name: 'Stellar', level: 65 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);
  const active = skillCategories[activeCategory];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent2/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="sm:section-shell"
        >
          <div className="section-kicker">Skills</div>

          <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Technical strengths
          </h2>

          {/* ─── Mobile: compact pills ─── */}
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 hide-scrollbar sm:hidden">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                  activeCategory === index
                    ? 'bg-foreground text-background shadow-sm'
                    : 'border border-border bg-background/70 text-muted-foreground'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* ─── Desktop: horizontal tabs + 2-col grid ─── */}
          <div className="mt-4 sm:mt-6">
            {/* Desktop tab bar */}
            <div className="hidden sm:flex sm:gap-2 sm:border-b sm:border-border/60 sm:pb-0">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === index
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.title}
                  {activeCategory === index && (
                    <motion.div
                      layoutId="skillTab"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Skills content */}
            <motion.div
              key={active.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="mt-4 sm:mt-5"
            >
              {/* Mobile: bare bars */}
              <div className="space-y-3 sm:hidden">
                {active.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="text-xs font-medium text-foreground">{skill.name}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.85, delay: index * 0.08 }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: 2-column compact grid */}
              <div className="hidden sm:grid sm:grid-cols-2 sm:gap-3">
                {active.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="truncate text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="flex-shrink-0 text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.85, delay: index * 0.06 }}
                          className="h-full rounded-full bg-gradient-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
