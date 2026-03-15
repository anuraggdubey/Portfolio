import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default to dark for the Cyberpunk aesthetic
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 border border-primary/30 flex items-center justify-center group overflow-hidden bg-primary/5 hover:border-primary hover:glow-primary transition-all duration-300"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      
      <span className="relative z-10 text-xl">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>

      {/* Accents */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-primary" />
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-primary" />
    </motion.button>
  );
};

export default ThemeToggle;
