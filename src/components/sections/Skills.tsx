import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    summary: 'Responsive interfaces, cleaner component architecture, motion, and visual hierarchy.',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3 / Tailwind CSS', level: 85 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React / Next.js', level: 80 },
      { name: 'TypeScript', level: 72 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
  {
    title: 'Backend',
    summary: 'APIs, authentication, data handling, and application logic for real product flows.',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API Development', level: 85 },
      { name: 'JWT Authentication', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 72 },
    ],
  },
  {
    title: 'Tools & Platforms',
    summary: 'Daily workflow, debugging, collaboration, and the tools used to ship reliably.',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Canva', level: 80 },
      { name: 'Microsoft Tools', level: 85 },
    ],
  },
  {
    title: 'AI & Emerging Tech',
    summary: 'Applied experimentation with AI tools, prompt work, and blockchain learning.',
    skills: [
      { name: 'AI Tools', level: 85 },
      { name: 'Prompt Engineering', level: 75 },
      { name: 'Blockchain Fundamentals', level: 70 },
      { name: 'Stellar Blockchain', level: 65 },
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
          className="section-shell"
        >
          <div className="section-kicker">Skills</div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Technical strengths with clearer depth
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Instead of a generic list, this section breaks down the areas I work in most and
                shows where my current depth is strongest.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {skillCategories.map((category, index) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(index)}
                    className={`rounded-[24px] border px-4 py-4 text-left transition-all duration-300 ${
                      activeCategory === index
                        ? 'border-accent/40 bg-foreground text-background shadow-[0_20px_45px_hsl(var(--foreground)/0.14)]'
                        : 'border-border bg-background/70 text-foreground hover:-translate-y-0.5 hover:border-accent/30 hover:bg-secondary'
                    }`}
                  >
                    <div className="text-sm font-semibold">{category.title}</div>
                    <div className={`mt-1 text-sm leading-6 ${activeCategory === index ? 'text-background/75' : 'text-muted-foreground'}`}>
                      {category.summary}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="section-shell-strong"
            >
              <div className="grid gap-6 border-b border-border/80 pb-6 lg:grid-cols-[minmax(0,1fr)_260px]">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                    Focus area
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">{active.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {active.summary}
                  </p>
                </div>
                <div className="section-panel">
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    What this means
                  </p>
                  <p className="mt-3 text-sm leading-7 text-foreground/85">
                    I’m strongest where product usability, implementation quality, and real-world delivery overlap.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {active.skills.map((skill, index) => (
                  <div key={skill.name} className="section-panel">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-secondary">
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
