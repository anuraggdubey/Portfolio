import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 border-b ${scrolled
            ? 'py-3 cyber-panel border-primary/50 shadow-elegant glow-primary'
            : 'py-6 bg-background/50 backdrop-blur-sm border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-sm bg-gradient-primary opacity-80 group-hover:opacity-100 transition-opacity glow-primary" />
              <div className="absolute inset-[1px] rounded-[2px] bg-background flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <span className="font-display font-bold text-sm text-gradient-primary relative z-10 font-bold">A</span>
              </div>
            </div>
            <div className="flex flex-col items-start hidden sm:flex">
              <span className="font-display font-semibold text-primary group-hover:text-accent transition-colors text-sm tracking-wider uppercase">
                Anurag Dubey
              </span>
              <span className="font-mono text-[10px] text-muted-foreground opacity-70">UI_SYS.v1.0.4</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-display tracking-wide uppercase transition-colors group ${activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary transition-all duration-300'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary glow-primary"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
                  />
                )}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </button>
            ))}
            <ThemeToggle />
            <div className="w-[1px] h-6 bg-border mx-2" />
            <button
              onClick={() => scrollTo('#contact')}
              className="relative px-6 py-2 bg-primary/10 border border-primary/50 text-primary text-sm font-display font-semibold uppercase tracking-wider hover:bg-primary/20 hover:border-primary glow-primary transition-all duration-300 overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-primary/20 transition-all duration-300 group-hover:w-full" />
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Hire_Me
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-6 h-[1.5px] bg-foreground"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-foreground"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-[899] cyber-panel border-b border-primary md:hidden before:absolute before:inset-0 before:bg-grid-pattern before:opacity-10"
          >
            <div className="flex flex-col p-6 gap-2 relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 border-l-2 border-transparent hover:border-primary text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-display uppercase tracking-wider text-sm"
                >
                  <span className="text-primary/50 mr-2">{`0${i + 1}`}</span> {link.label}
                </motion.button>
              ))}
              <div className="flex justify-between items-center mt-4">
                <ThemeToggle />
                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex-1 ml-4 px-5 py-3 border border-primary bg-primary/10 text-primary font-display uppercase tracking-widest text-sm hover:bg-primary/20 glow-primary transition-all flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 bg-primary animate-pulse" />
                  Initialize Hire Sequence
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
