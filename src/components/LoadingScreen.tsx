import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1800;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));

      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 600);
        }, 200);
      }
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background noise"
        >
          {/* Grid pattern bg */}
          <div
            className="absolute inset-0 bg-grid-pattern bg-grid-md opacity-30"
            style={{ backgroundSize: '50px 50px' }}
          />

          {/* Glow orb */}
          <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl bg-primary animate-pulse-glow" />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-center gap-3"
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-lg bg-gradient-primary animate-glow" />
                <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-gradient-primary">A</span>
                </div>
              </div>
              <span className="font-display font-semibold text-xl text-foreground/80 tracking-widest uppercase">
                Anurag Dubey
              </span>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 relative">
              <div className="h-[1px] bg-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground font-mono">Loading</span>
                <span className="text-xs text-primary font-mono">{progress}%</span>
              </div>
            </div>

            {/* Scan line effect */}
            <motion.div
              className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
