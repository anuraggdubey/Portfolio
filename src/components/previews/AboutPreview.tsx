import { useRef } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const tools = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Tailwind', 'Web3'];

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  return (
    <section id="about" className="section-padding relative overflow-hidden !py-3 sm:!py-4 md:!py-5">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">About</div>

          <h2
            className="mt-3 text-[15px] font-semibold leading-5 tracking-[-0.03em] text-foreground sm:text-[16px]"
            style={displayStyle}
          >
            Hey, Anurag here.
          </h2>

          <p className="mt-2 max-w-[52ch] text-justify text-[12px] leading-[1.7] text-muted-foreground sm:text-[13px]">
            I am a Web2 & Web3 developer building sharp, readable,
            and dependable interfaces spanning payments, AI, and blockchain.
            When I am not building, I am watching stuffs or playing sports.
            Currently just contributing in tech and open source work.
            if you wanna talk bout work nd other stuff let's get in touch.
          </p>

          {/* Tech pills */}
          <div className="mt-3 flex flex-wrap gap-1">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-[9px] font-medium text-foreground/80 sm:text-[10px]"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Actions row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all hover:gap-2 hover:text-foreground sm:text-[12px]"
            >
              Full story & experience <ArrowRight className="h-3 w-3" />
            </button>

            <span className="hidden h-4 w-px bg-border sm:block" />

            <a
              href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all hover:gap-1.5 hover:text-foreground sm:text-[12px]"
            >
              <FileText className="h-3 w-3" />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
