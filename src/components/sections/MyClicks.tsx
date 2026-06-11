import { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { pinterestPins, PINTEREST_PROFILE_URL } from '@/data/pinterestPins';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

import React from 'react';

const PinCard = React.forwardRef<
  HTMLAnchorElement,
  { pin: (typeof pinterestPins)[number]; index: number }
>(({ pin, index }, forwardedRef) => {
  const localRef = useRef(null);
  const inView = useInView(localRef, { once: true, margin: '-40px' });
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  return (
    <motion.a
      ref={(node) => {
        // Assign to both the local ref (for useInView) and the forwarded ref (for AnimatePresence)
        (localRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node;
      }}
      href={pin.pinUrl}
      target="_blank"
      rel="noopener noreferrer"
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="exit"
      className="pin-card group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-400"
    >
      {/* ─── Image ─── */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted/30">
        <img
          src={pin.image}
          alt={pin.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          loading="lazy"
          draggable={false}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Pinterest badge — top right on hover */}
        <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background/85 shadow-sm backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#E60023]">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </span>

        {/* Board tag — top left */}
        <span className="absolute left-2 top-2 rounded-full bg-background/85 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-foreground/80 shadow-sm backdrop-blur-sm sm:text-[10px]">
          {pin.board}
        </span>

        {/* Title overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <span
            className="block text-[12px] font-bold leading-snug text-white/90 sm:text-[13px]"
            style={displayStyle}
          >
            {pin.title}
          </span>
          <span className="mt-1 inline-flex items-center gap-1 text-[9px] font-medium text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-[10px]">
            <ExternalLink className="h-3 w-3" />
            Open on Pinterest
          </span>
        </div>
      </div>
    </motion.a>
  );
});

PinCard.displayName = 'PinCard';

const MyClicks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  return (
    <section
      id="clicks"
      className="section-padding relative overflow-hidden !max-w-[740px]"
    >
      <div className="hero-orb absolute left-0 top-16 h-80 w-80 rounded-full bg-foreground/5" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-kicker">My Clicks</div>
          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2
                className="text-[15px] font-bold leading-5 tracking-[-0.03em] text-foreground sm:text-[16px]"
                style={displayStyle}
              >
                Pinterest Picks
              </h2>
              <p className="mt-2 max-w-2xl text-[11px] leading-6 text-muted-foreground sm:text-[12px]">
                A curated collection of visuals, moods, and references I've
                saved — from design inspiration to everyday aesthetics.
              </p>
            </div>
            <div className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {pinterestPins.length} pin{pinterestPins.length !== 1 && 's'}
            </div>
          </div>

          {/* Pin grid — 2 columns, matching Projects layout */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5"
          >
            <AnimatePresence mode="popLayout">
              {pinterestPins.map((pin, index) => (
                <PinCard key={pin.id} pin={pin} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View all on Pinterest link */}
          <div className="mt-10 text-center sm:mt-12">
            <a
              href={PINTEREST_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-4 py-2 text-[10px] font-medium text-muted-foreground backdrop-blur transition-all duration-300 hover:border-foreground/20 hover:gap-2 hover:text-foreground sm:px-5 sm:py-2.5 sm:text-[11px]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              View all on Pinterest
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyClicks;
