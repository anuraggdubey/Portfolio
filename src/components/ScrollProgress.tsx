import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9990] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(195 100% 55%), hsl(260 80% 65%))',
      }}
    />
  );
};

export default ScrollProgress;
