import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── icon helper ── */
const I = ({ children, c }: { children: React.ReactNode; c?: string }) => (
  <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${c || ''}`}>{children}</div>
);

/* ── data ── */
type Tech = { name: string; icon: React.ReactNode; tip: string; featured?: boolean };

const frontend: Tech[] = [
  { name:'React', featured:true, tip:'Core framework — used in every project',
    icon:<I c="bg-[#20232A]"><svg viewBox="0 0 32 32" className="h-5 w-5"><circle cx="16" cy="15.5" r="2.2" fill="#61DAFB"/><ellipse cx="16" cy="15.5" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth=".9" fill="none"/><ellipse cx="16" cy="15.5" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth=".9" fill="none" transform="rotate(60 16 15.5)"/><ellipse cx="16" cy="15.5" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth=".9" fill="none" transform="rotate(120 16 15.5)"/></svg></I> },
  { name:'Next.js', featured:true, tip:'Full-stack React — SSR & API routes',
    icon:<I c="bg-foreground"><svg viewBox="0 0 32 32" className="h-5 w-5"><circle cx="16" cy="16" r="14" fill="currentColor" className="text-background"/><path d="M13 11h2v10L23 11h2.5L14 23V21l6-7.5H14v7h-1V11z" fill="currentColor" className="text-foreground"/></svg></I> },
  { name:'TypeScript', tip:'Type-safe JS for all projects',
    icon:<I c="bg-[#3178C6]"><span className="text-[8px] font-black text-white">TS</span></I> },
  { name:'JavaScript', tip:'ES6+ across the stack',
    icon:<I c="bg-[#F7DF1E]"><span className="text-[8px] font-black text-[#323330]">JS</span></I> },
  { name:'Tailwind CSS', tip:'Utility-first styling',
    icon:<I c="bg-sky-500/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5" fill="#38BDF8"><path d="M16 8c-4 0-6.5 2-7.5 6 1.5-2 3.3-2.8 5.3-2.2 1.1.3 1.9 1.2 2.8 2.1C20 15.4 21.6 17 25.4 17c4 0 6.5-2 7.5-6-1.5 2-3.3 2.8-5.3 2.2-1.1-.3-1.9-1.2-2.8-2.1C21.4 9.6 19.8 8 16 8zM8.5 17c-4 0-6.5 2-7.5 6 1.5-2 3.3-2.8 5.3-2.2 1.1.3 1.9 1.2 2.8 2.1C10.6 24.4 12.2 26 16 26c4 0 6.5-2 7.5-6-1.5 2-3.3 2.8-5.3 2.2-1.1-.3-1.9-1.2-2.8-2.1C13.9 18.6 12.3 17 8.5 17z"/></svg></I> },
  { name:'Framer Motion', tip:'Production animations',
    icon:<I c="bg-indigo-500/15"><svg viewBox="0 0 32 32" className="h-4 w-4"><path d="M6 6h20v6.7H16L6 6zm0 6.7h10l10 6.6H16l-10 6.7V12.7z" fill="#6366F1"/><path d="M6 19.3l10-6.6h10v6.6H16L6 26V19.3z" fill="#818CF8"/></svg></I> },
  { name:'shadcn/ui', tip:'Radix-based component library',
    icon:<I c="bg-foreground/10"><svg viewBox="0 0 32 32" className="h-4 w-4 text-foreground/70" stroke="currentColor" fill="none" strokeWidth="2.5"><line x1="6" y1="26" x2="26" y2="6"/><line x1="6" y1="18" x2="18" y2="6"/></svg></I> },
];

const backend: Tech[] = [
  { name:'Node.js', featured:true, tip:'Runtime for all backend services',
    icon:<I c="bg-[#339933]/15"><svg viewBox="0 0 32 32" className="h-5 w-5"><path d="M16 1.6L3 9.8v16.4l13 8.2 13-8.2V9.8L16 1.6z" fill="#339933"/><path d="M16 10v12l-5-3V13l5-3zm0 0l5 3v6l-5 3" fill="#fff" fillOpacity=".35"/></svg></I> },
  { name:'MongoDB', featured:true, tip:'Primary database — production scale',
    icon:<I c="bg-[#13AA52]/15"><svg viewBox="0 0 32 32" className="h-5 w-5"><path d="M16 2C8.8 2 3 7.8 3 15s5.8 13 13 13 13-5.8 13-13S23.2 2 16 2z" fill="#13AA52"/><path d="M16.3 8c-.1 1-.2 2-.5 2.9-.5 1.5-1.3 2.8-2 4.2-.4.7-.4 1.4-.2 2.2.5 1.7 1 3.4 1.5 5.1.1.3.2.6.2.8h.6c.1-.5.2-1 .3-1.5.2-.6.1-1.1-.2-1.6-.1-.3-.1-.5 0-.8.5-1.6 1-3.2 1.3-4.9.2-1.1.1-2.2-.2-3.3-.3-1-.6-2-.8-3.1z" fill="#fff"/></svg></I> },
  { name:'Express', tip:'REST API framework',
    icon:<I c="bg-foreground/10"><span className="text-[8px] font-bold text-foreground/70">eX</span></I> },
  { name:'Firebase', tip:'Auth, Firestore, hosting',
    icon:<I c="bg-amber-500/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><path d="M6 26L8.7 5.3c.1-.5.7-.7 1-.3l2.8 5.2L14 7c.2-.4.7-.4.9 0L26 26H6z" fill="#FFA000"/><path d="M17 18l-4.5-8.8L6 26l11-8z" fill="#F57C00"/><path d="M26 26l-3-18.7c-.1-.4-.5-.6-.8-.4L6 26l9.4 5.3c.4.2.8.2 1.2 0L26 26z" fill="#FFCA28"/></svg></I> },
  { name:'Prisma', tip:'Type-safe ORM',
    icon:<I c="bg-foreground/10"><svg viewBox="0 0 32 32" className="h-4 w-4 text-foreground/80" fill="currentColor"><path d="M26.1 23l-8.3 6.4a1.5 1.5 0 01-2.2-.4L5.3 12.3A1.5 1.5 0 015.7 10L17 3.2a1.5 1.5 0 012 .7l8 18a1.5 1.5 0 01-.9 2.1z"/></svg></I> },
];

const aiml: Tech[] = [
  { name:'OpenAI', featured:true, tip:'GPT-4 integration in production apps',
    icon:<I c="bg-foreground/10"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5 text-foreground/80" fill="currentColor"><path d="M27.2 13.8c.6-1.8.4-3.7-.5-5.3a6.5 6.5 0 00-7-3.2A6.5 6.5 0 0014.8 2a6.5 6.5 0 00-6.2 4.5 6.5 6.5 0 00-4.3 3.2 6.5 6.5 0 00.8 7.6 6.5 6.5 0 00.5 5.3 6.5 6.5 0 007 3.2A6.5 6.5 0 0017.5 30a6.5 6.5 0 006.2-4.5 6.5 6.5 0 004.3-3.2 6.5 6.5 0 00-.8-7.6v-.9z"/></svg></I> },
  { name:'Gemini', tip:'Google AI integration',
    icon:<I c="bg-purple-500/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><path d="M16 4c0 6.6-5.4 12-12 12 6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12z" fill="#886FBF"/></svg></I> },
  { name:'Python', tip:'ML & scripting',
    icon:<I c="bg-[#3776AB]/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><path d="M15.9 2C10.3 2 10.8 4.5 10.8 4.5v5h5.4v1.6H8.5S4 10.6 4 16.2s3.9 5.4 3.9 5.4h2.3v-2.6s-.1-3.9 3.9-3.9h6.7s3.7.1 3.7-3.6V6.1S25.1 2 15.9 2zm-3 2.4c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#3776AB"/><path d="M16.1 30c5.6 0 5.1-2.5 5.1-2.5v-5h-5.4v-1.6h7.7S28 21.4 28 15.8s-3.9-5.4-3.9-5.4h-2.3v2.6s.1 3.9-3.9 3.9H11.2s-3.7-.1-3.7 3.6v5.4S6.9 30 16.1 30zm3-2.4c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#FFD43B"/></svg></I> },
  { name:'TensorFlow', tip:'Deep learning research',
    icon:<I c="bg-orange-500/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><path d="M16 2L4 8.5v15L16 30l12-6.5v-15L16 2z" fill="#FF6F00"/><path d="M16 7l-7 3.8v7.5L16 22l7-3.8v-7.5L16 7z" fill="#FFA000"/><path d="M16 12v10l7-3.8v-7.5L16 7v5z" fill="#FF6F00"/></svg></I> },
];

const devops: Tech[] = [
  { name:'Git', tip:'Version control for everything',
    icon:<I c="bg-[#F05032]/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5" fill="#F05032"><path d="M29.5 15L17 2.5c-.7-.7-1.8-.7-2.5 0L12 5l3.1 3.1c.7-.2 1.5-.1 2.1.5.6.6.7 1.4.5 2.1l3 3c.7-.2 1.5-.1 2.1.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.7-.7-.8-1.6-.4-2.3l-2.8-2.8v7.4c.2.1.4.2.5.4.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3 .2-.2.4-.3.6-.4V11c-.2-.1-.4-.3-.6-.4-.7-.7-.8-1.6-.4-2.3L10.5 5.2l-8 8c-.7.7-.7 1.8 0 2.5l12.5 12.5c.7.7 1.8.7 2.5 0L29.5 17.5c.7-.7.7-1.8 0-2.5z"/></svg></I> },
  { name:'Docker', tip:'Containerised deployments',
    icon:<I c="bg-[#2496ED]/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5" fill="#2496ED"><path d="M18 11h3v3h-3zM14 11h3v3h-3zM10 11h3v3h-3zM14 7h3v3h-3zM18 7h3v3h-3zM6 11h3v3H6zM10 7h3v3h-3zM28 14.3c-.6-.4-2-.5-3-.3-.1-1.2-.7-2.2-1.8-3.1l-.6-.4-.4.6c-.5.8-.8 1.8-.7 2.7.1.6.2 1.3.6 1.8-.9.5-2.5.6-2.9.6H2.2c-.3 1.7-.2 3.5.4 5.2.8 2 2.2 3.5 4.2 4.5 2.2 1 5 1.5 8 1 2.2-.4 4.2-1.1 6-2.3 1.4-1 2.7-2.2 3.6-3.8.8-1.3 1.3-2.8 1.5-4.5h1.3c1.2 0 2-.5 2.5-1.1.4-.4.5-.9.7-1.4l.1-.4-.5-.3z"/></svg></I> },
  { name:'Nginx', tip:'Reverse proxy & static serving',
    icon:<I c="bg-[#009639]/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><path d="M16 2L3 9.5v13L16 30l13-7.5v-13L16 2z" fill="#009639"/><path d="M12 21V11l3 2v5l5-5v10l-3-2v-5l-5 5z" fill="#fff"/></svg></I> },
  { name:'Stellar', tip:'Blockchain & Web3 integration',
    icon:<I c="bg-foreground/10"><svg viewBox="0 0 32 32" className="h-4 w-4"><circle cx="16" cy="16" r="14" fill="currentColor" className="text-foreground/80"/><path d="M9 12l14 5-1.5 1.5L9 14v-2zm0 6l14 5-1.5 1.5L9 20v-2z" fill="hsl(var(--background))"/></svg></I> },
  { name:'Postman', tip:'API testing & documentation',
    icon:<I c="bg-[#FF6C37]/15"><svg viewBox="0 0 32 32" className="h-4.5 w-4.5"><circle cx="16" cy="16" r="14" fill="#FF6C37"/><path d="M20.5 10.5l-4.8 4.8-2.2-2.2 4.8-4.8c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2z" fill="#fff"/></svg></I> },
  { name:'Linux', tip:'Server environments',
    icon:<I c="bg-foreground/10"><svg viewBox="0 0 32 32" className="h-4 w-4"><path d="M16 4c-3.9 0-6 3.8-6 8.5 0 2.5.7 4.7 1.7 6.2-1.8 1-3.7 2.8-3.7 4.8 0 1.5 1.3 2.5 3.2 2.5 1.4 0 2.8-.5 4-.9.3-.1.5-.2.8-.2.3 0 .5.1.8.2 1.2.4 2.6.9 4 .9 1.9 0 3.2-1 3.2-2.5 0-2-1.9-3.8-3.7-4.8 1-1.5 1.7-3.7 1.7-6.2C22 7.8 19.9 4 16 4z" fill="currentColor" className="text-foreground/80"/><circle cx="14" cy="11" r="1" fill="hsl(var(--background))"/><circle cx="18" cy="11" r="1" fill="hsl(var(--background))"/></svg></I> },
];

const categories = [
  { label: 'Frontend', items: frontend },
  { label: 'Backend & Data', items: backend },
  { label: 'AI / ML', items: aiml },
  { label: 'DevOps & Tools', items: devops },
];

/* ── tooltip ── */
const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-9 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1 text-[10px] font-medium text-background shadow-lg"
        >
          {text}
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
        </motion.div>
      )}
    </div>
  );
};

/* ── featured card (larger, prominent) ── */
const FeaturedCard = ({ tech, i }: { tech: Tech; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.4, delay: i * 0.05 }}
  >
    <Tooltip text={tech.tip}>
      <div className="group flex items-center gap-2 rounded-lg bg-foreground/[0.04] px-2.5 py-1.5 ring-1 ring-foreground/[0.06] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/[0.07] hover:shadow-[0_4px_16px_hsl(var(--foreground)/0.06)] hover:ring-accent/25 dark:bg-white/[0.04] dark:ring-white/[0.06] dark:hover:bg-white/[0.07] dark:hover:ring-accent/20">
        <div className="transition-transform duration-300 group-hover:scale-110">
          {tech.icon}
        </div>
        <div className="min-w-0">
          <span className="text-[11px] font-semibold tracking-tight text-foreground">{tech.name}</span>
          <span className="ml-1.5 hidden text-[8px] font-medium uppercase tracking-widest text-accent/70 sm:inline">core</span>
        </div>
      </div>
    </Tooltip>
  </motion.div>
);

/* ── standard item (compact) ── */
const StackItem = ({ tech, i }: { tech: Tech; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20px' }}
    transition={{ duration: 0.3, delay: i * 0.03 }}
  >
    <Tooltip text={tech.tip}>
      <div className="group flex items-center gap-1.5 rounded-lg bg-foreground/[0.025] px-2 py-1.5 ring-1 ring-foreground/[0.05] transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/[0.05] hover:ring-accent/20 dark:bg-white/[0.025] dark:ring-white/[0.05] dark:hover:bg-white/[0.05] dark:hover:ring-accent/15">
        <div className="transition-transform duration-300 group-hover:scale-110">
          {tech.icon}
        </div>
        <span className="text-[10.5px] font-medium text-foreground/80">{tech.name}</span>
      </div>
    </Tooltip>
  </motion.div>
);

/* ── main section ── */
const SkillsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  return (
    <section id="skills" className="section-padding relative overflow-hidden !py-6 sm:!py-8 md:!py-10">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Technologies</div>
          <h2
            className="mt-2 text-[16px] font-bold leading-6 tracking-[-0.03em] text-foreground sm:text-[18px]"
            style={displayStyle}
          >
            The toolkit
          </h2>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-[12px]">
            Technologies I reach for when building — battle-tested across real projects.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
          {categories.map((cat, catIdx) => {
            const featured = cat.items.filter((t) => t.featured);
            const standard = cat.items.filter((t) => !t.featured);

            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                {/* Category label */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">{cat.label}</span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>

                {/* Featured items — larger row */}
                {featured.length > 0 && (
                  <div className="mb-1.5 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {featured.map((tech, i) => (
                      <FeaturedCard key={tech.name} tech={tech} i={i} />
                    ))}
                  </div>
                )}

                {/* Standard items — compact, irregular flow */}
                <div className="flex flex-wrap gap-1.5">
                  {standard.map((tech, i) => (
                    <StackItem key={tech.name} tech={tech} i={i} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
