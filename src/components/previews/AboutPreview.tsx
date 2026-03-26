import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const highlights = [
  'Full-stack project building with strong frontend focus',
  'Internships, hackathons, and real product experiments',
  'AI, blockchain, and modern web technologies',
];

const tools = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Tailwind', 'Web3'];

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">About</div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-8">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Thoughtful execution, not just flashy visuals.
              </h2>
              <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-sm sm:leading-7">
                I am Anurag Dubey — a full-stack developer building sharp, readable,
                and dependable interfaces across payments, e-commerce, AI, and blockchain.
                With 3+ years of learning and 5+ projects shipped, I focus on clean architecture
                and polished product delivery.
              </p>

              {/* Highlights */}
              <div className="mt-4 space-y-1.5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-[12px] text-muted-foreground sm:text-xs">{item}</p>
                  </div>
                ))}
              </div>

              {/* Tool tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-background/75 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:text-[11px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                onClick={() => navigate('/about')}
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-accent transition-all hover:gap-3 sm:mt-5 sm:text-sm"
              >
                Full story, hackathons & experience <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Snapshot card */}
            <div className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur sm:self-start">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-xs font-semibold text-background">
                  AD
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Anurag Dubey</h3>
                  <p className="text-[11px] text-muted-foreground">Full-stack · Frontend focus</p>
                </div>
              </div>
              <div className="mt-3 flex gap-4 border-t border-border/50 pt-3">
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">3+</p>
                  <p className="text-[9px] text-muted-foreground">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">5+</p>
                  <p className="text-[9px] text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground">5</p>
                  <p className="text-[9px] text-muted-foreground">Hackathons</p>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
                download
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent transition-all hover:gap-2.5 sm:text-xs"
              >
                Download resume <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
