import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years building and learning' },
  { value: '5+', label: 'Projects shipped' },
  { value: '10+', label: 'Core tools in regular use' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/anuraggdubey' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
  { label: 'X', href: 'https://x.com/anuraggdubeyy' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pb-20 lg:px-20 lg:pt-36"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="hero-orb absolute left-[-10%] top-12 h-52 w-52 rounded-full bg-accent/20 md:h-64 md:w-64" />
      <div className="hero-orb absolute right-[-5%] top-0 h-64 w-64 rounded-full bg-accent2/15 md:h-80 md:w-80" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex max-w-full rounded-full border border-border bg-background/70 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground backdrop-blur sm:text-[11px] sm:tracking-[0.24em]"
          >
            Available for internships, freelance work, and product collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-8 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building polished digital products
            <span className="mt-3 block text-foreground/75">
              with clean frontend craft and practical engineering.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            I am Anurag Dubey, a full-stack developer focused on responsive interfaces,
            cleaner application structure, and product experiences that feel reliable on real devices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              View projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-border bg-background/75 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-border bg-background/75 p-5 backdrop-blur">
                <div className="text-2xl font-semibold text-foreground md:text-3xl">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
