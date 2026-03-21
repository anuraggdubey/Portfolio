import { useRef } from 'react';
import CountUp from 'react-countup';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useInView as useCounterInView } from 'react-intersection-observer';

const stats = [
  { value: 3, suffix: '+', label: 'Years of hands-on learning' },
  { value: 5, suffix: '+', label: 'Projects built end to end' },
  { value: 2, suffix: '+', label: 'Internship and client experiences' },
  { value: 10, suffix: '+', label: 'Technologies used in practice' },
];

const highlights = [
  'Full-stack project building with a strong frontend focus',
  'Clear UI structure, maintainable components, and better usability',
  'Learning through internships, hackathons, and product experiments',
];

const tools = [
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Tailwind CSS',
  'GitHub',
  'Postman',
  'Python',
  'Supabase',
  'AI tools',
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [counterRef, counterInView] = useCounterInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-shell-strong"
        >
          <div className="section-kicker">About</div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Building a portfolio around thoughtful execution, not just flashy visuals.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  I am Anurag Dubey, a full-stack developer who enjoys building interfaces that
                  feel sharp, readable, and dependable. I care about turning real requirements
                  into products that are useful and easy to navigate.
                </p>
                <p>
                  My recent work spans payments, e-commerce, AI experiments, and blockchain
                  prototypes. Across those projects, I focus on clean structure, practical
                  engineering decisions, and interfaces that feel intentional.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item} className="section-panel">
                    <p className="text-sm leading-7 text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-background/75 px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="section-panel">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                  Snapshot
                </p>
                <div className="mt-6 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-lg font-semibold text-background shadow-sm">
                    AD
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Anurag Dubey</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Full-stack developer with a strong interest in product-facing frontend work.
                    </p>
                  </div>
                </div>
                <a
                  href="/certificate/Anurag Dubey CV.pdf"
                  download
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:opacity-85"
                >
                  Download resume
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div ref={counterRef} className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="section-panel">
                    <div className="text-3xl font-semibold text-foreground">
                      {counterInView ? (
                        <CountUp end={stat.value} duration={1.5} delay={index * 0.08} suffix={stat.suffix} />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
