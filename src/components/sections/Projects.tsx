import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import assetRegistryPreview from '../../../ss/assetregistry.png';
import merchantMitraPreview from '../../../ss/merchantmitra.png';
import sweetBitesPreview from '../../../ss/sweetbites.png';
import voiceForgePreview from '../../../ss/voiceforge.png';

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
  embedPreview?: boolean;
};

const PREVIEW_SCALE = 0.45;
const PREVIEW_TIMEOUT_MS = 8000;

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
    embedPreview: true,
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
    embedPreview: false,
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
    status: 'Live project',
    previewTitle: 'Dessert storefront',
    previewSubtitle: 'Shopping and ordering experience',
    previewTone: 'from-amber-200 via-orange-100 to-rose-200 dark:from-amber-500/35 dark:via-orange-500/20 dark:to-rose-500/35',
    previewAccent: 'bg-orange-500/85',
    github: 'https://github.com/anuraggdubey/Sweet-Bites',
    live: 'https://sweet-bites-ashy.vercel.app/',
    embedPreview: true,
  },
  {
    id: 4,
    title: 'Blockchain Asset Registry',
    description:
      'A Stellar-based asset registry for decentralized ownership records and transfer flows.',
    longDescription:
      'This project explores blockchain-backed ownership tracking with a focus on issuance, transfer flows, and verifiable records on Stellar.',
    tech: ['Stellar', 'JavaScript', 'Node.js', 'Blockchain APIs'],
    categories: ['Web App', 'Web3'],
    status: 'Live project',
    previewTitle: 'Asset ledger',
    previewSubtitle: 'Ownership records on Stellar',
    previewTone: 'from-sky-200 via-blue-100 to-indigo-200 dark:from-sky-500/35 dark:via-blue-500/20 dark:to-indigo-500/35',
    previewAccent: 'bg-sky-500/85',
    github: 'https://github.com/anuraggdubey/asset-registry',
    live: 'https://register-asset.vercel.app/',
    embedPreview: true,
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
    embedPreview: true,
  },
  {
    id: 6,
    title: 'WorkingGent',
    description:
      'An AI-powered multi-agent platform that automates development, research, and workflow tasks using intelligent agents.',
    longDescription:
      'WorkingGent is a collaborative AI agent system designed to handle real-world productivity tasks. It includes specialized agents like a GitHub agent for repo management, a coding agent for generating and refining code, and a document agent for structured content creation. The platform focuses on automating workflows, reducing manual effort, and enabling developers to operate at higher efficiency through intelligent task delegation.',
    tech: ['TypeScript', 'Node.js', 'AI Agents', 'OpenAI', 'API Integration'],
    categories: ['Web App', 'AI', 'Automation'],
    status: 'Active development',
    previewTitle: 'AI agents at work',
    previewSubtitle: 'Automate. Delegate. Build faster.',
    previewTone: 'from-purple-200 via-slate-100 to-indigo-200 dark:from-purple-500/35 dark:via-slate-500/20 dark:to-indigo-500/35',
    previewAccent: 'bg-purple-500/85',
    github: 'https://github.com/anuraggdubey/WorkingGent',
    live: 'https://workinggent.vercel.app/',
    embedPreview: true,
  }
];

const categories = ['All', 'Web App', 'AI', 'Web3', 'FinTech'];

