import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  categories: string[];
  status: string;
  previewTitle: string;
  previewSubtitle: string;
  previewTone: string;
  previewAccent: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Merchant Mitra',
    description:
      'A smart merchant dashboard for tracking UPI payments, daily activity, and simple financial insights for local businesses.',
    longDescription:
      'Merchant Mitra helps local shopkeepers manage digital payments with less friction. The product combines transaction history, reporting, and lightweight analytics in a clear and approachable interface.',
    tech: ['React', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    categories: ['Web App', 'FinTech'],
    status: 'Live project',
    previewTitle: 'Merchant analytics',
    previewSubtitle: 'Track payments and daily trends',
    previewTone: 'from-emerald-200 via-teal-100 to-cyan-200 dark:from-emerald-500/35 dark:via-teal-500/20 dark:to-cyan-500/35',
    previewAccent: 'bg-emerald-500/85',
    github: 'https://github.com/anuraggdubey/Merchant-Mitra',
    live: 'https://merchant-mitra.vercel.app/',
  },
  {
    id: 2,
    title: 'Voice Forge',
    description:
      'An AI research project for voice cloning workflows and synthetic audio detection experiments in one product space.',
    longDescription:
      'Voice Forge explores both sides of modern speech AI: generation and verification. It combines cloning flows with machine-learning-based detection for manipulated audio.',
    tech: ['Python', 'TensorFlow', 'Speech Processing', 'Flask'],
    categories: ['Web App', 'AI'],
    status: 'Experimental build',
    previewTitle: 'Voice AI workspace',
    previewSubtitle: 'Generation and detection flows',
    previewTone: 'from-violet-200 via-fuchsia-100 to-purple-200 dark:from-violet-500/35 dark:via-fuchsia-500/20 dark:to-purple-500/35',
    previewAccent: 'bg-violet-500/85',
    github: 'https://github.com/anuraggdubey/voice-forge',
  },
  {
    id: 3,
    title: 'Sweet Bites',
    description:
      'An e-commerce platform for a dessert brand with catalog browsing, account flows, and order management.',
    longDescription:
      'Sweet Bites supports customer ordering and business-side operations in one place, covering browsing, custom requests, and basic management workflows.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    categories: ['Web App'],
    status: 'Case study',
    previewTitle: 'Dessert storefront',
    previewSubtitle: 'Shopping and ordering experience',
    previewTone: 'from-amber-200 via-orange-100 to-rose-200 dark:from-amber-500/35 dark:via-orange-500/20 dark:to-rose-500/35',
    previewAccent: 'bg-orange-500/85',
    github: 'https://github.com/anuraggdubey/Sweet-Bites',
  },
  {
    id: 4,
    title: 'Blockchain Asset Registry',
    description:
      'A Stellar-based asset registry prototype for decentralized ownership records and transfer flows.',
    longDescription:
      'This project explores blockchain-backed ownership tracking with a focus on issuance, transfer flows, and verifiable records on Stellar.',
    tech: ['Stellar', 'JavaScript', 'Node.js', 'Blockchain APIs'],
    categories: ['Web App', 'Web3'],
    status: 'Prototype',
    previewTitle: 'Asset ledger',
    previewSubtitle: 'Ownership records on Stellar',
    previewTone: 'from-sky-200 via-blue-100 to-indigo-200 dark:from-sky-500/35 dark:via-blue-500/20 dark:to-indigo-500/35',
    previewAccent: 'bg-sky-500/85',
    github: 'https://github.com/anuraggdubey/asset-registry',
  },
  {
    id: 5,
    title: 'Agentro',
    description:
      'A trend analytics platform that combines AI summaries with live signals from web and social sources.',
    longDescription:
      'Agentro brings together multiple APIs to surface emerging topics, sentiment direction, and content opportunities for fast-moving teams and creators.',
    tech: ['JavaScript', 'Node.js', 'OpenAI', 'News API', 'Google Trends'],
    categories: ['Web App', 'AI', 'Web3'],
    status: 'Live project',
    previewTitle: 'Trend intelligence',
    previewSubtitle: 'Signals, summaries, and insights',
    previewTone: 'from-cyan-200 via-slate-100 to-blue-200 dark:from-cyan-500/35 dark:via-slate-500/20 dark:to-blue-500/35',
    previewAccent: 'bg-cyan-500/85',
    github: 'https://github.com/anuraggdubey/Agentro',
    live: 'https://agentro-ai.vercel.app/',
  },
];

const categories = ['All', 'Web App', 'AI', 'Web3', 'FinTech'];

const ProjectPreview = ({ project }: { project: Project }) => {
  return (
    <div className="relative h-[175px] overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:h-[195px] dark:bg-slate-950">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.previewTone}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative flex h-full flex-col justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300 dark:bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300 dark:bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 dark:bg-emerald-400/80" />
        </div>

        <div className="overflow-hidden rounded-[16px] border border-black/5 bg-white/80 p-3 shadow-[0_18px_35px_rgba(255,255,255,0.45)] backdrop-blur sm:p-4 dark:border-white/10 dark:bg-slate-950/75 dark:shadow-[0_18px_35px_rgba(15,23,42,0.35)]">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            {project.previewTitle}
          </p>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-900 sm:text-lg dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
            {project.previewSubtitle}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className={`h-2.5 w-20 rounded-full ${project.previewAccent}`} />
            <div className="h-2.5 w-12 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-[22px] border border-border/80 bg-card/85 p-3 shadow-[0_16px_40px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_hsl(var(--foreground)/0.10)] sm:rounded-[26px] sm:p-4 md:p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-transparent dark:from-white/[0.03]" />

      <div className="relative grid gap-4 sm:gap-5 lg:grid-cols-[290px_minmax(0,1fr)]">
        <ProjectPreview project={project} />

        <div className="flex min-w-0 flex-col">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-[2rem]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:leading-7 md:text-base">
                {project.description}
              </p>
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm text-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent sm:flex-none"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm text-foreground transition-all duration-300 hover:border-accent/30 hover:text-accent sm:flex-none"
              >
                <Github className="h-4 w-4" />
                Github
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background/85 px-3 py-1.5 text-[11px] font-medium text-foreground/80 sm:text-[12px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="mt-5 border-t border-border/80 pt-5 text-sm leading-7 text-foreground/80">
                  {project.longDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={`${project.id}-category-${category}`}
                      className="rounded-full bg-secondary px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-4 sm:mt-6 sm:pt-5">
            <span className="rounded-full bg-rose-100 px-3 py-1.5 text-[11px] font-medium text-rose-500 sm:text-[12px] dark:bg-rose-500/10 dark:text-rose-300">
              {project.status}
            </span>

            <button
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:gap-3 hover:text-foreground"
            >
              {expanded ? 'Hide details' : 'View Details'}
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
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
      <div className="hero-orb absolute right-0 top-16 h-80 w-80 rounded-full bg-accent/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-shell-strong"
        >
          <div className="section-kicker">Projects</div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Selected work in a cleaner showcase layout
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                I redesigned this section to follow the structure in your reference: image-style preview on the left, project details on the right, cleaner pills, and stronger action buttons.
              </p>
            </div>
            <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {filteredProjects.length} visible projects
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 ${
                  filter === category
                    ? 'bg-foreground text-background shadow-[0_14px_35px_hsl(var(--foreground)/0.16)]'
                    : 'border border-border bg-background/70 text-muted-foreground hover:border-accent/30 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
