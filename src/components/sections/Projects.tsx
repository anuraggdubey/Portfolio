import { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import assetRegistryPreview from '../../../ss/assetregistry.png';
import merchantMitraPreview from '../../../ss/merchantmitra.png';
import sweetBitesPreview from '../../../ss/sweetbites.png';
import voiceForgePreview from '../../../ss/voiceforge.png';
import workinggentPreview from '../../../ss/workinggent.png';

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  categories: string[];
  status: string;
  date: string;
  image?: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'WorkingGent',
    description:
      'An AI-powered multi-agent platform that automates development, research, and workflow tasks. Features GitHub agent for repo management, coding agent for code generation, and document agent for structured content creation.',
    tech: ['TypeScript', 'Node.js', 'AI Agents', 'OpenAI', 'API Integration'],
    categories: ['Web App', 'AI', 'Automation'],
    status: 'Active development',
    date: 'Mar 2025',
    image: workinggentPreview,
    github: 'https://github.com/anuraggdubey/WorkingGent',
    live: 'https://workinggent.vercel.app/',
  },
  {
    id: 2,
    title: 'Merchant Mitra',
    description:
      'A smart merchant dashboard for tracking UPI payments, daily activity, and simple financial insights for local businesses. Combines transaction history, reporting, and lightweight analytics.',
    tech: ['React', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    categories: ['Web App', 'FinTech'],
    status: 'Live project',
    date: 'Jan 2025',
    image: merchantMitraPreview,
    github: 'https://github.com/anuraggdubey/Merchant-Mitra',
    live: 'https://merchant-mitra.vercel.app/',
  },
  {
    id: 3,
    title: 'Voice Forge',
    description:
      'An AI research project for voice cloning workflows and synthetic audio detection experiments. Combines cloning flows with ML-based detection for manipulated audio.',
    tech: ['Python', 'TensorFlow', 'Speech Processing', 'Flask'],
    categories: ['Web App', 'AI'],
    status: 'Experimental build',
    date: 'Dec 2024',
    image: voiceForgePreview,
    github: 'https://github.com/anuraggdubey/voice-forge',
  },
  {
    id: 4,
    title: 'Sweet Bites',
    description:
      'An e-commerce platform for a dessert brand with catalog browsing, account flows, and order management. Supports customer ordering and business-side operations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    categories: ['Web App'],
    status: 'Live project',
    date: 'Nov 2024',
    image: sweetBitesPreview,
    github: 'https://github.com/anuraggdubey/Sweet-Bites',
    live: 'https://sweet-bites-ashy.vercel.app/',
  },
  {
    id: 5,
    title: 'Blockchain Asset Registry',
    description:
      'A Stellar-based asset registry for decentralized ownership records and transfer flows. Focuses on issuance, transfer, and verifiable records on Stellar.',
    tech: ['Stellar', 'JavaScript', 'Node.js', 'Blockchain APIs'],
    categories: ['Web App', 'Web3'],
    status: 'Live project',
    date: 'Oct 2024',
    image: assetRegistryPreview,
    github: 'https://github.com/anuraggdubey/asset-registry',
    live: 'https://register-asset.vercel.app/',
  },
  {
    id: 6,
    title: 'Agentro',
    description:
      'A trend analytics platform that combines AI summaries with live signals from web and social sources. Surfaces emerging topics, sentiment direction, and content opportunities.',
    tech: ['JavaScript', 'Node.js', 'OpenAI', 'News API', 'Google Trends'],
    categories: ['Web App', 'AI', 'Web3'],
    status: 'Live project',
    date: 'Sep 2024',
    github: 'https://github.com/anuraggdubey/Agentro',
    live: 'https://agentro-ai.vercel.app/',
  },
];

const categories = ['All', 'Web App', 'AI', 'Web3', 'FinTech', 'Automation'];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  return (
    <motion.article
      ref={ref}
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="exit"
      className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-400"
    >
      {/* ─── Image Preview ─── */}
      <a
        href={project.live || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-muted/30"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
            draggable={false}
          />
        ) : (
          /* Fallback gradient for projects without screenshots */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted/50 via-secondary/30 to-muted/50">
            <div className="flex flex-col items-center gap-3 opacity-60">
              <div className="rounded-2xl border border-border/60 bg-background/50 p-4 backdrop-blur">
                <Github className="h-10 w-10 text-muted-foreground/70" />
              </div>
              <span
                className="text-xs font-medium tracking-wide text-muted-foreground/70"
                style={displayStyle}
              >
                {project.title}
              </span>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Status badge — top right */}
        <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-foreground/80 shadow-sm backdrop-blur-sm sm:text-[11px]">
          {project.status}
        </span>
      </a>

      {/* ─── Card Body ─── */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-base font-bold leading-snug tracking-tight text-foreground sm:text-lg"
            style={displayStyle}
          >
            {project.title}
          </h3>
          <span className="mt-0.5 shrink-0 whitespace-nowrap text-[11px] font-medium text-muted-foreground/70 sm:text-xs">
            {project.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-[12.5px] leading-relaxed text-muted-foreground sm:text-[13px] sm:leading-[1.7]">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-secondary/60 px-2.5 py-0.5 text-[10px] font-medium text-foreground/70 transition-colors duration-200 hover:border-accent/30 hover:text-foreground sm:text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-1 flex items-center gap-2 border-t border-border/50 pt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-[11px] font-semibold text-background transition-all duration-200 hover:opacity-85 sm:text-xs"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/80 px-3.5 py-2 text-[11px] font-semibold text-foreground transition-all duration-200 hover:border-accent/40 hover:text-accent sm:text-xs"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section-padding relative overflow-hidden !max-w-[780px]">
      <div className="hero-orb absolute right-0 top-16 h-80 w-80 rounded-full bg-accent/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-kicker">Projects</div>
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2
                className="text-[22px] font-bold leading-7 tracking-[-0.03em] text-foreground sm:text-[26px] sm:leading-8"
                style={displayStyle}
              >
                Featured Projects
              </h2>
              <p className="mt-3 max-w-2xl text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-sm sm:leading-7">
                A collection of projects I've built — from AI-powered platforms
                to blockchain registries and e-commerce experiences.
              </p>
            </div>
            <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 && 's'}
            </div>
          </div>

          {/* Category filters */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5 md:mt-10">
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

          {/* 2-column project grid */}
          <motion.div
            layout
            className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub profile link */}
          <div className="mt-10 text-center sm:mt-12">
            <a
              href="https://github.com/anuraggdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-2.5 text-xs font-medium text-muted-foreground backdrop-blur transition-all duration-300 hover:border-accent/30 hover:gap-3 hover:text-foreground sm:px-6 sm:py-3 sm:text-sm"
            >
              <Github className="h-4 w-4" />
              All projects on GitHub
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
