import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FolderGit2, Home, Mail, UserRound } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '/about', icon: UserRound },
  { label: 'Projects', href: '/projects', icon: FolderGit2 },
  { label: 'Reach', href: '/contact', icon: Mail },
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
        className="fixed inset-x-0 top-0 z-[900] px-3 pt-3 sm:px-4 sm:pt-5"
      >
        <div
          className={`mx-auto flex w-fit items-center justify-center rounded-full border px-2 py-1.5 shadow-[0_18px_70px_hsl(var(--foreground)/0.08)] backdrop-blur-xl transition-all duration-300 sm:px-3 ${scrolled
              ? 'border-border bg-background/88'
              : 'border-border/80 bg-background/70'
            }`}
        >
          <button
            onClick={goHome}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary ${location.pathname === '/' ? 'bg-secondary' : ''}`}
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  onClick={() => goTo(link.href)}
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${isActive
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground'
                    }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </button>
              );
            })}

            <div className="mx-1.5 h-6 w-px bg-border" />
            <ThemeToggle />
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
            className="fixed inset-x-3 top-[70px] z-[899] rounded-[18px] border border-border bg-background/92 p-3 shadow-[0_24px_80px_hsl(var(--foreground)/0.14)] backdrop-blur-xl sm:inset-x-4 sm:top-[78px] md:hidden"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
