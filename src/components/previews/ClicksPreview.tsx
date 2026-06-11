import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pinterestPins } from '@/data/pinterestPins';

/** Show the first 6 pins as a compact preview on the homepage. */
const previewPins = pinterestPins.slice(0, 6);

const ClicksPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const displayStyle = {
    fontFamily: "'Space Grotesk', var(--font-display)",
  };

  return (
    <section
      id="clicks"
      className="section-padding relative overflow-hidden !py-3 sm:!py-4 md:!py-5"
    >
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">My Clicks</div>
          <h2
            className="mt-2 text-[15px] font-semibold leading-5 tracking-[-0.03em] text-foreground sm:text-[16px]"
            style={displayStyle}
          >
            Pinterest Picks
          </h2>
          <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground sm:text-[12px]">
            A glimpse into things I find inspiring — designs, vibes, and visual
            bookmarks from my Pinterest boards.
          </p>

          {/* Pin grid — 3 columns on desktop, 2 on mobile */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            {previewPins.map((pin, i) => (
              <motion.a
                key={pin.id}
                href={pin.pinUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="pin-card group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border/70 bg-card/80 shadow-sm backdrop-blur-sm transition-all duration-400"
              >
                {/* Pin image */}
                <img
                  src={pin.image}
                  alt={pin.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                  draggable={false}
                />

                {/* Gradient overlay — always visible at bottom, stronger on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Pinterest icon top-right */}
                <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-background/80 shadow-sm backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#E60023]">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </span>

                {/* Title & board label */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                  <span
                    className="block text-[10px] font-semibold leading-tight text-white/90 sm:text-[11px]"
                    style={displayStyle}
                  >
                    {pin.title}
                  </span>
                  <span className="mt-0.5 block text-[8px] font-medium uppercase tracking-wider text-white/50 sm:text-[9px]">
                    {pin.board}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => navigate('/clicks')}
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-[11px] font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:text-foreground hover:shadow-md sm:px-5 sm:py-2.5 sm:text-[12px]"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#E60023]">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            See all clicks
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClicksPreview;
