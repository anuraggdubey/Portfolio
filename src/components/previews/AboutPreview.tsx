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

const stats = [
  { value: '3+', label: 'Years' },
  { value: '5+', label: 'Projects' },
  { value: '5', label: 'Hackathons' },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  return (
    <section id="about" className="section-padding relative overflow-hidden !py-6 sm:!py-8 md:!py-10">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">About</div>

          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_220px] lg:gap-8">
            <div>
              <h2
                className="text-[18px] font-semibold leading-6 tracking-[-0.03em] text-foreground sm:text-[20px]"
                style={displayStyle}
              >
                Hey, Anurag here.
              </h2>
              <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-sm sm:leading-7">
                I am a Web2 & Web3 developer building sharp, readable,
                and dependable interfaces spanning payments, AI, and blockchain.
              </p>

              <div className="mt-4 space-y-1.5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-[12px] text-muted-foreground sm:text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:text-[11px]"
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

            <div className="grid grid-cols-3 gap-3 py-2 lg:grid-cols-1 lg:py-0 lg:pl-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold leading-none text-foreground">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
              <a
                href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
                download
                className="col-span-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent transition-all hover:gap-2.5 sm:text-xs lg:col-span-1"
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
