import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const techStack = ['React', 'Node.js', 'TypeScript', 'Web3'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/anuraggdubey' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
  { label: 'X', href: 'https://x.com/anuraggdubeyy' },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="section-padding relative overflow-hidden !pb-2 !pt-16 sm:!pb-4 sm:!pt-24 lg:!pt-32"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="hero-orb absolute left-[-10%] top-12 h-52 w-52 rounded-full bg-accent/20 md:h-64 md:w-64" />
      <div className="hero-orb absolute right-[-5%] top-0 h-64 w-64 rounded-full bg-accent2/15 md:h-80 md:w-80" />

      <div className="relative sm:flex sm:min-h-[calc(100vh-12rem)] sm:items-center">

        {/* Card grid wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm sm:rounded-[28px] sm:p-10 md:p-12"
        >
          <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:max-w-3xl sm:text-left">

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-sm font-medium text-muted-foreground sm:text-base"
            >
              Hey, Anurag here 👋
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="mt-2.5 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-foreground sm:mt-4 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl"
            >
              Building clean, scalable
              <br className="hidden sm:block" />{' '}
              <span className="text-foreground/70">web experiences.</span>
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base"
            >
              Web2 & Web3 Dev focused on polished interfaces and reliable product delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="mt-5 flex items-center justify-center gap-3 sm:mt-8 sm:justify-start sm:gap-4"
            >
              <button
                onClick={() => navigate('/projects')}
                className="rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
              >
                View projects
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-xs font-medium text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-foreground sm:text-sm"
              >
                Get in touch
              </button>
            </motion.div>
          </div>

          {/* Bottom bar: tech stack + socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: 0.4 }}
            className="mt-6 border-t border-border/50 pt-5 sm:mt-10 sm:pt-6"
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-6">
              {/* Stack tags */}
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground sm:text-xs">
                {techStack.map((tech, i) => (
                  <span key={tech}>
                    {tech}
                    {i < techStack.length - 1 && (
                      <span className="ml-1.5 text-border">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Divider — desktop only */}
              <div className="hidden h-4 w-px bg-border sm:block" />

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
