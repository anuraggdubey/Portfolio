import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FolderGit2, Home, Mail, UserRound, Camera } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '/about', icon: UserRound },
  { label: 'Projects', href: '/projects', icon: FolderGit2 },
  { label: 'Clicks', href: '/clicks', icon: Camera },
  { label: 'Reach', href: '/contact', icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    navigate(href);
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
      {/* ═══════════════════════════════════════════════════════
          DESKTOP — top floating pill (visible md and above)
         ═══════════════════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-[900] hidden justify-center px-4 pt-4 md:flex"
      >
        <div
          className={`mx-auto flex w-fit items-center justify-center rounded-full border px-3 py-1.5 shadow-[0_18px_70px_hsl(var(--foreground)/0.08)] backdrop-blur-xl transition-all duration-300 ${scrolled
              ? 'border-border bg-background/88'
              : 'border-border/80 bg-background/70'
            }`}
        >
          <button
            onClick={goHome}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary ${location.pathname === '/' ? 'bg-secondary' : ''}`}
            aria-label="Home"
          >
            <Home className="h-3.5 w-3.5" />
          </button>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  onClick={() => goTo(link.href)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${isActive
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground'
                    }`}
                >
                  <Icon className="h-3 w-3" />
                  {link.label}
                </button>
              );
            })}

            <div className="mx-1.5 h-6 w-px bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* ═══════════════════════════════════════════════════════
          MOBILE — fixed bottom bar (visible below md)
         ═══════════════════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed inset-x-0 bottom-0 z-[900] flex justify-center px-3 pb-3 md:hidden"
      >
        <div
          className={`mx-auto flex w-fit items-center gap-1 rounded-full border px-2 py-1.5 shadow-[0_-8px_40px_hsl(var(--foreground)/0.08)] backdrop-blur-xl transition-all duration-300 ${scrolled
              ? 'border-border bg-background/92'
              : 'border-border/80 bg-background/80'
            }`}
        >
          {/* Home */}
          <button
            onClick={goHome}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
              location.pathname === '/'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
            }`}
            aria-label="Home"
          >
            <Home className="h-[18px] w-[18px]" />
          </button>

          {/* Nav links */}
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            return (
              <button
                key={link.label}
                onClick={() => goTo(link.href)}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-foreground text-background shadow-sm'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
                aria-label={link.label}
              >
                <Icon className="h-[18px] w-[18px]" />
              </button>
            );
          })}

          {/* Divider */}
          <div className="mx-0.5 h-6 w-px bg-border/60" />

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
