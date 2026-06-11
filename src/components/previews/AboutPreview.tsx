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

          <p className="mt-2 text-justify text-[16px] leading-[1.7] text-muted-foreground sm:text-[16px]">
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
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => navigate('/about')}
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-[11px] font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:text-foreground hover:shadow-md sm:px-5 sm:py-2.5 sm:text-[12px]"
            >
              Full story & experience
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="https://drive.google.com/file/d/12emRXwZbez4zWzC1H8bOGSAstlQ0TSyl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-2 text-[11px] font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.04] hover:text-foreground hover:shadow-md sm:px-5 sm:py-2.5 sm:text-[12px]"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
