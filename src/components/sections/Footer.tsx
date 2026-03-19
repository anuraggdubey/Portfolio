import { motion } from 'framer-motion';

const footerSocials = [
  {
    href: 'https://github.com/anuraggdubey',
    label: 'GITHUB_UPLINK',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    href: 'https://in.linkedin.com/in/anurag-dubey-407435349',
    label: 'LINKEDIN_SIGNAL',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://x.com/anuraggdubeyy',
    label: 'X_SIGNAL',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    href: 'https://instagram.com/anuragdubeyyyy',
    label: 'INSTAGRAM_FEED',
    path: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.9 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-background px-6 py-12 md:px-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="group flex items-center gap-4">
              <div className="relative h-10 w-10 border border-primary/30 transition-all duration-300 group-hover:border-primary group-hover:glow-primary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">A</span>
                </div>
                <div className="absolute -left-1 -top-1 h-2 w-2 bg-primary" />
                <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-primary">
                  Anurag Dubey
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  &gt; Full-Stack // UI_Architect
                </span>
              </div>
            </div>
            <p className="max-w-xs text-center text-[10px] font-mono leading-relaxed text-muted-foreground/60 md:text-left">
              Design and development of ultra-futuristic digital matrices and scalable neural networks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-primary"
              >
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">/</span>
                {link}_
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <div className="flex items-center gap-4">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center border border-primary/20 text-muted-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary hover:glow-primary"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 md:items-end">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
                SYSTEM_TYPE // PORTFOLIO_V2.0.4
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/40">
                &copy; {currentYear} ANURAG_DUBEY. ALL_RIGHTS_RESERVED.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-primary/10" />
          <div className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-[0.3em] text-primary/30">
            <span className="h-1.5 w-1.5 animate-pulse bg-primary" />
            STABLE_CONNECTION_ESTABLISHED
          </div>
          <div className="h-[1px] flex-1 bg-primary/10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
