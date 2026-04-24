import { useRef } from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import merchantMitraPreview from '../../../ss/merchantmitra.png';
import workinggentPreview from '../../../ss/workinggent.png';
import voiceForgePreview from '../../../ss/voiceforge.png';
import sweetBitesPreview from '../../../ss/sweetbites.png';

const topProjects = [
  {
    title: 'WorkingGent',
    description:
      'AI-powered multi-agent platform for automating development, research, and workflow tasks.',
    tech: ['TypeScript', 'AI Agents', 'OpenAI'],
    image: workinggentPreview,
    github: 'https://github.com/anuraggdubey/WorkingGent',
    live: 'https://workinggent.vercel.app/',
  },
  {
    title: 'Merchant Mitra',
    description:
      'Smart merchant dashboard for tracking UPI payments, daily activity, and financial insights.',
    tech: ['React', 'Node.js', 'Firebase'],
    image: merchantMitraPreview,
    github: 'https://github.com/anuraggdubey/Merchant-Mitra',
    live: 'https://merchant-mitra.vercel.app/',
  },
  {
    title: 'Voice Forge',
    description:
      'AI voice cloning and synthetic audio detection research project.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    image: voiceForgePreview,
    github: 'https://github.com/anuraggdubey/voice-forge',
  },
  {
    title: 'Sweet Bites',
    description:
      'E-commerce platform for a dessert brand with catalog browsing and order management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    image: sweetBitesPreview,
    github: 'https://github.com/anuraggdubey/Sweet-Bites',
    live: 'https://sweet-bites-ashy.vercel.app/',
  },
];

const ProjectsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden !py-3 sm:!py-4 md:!py-5"
    >
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Projects</div>
          <h2
            className="mt-2 text-[15px] font-semibold leading-5 tracking-[-0.03em] text-foreground sm:text-[16px]"
            style={displayStyle}
          >
            Featured Projects
          </h2>

          <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2">
            {topProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-card group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-400"
              >
                {/* Image preview */}
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
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted/50 via-secondary/30 to-muted/50">
                      <Github className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>

                {/* Card body */}
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3
                    className="text-[13px] font-bold leading-snug tracking-tight text-foreground"
                    style={displayStyle}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 bg-secondary/60 px-1.5 py-0.5 text-[9px] font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-2 border-t border-border/50 pt-2.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Github
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <button
            onClick={() => navigate('/projects')}
            className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all hover:gap-2 hover:text-foreground sm:text-[11px]"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