const buildFallbackPreview = (project: Project) => {
  if (project.title === 'Merchant Mitra') {
    return merchantMitraPreview;
  }

  if (project.title === 'Blockchain Asset Registry') {
    return assetRegistryPreview;
  }

  if (project.title === 'Sweet Bites') {
    return sweetBitesPreview;
  }

  if (project.title === 'Voice Forge') {
    return voiceForgePreview;
  }

  const title = encodeURIComponent(project.title);
  const subtitle = encodeURIComponent(project.previewSubtitle);
  const status = encodeURIComponent(project.status);

  return `data:image/svg+xml;charset=UTF-8,${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="55%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <radialGradient id="glowA" cx="20%" cy="15%" r="60%">
      <stop offset="0%" stop-color="rgba(34,197,94,0.65)"/>
      <stop offset="100%" stop-color="rgba(34,197,94,0)"/>
    </radialGradient>
    <radialGradient id="glowB" cx="82%" cy="18%" r="55%">
      <stop offset="0%" stop-color="rgba(59,130,246,0.5)"/>
      <stop offset="100%" stop-color="rgba(59,130,246,0)"/>
    </radialGradient>
    <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.04)"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="760" rx="48" fill="url(#bg)"/>
  <rect width="1200" height="760" rx="48" fill="url(#glowA)"/>
  <rect width="1200" height="760" rx="48" fill="url(#glowB)"/>
  <rect x="64" y="56" width="1072" height="648" rx="34" fill="rgba(15,23,42,0.88)" stroke="rgba(255,255,255,0.09)"/>
  <rect x="64" y="56" width="1072" height="72" rx="34" fill="rgba(255,255,255,0.04)"/>
  <circle cx="112" cy="92" r="10" fill="#fb7185"/>
  <circle cx="144" cy="92" r="10" fill="#fbbf24"/>
  <circle cx="176" cy="92" r="10" fill="#4ade80"/>
  <rect x="234" y="76" width="516" height="32" rx="16" fill="rgba(255,255,255,0.08)"/>
  <rect x="98" y="164" width="320" height="500" rx="28" fill="url(#panel)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="456" y="164" width="582" height="126" rx="28" fill="url(#panel)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="456" y="320" width="278" height="164" rx="24" fill="url(#panel)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="760" y="320" width="278" height="164" rx="24" fill="url(#panel)" stroke="rgba(255,255,255,0.08)"/>
  <rect x="456" y="514" width="582" height="150" rx="24" fill="url(#panel)" stroke="rgba(255,255,255,0.08)"/>
  <text x="120" y="234" fill="rgba(255,255,255,0.72)" font-family="Inter, Arial, sans-serif" font-size="26" letter-spacing="6">LIVE PREVIEW</text>
  <text x="120" y="304" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="52" font-weight="700">${title}</text>
  <text x="120" y="364" fill="rgba(226,232,240,0.82)" font-family="Inter, Arial, sans-serif" font-size="28">${subtitle}</text>
  <rect x="120" y="420" width="180" height="18" rx="9" fill="rgba(16,185,129,0.88)"/>
  <rect x="120" y="474" width="240" height="16" rx="8" fill="rgba(255,255,255,0.18)"/>
  <rect x="120" y="508" width="188" height="16" rx="8" fill="rgba(255,255,255,0.12)"/>
  <text x="480" y="226" fill="rgba(255,255,255,0.88)" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700">Deployed project</text>
  <text x="480" y="262" fill="rgba(226,232,240,0.74)" font-family="Inter, Arial, sans-serif" font-size="22">${status}</text>
  <rect x="480" y="560" width="220" height="18" rx="9" fill="rgba(255,255,255,0.16)"/>
  <rect x="480" y="596" width="390" height="18" rx="9" fill="rgba(255,255,255,0.11)"/>
  <rect x="480" y="632" width="310" height="18" rx="9" fill="rgba(255,255,255,0.11)"/>
</svg>`}`;
};

const ProjectPreview = ({ project }: { project: Project }) => {
  const link = project.live || project.github;
  const canEmbedLive = Boolean(project.live && project.embedPreview !== false);
  const [showFallback, setShowFallback] = useState(!canEmbedLive);
  const fallbackImage = useMemo(() => buildFallbackPreview(project), [project]);
  const fallbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    if (!canEmbedLive) {
      setShowFallback(true);
      return;
    }

    setShowFallback(false);

    fallbackTimerRef.current = window.setTimeout(() => {
      setShowFallback(true);
    }, PREVIEW_TIMEOUT_MS);

    return () => {
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [canEmbedLive]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/preview relative block h-[180px] overflow-hidden rounded-[14px] border border-white/10 bg-[#020617] shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.28)] sm:h-[210px] sm:rounded-[18px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.14),transparent_35%)]" />

      <div className="relative h-full p-2.5 sm:p-3">
        <div className="relative h-full overflow-hidden rounded-[12px] border border-white/10 bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div
            className="absolute left-0 top-0 h-[227.2728%] w-[227.2728%] origin-top-left [transform:scale(var(--preview-scale))] transition-transform duration-500 ease-out group-hover/preview:[transform:scale(0.46)]"
            style={{ '--preview-scale': PREVIEW_SCALE } as CSSProperties}
          >
            {!showFallback && canEmbedLive && project.live ? (
              <iframe
                title={`${project.title} live preview`}
                src={project.live}
                loading="lazy"
                className="h-full w-full border-0 pointer-events-none"
                onLoad={() => {
                  if (fallbackTimerRef.current) {
                    window.clearTimeout(fallbackTimerRef.current);
                    fallbackTimerRef.current = null;
                  }
                  setShowFallback(false);
                }}
                onError={() => setShowFallback(true)}
                tabIndex={-1}
              />
            ) : (
              <img
                src={fallbackImage}
                alt={`${project.title} static preview`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
    </a>
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
      className="group relative overflow-hidden rounded-[18px] border border-border/80 bg-card/85 p-3 shadow-[0_16px_40px_hsl(var(--foreground)/0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_hsl(var(--foreground)/0.10)] sm:rounded-[22px] md:rounded-[26px] md:p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-transparent to-transparent dark:from-white/[0.03]" />

      <div className="relative grid gap-3 sm:gap-4 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-5">
        <ProjectPreview project={project} />

        <div className="flex min-w-0 flex-col">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 max-w-2xl">
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl lg:text-[2rem]">
                {project.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6 md:mt-4 md:text-base md:leading-7">
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
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                Selected work in a cleaner showcase layout
              </h2>
              <p className="mt-3 max-w-3xl text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-base sm:leading-8">
                I redesigned this section to follow the structure in your reference: image-style preview on the left, project details on the right, cleaner pills, and stronger action buttons.
              </p>
            </div>
            <div className="rounded-full border border-border bg-background/70 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {filteredProjects.length} visible projects
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3 md:mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 ${filter === category
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

          {/* GitHub profile link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/anuraggdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-2.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-accent/30 hover:text-foreground sm:px-6 sm:py-3 sm:text-sm"
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
