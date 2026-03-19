import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  categories: string[];
  metrics: string;
  gradient: string;
  accentColor: string;
  github: string;
  live?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Merchant Mitra - UPI Sahayak for Local Merchants',
    description:
      'A smart assistant for small merchants to track UPI payments, monitor daily transactions, and get simple financial insights.',
    longDescription:
      'Merchant Mitra helps local shopkeepers manage digital payments without friction. The product combines transaction history, easy reporting, and approachable analytics so merchants can quickly understand how business is performing day to day.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'UPI APIs', 'Tailwind CSS'],
    categories: ['Web App', 'FinTech'],
    metrics: 'Payments dashboard',
    gradient: 'from-primary/20 via-primary/5 to-accent/20',
    accentColor: 'text-primary',
    github: 'https://github.com/anuraggdubey/Merchant-Mitra',
    live: 'https://merchant-mitra.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Voice Forge - Voice Cloning and Detection',
    description:
      'An AI research project for generating voice clones and detecting synthetic or manipulated audio.',
    longDescription:
      'Voice Forge explores both sides of modern speech AI: generation and verification. It supports synthetic voice output from sample audio while also evaluating whether incoming clips are real or AI-generated through machine learning-based detection.',
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'Speech Processing', 'Flask'],
    categories: ['Web App', 'AI'],
    metrics: 'Research prototype',
    gradient: 'from-accent/20 via-accent/5 to-accent2/20',
    accentColor: 'text-accent',
    github: 'https://github.com/anuraggdubey/voice-forge',
    featured: true,
  },
  {
    id: 3,
    title: 'Sweet Bites - E-commerce Platform',
    description:
      'A dessert shop platform with product browsing, user accounts, order management, and custom cake ordering.',
    longDescription:
      'Sweet Bites was built to support real ordering flows for a bakery business. Customers can explore products, manage accounts, and place orders while admins manage inventory, pricing, and fulfillment from one place.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Firebase'],
    categories: ['Web App'],
    metrics: 'Commerce experience',
    gradient: 'from-accent2/20 via-accent2/5 to-primary/20',
    accentColor: 'text-accent2',
    github: 'https://github.com/anuraggdubey/Sweet-Bites',
    featured: true,
  },
  {
    id: 4,
    title: 'Blockchain Asset Registry',
    description:
      'A Stellar-based asset registry for secure ownership records and decentralized transfers.',
    longDescription:
      'This project experiments with blockchain-backed ownership tracking. Using the Stellar network, it models how digital assets can be issued, transferred, and verified in a decentralized way without relying on a central registry.',
    tech: ['Stellar', 'JavaScript', 'Node.js', 'Blockchain APIs'],
    categories: ['Web App', 'Web3'],
    metrics: 'Decentralized prototype',
    gradient: 'from-primary/15 via-primary/5 to-accent/15',
    accentColor: 'text-primary',
    github: 'https://github.com/anuraggdubey/asset-registry',
    featured: true,
  },
  {
    id: 5,
    title: 'Agentro AI Trends Analytics',
    description:
      'A trend intelligence platform that analyzes social, Web3, and news signals to surface actionable insights.',
    longDescription:
      'Agentro combines multiple APIs with AI-powered summarization to spot emerging topics, interpret sentiment, and suggest content or market opportunities. The result is a real-time insight layer built for builders, creators, and teams that move quickly.',
    tech: ['JavaScript', 'Node.js', 'OpenAI', 'Google Trends API', 'News API', 'Reddit API'],
    categories: ['Web App', 'AI', 'Web3'],
    metrics: 'Real-time intelligence',
    gradient: 'from-sky-500/20 via-cyan-500/5 to-primary/20',
    accentColor: 'text-sky-400',
    github: 'https://github.com/anuraggdubey/Agentro',
    live: 'https://agentro-ai.vercel.app/',
    featured: true,
  },
];

const categories = ['All', 'Web App', 'AI', 'Web3', 'FinTech'];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative overflow-hidden rounded-[28px] border border-border/80 bg-card/70 p-7 shadow-[0_18px_50px_hsl(var(--background)/0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_hsl(var(--primary)/0.12)] ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-90`} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="mb-3 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={`${project.id}-${category}`}
                  className={`inline-flex rounded-full border border-current/20 bg-background/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.22em] ${project.accentColor}`}
                >
                  {category}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            {project.metrics}
          </span>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <p className="mt-5 border-t border-border/70 pt-5 text-sm leading-7 text-foreground/80">
                {project.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/15 bg-background/60 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-border/70 pt-5 text-xs font-mono uppercase tracking-[0.18em]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Source
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-80 ${project.accentColor}`}
            >
              Live Demo
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <span className="text-muted-foreground/70">Private build</span>
          )}

          <button
            onClick={() => setExpanded((current) => !current)}
            className="ml-auto inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            {expanded ? 'Less detail' : 'More detail'}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.12),transparent_30%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary glow-primary" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">02 // Selected work</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="text-4xl font-display font-bold uppercase tracking-tight md:text-5xl">
                Projects with real
                <span className="block text-gradient-primary">product intent</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                A tighter set of case studies covering web apps, payments, AI, e-commerce, and Web3. Each card is easier to scan now, and multi-tag filtering reflects how these products actually overlap.
              </p>
            </div>

            <div className="rounded-[24px] border border-border/80 bg-background/55 px-5 py-4 backdrop-blur">
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-primary">
                {filteredProjects.length} visible projects
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-5 py-2 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                  filter === category
                    ? 'border-primary bg-primary text-primary-foreground shadow-[0_10px_30px_hsl(var(--primary)/0.2)]'
                    : 'border-border bg-background/60 text-muted-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.65 }}
            className="mt-12"
          >
            <a
              href="https://github.com/anuraggdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-background/70 px-6 py-3 text-sm text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Explore more on GitHub
              <span className="transition-transform hover:translate-x-1">&gt;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
