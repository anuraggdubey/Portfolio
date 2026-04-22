import { useRef } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const topProjects = [
  {
    title: 'Merchant Mitra',
    description: 'Smart merchant dashboard for tracking UPI payments and daily activity.',
    tech: ['React', 'Node.js', 'Firebase'],
    tone: 'from-emerald-200 via-teal-100 to-cyan-200 dark:from-emerald-500/35 dark:via-teal-500/20 dark:to-cyan-500/35',
    github: 'https://github.com/anuraggdubey/Merchant-Mitra',
    live: 'https://merchant-mitra.vercel.app/',
  },
  {
    title: 'Agentro',
    description: 'Trend analytics platform combining AI summaries with live signals.',
    tech: ['Node.js', 'OpenAI', 'Google Trends'],
    tone: 'from-cyan-200 via-slate-100 to-blue-200 dark:from-cyan-500/35 dark:via-slate-500/20 dark:to-blue-500/35',
    github: 'https://github.com/anuraggdubey/Agentro',
    live: 'https://agentro-ai.vercel.app/',
  },
  {
    title: 'Voice Forge',
    description: 'AI voice cloning and synthetic audio detection experiments.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    tone: 'from-violet-200 via-fuchsia-100 to-purple-200 dark:from-violet-500/35 dark:via-fuchsia-500/20 dark:to-purple-500/35',
    github: 'https://github.com/anuraggdubey/voice-forge',
  },
  {
    title: 'WorkingGent',
    description: 'Multi-agent AI workspace for automating development and research tasks.',
    tech: ['TypeScript', 'AI Agents', 'OpenAI'],
    tone: 'from-slate-200 via-zinc-100 to-emerald-100 dark:from-slate-500/30 dark:via-zinc-500/15 dark:to-emerald-500/25',
    github: 'https://github.com/anuraggdubey/WorkingGent',
    live: 'https://workinggent.vercel.app/',
  },
];

const ProjectsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding relative overflow-hidden !py-6 sm:!py-8 md:!py-10">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Projects</div>
          <h2 className="mt-3 font-sans text-[19px] font-semibold leading-7 tracking-normal text-foreground">
            Selected work
          </h2>

          <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
            {topProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[8px] border border-dashed border-border/90 bg-card/50 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                {/* Gradient preview */}
                <div className={`relative h-[100px] bg-gradient-to-br ${project.tone} sm:h-[120px]`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">{project.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                    {project.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border/70 bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-accent transition-all hover:gap-3 sm:text-sm"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
