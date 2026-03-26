import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Say Hello', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const goTo = (href: string) => {
    navigate(href);
    setMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-[900] px-3 pt-3 sm:px-4 sm:pt-4 md:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 md:px-6 ${scrolled
              ? 'glass-strong border-border/90'
              : 'border-transparent bg-background/55 backdrop-blur-md'
            }`}
        >
          <button onClick={goHome} className="flex items-center gap-3 text-left">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background shadow-sm sm:h-10 sm:w-10 sm:text-sm">
              AD
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-foreground">Anurag Dubey</div>
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                Web Dev
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => goTo(link.href)}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${isActive
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="mx-2 h-6 w-px bg-border" />
            <ThemeToggle />
            <a
              href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`h-px w-5 bg-foreground transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`h-px w-5 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`h-px w-5 bg-foreground transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-[76px] z-[899] rounded-[22px] border border-border glass-strong p-3 sm:inset-x-4 sm:top-[88px] sm:rounded-[28px] sm:p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => goTo(link.href)}
                  className={`rounded-xl px-4 py-3 text-left text-sm transition-colors ${location.pathname === link.href ? 'bg-secondary font-medium text-foreground' : 'text-foreground/75 hover:bg-secondary'}`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
