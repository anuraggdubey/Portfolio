import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/20 py-12 px-6 md:px-12 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 border border-primary/30 group-hover:border-primary group-hover:glow-primary transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-primary">A</span>
                </div>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-foreground uppercase group-hover:text-primary transition-colors">
                  Anurag Dubey
                </span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  &gt; Full-Stack // UI_Architect
                </span>
              </div>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground/60 max-w-xs text-center md:text-left leading-relaxed">
              Design and development of ultra-futuristic digital matrices and scalable neural networks.
            </p>
          </div>

          {/* Navigation Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                {link}_
              </button>
            ))}
          </div>

          {/* Social Nodes */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              {[
                { href: 'https://github.com/anuraggdubey', label: 'GITHUB_UPLINK', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                { href: 'https://in.linkedin.com/in/anurag-dubey-407435349', label: 'LINKEDIN_SIGNAL', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center border border-primary/20 hover:border-primary hover:glow-primary hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
                SYSTEM_TYPE // PORTFOLIO_V2.0.4
              </p>
              <p className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em]">
                © {currentYear} ANURAG_DUBEY. ALL_RIGHTS_RESERVED.
              </p>
            </div>
          </div>
        </div>

        {/* Status Line */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-primary/10" />
          <div className="flex items-center gap-2 text-[8px] font-mono text-primary/30 uppercase tracking-[0.3em]">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
            STABLE_CONNECTION_ESTABLISHED
          </div>
          <div className="flex-1 h-[1px] bg-primary/10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
