import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(nextProgress));

      if (nextProgress < 100) {
        requestAnimationFrame(step);
        return;
      }

      setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 300);
      }, 120);
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background"
        >
          <div className="glass-strong surface-outline w-[min(420px,calc(100vw-2rem))] rounded-[32px] p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">Anurag Dubey</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Portfolio loading
                </p>
              </div>
              <div className="rounded-full bg-foreground px-3 py-1 text-[11px] font-mono text-background">
                {progress}%
              </div>
            </div>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
