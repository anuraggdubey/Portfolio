import { useRef } from 'react';
import CountUp from 'react-countup';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useInView as useCounterInView } from 'react-intersection-observer';

const stats = [
  { value: 3, suffix: '+', label: 'Years of learning' },
  { value: 5, suffix: '+', label: 'Projects shipped' },
  { value: 2, suffix: '+', label: 'Internships' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

const tools = [
  'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'Firebase', 'Tailwind CSS', 'GitHub', 'Postman', 'Python',
  'Supabase', 'AI tools',
];

const timeline = [
  {
    year: '2023 – 2026',
    role: 'B.Sc. Computer Science',
    org: 'University Program',
    desc: 'Studying CS fundamentals — programming, web development, networking, data structures, and emerging technologies.',
  },
  {
    year: '2025',
    role: 'Documentation Intern',
    org: 'RumiCare Event',
    desc: 'Supported documentation, event coordination, and digital materials for workshops and operational planning.',
  },
  {
    year: '2025 – Present',
    role: 'Full-stack & Blockchain Dev',
    org: 'Personal Development',
    desc: 'Building project-based experience across payments, e-commerce, AI experiments, and blockchain prototypes.',
  },
  {
    year: 'Feb 2026 – Apr 2026',
    role: 'Blockchain Contributor',
    org: 'Rise In',
    desc: 'Stellar Journey to Mastery program — building practical familiarity with asset issuance, trustlines, and secure transfer flows.',
  },
];

const hackathons = [
  {
    title: 'ZeroDay National Hackathon',
    venue: 'SIES College',
    duration: '30 hours',
    result: 'Participant',
    desc: 'National-level 30-hour hackathon — built solutions under time pressure and tight teamwork constraints.',
    cert: '/certificate/ZeroDay Certificate .pdf',
  },
  {
    title: 'SHUBARAMBH Intercollegiate',
    venue: 'Atharva College',
    duration: 'Intercollegiate',
    result: '🏆 3rd Place',
    desc: 'Won 3rd place by shipping a competitive project solution during an intercollegiate hackathon.',
    cert: '/certificate/shubharambh.pdf',
  },
  {
    title: 'Build & Grow AI Hackathon 2.0',
    venue: 'NMIMS College · Google GDG',
    duration: '24 hours',
    result: '🔥 Top 20 Finalist',
    desc: 'Reached top 20 out of hundreds of teams in a Google GDG-sponsored 24-hour AI hackathon.',
    cert: '/certificate/GDG Certificate.pdf',
  },
  {
    title: 'HackFusion Hackathon',
    venue: 'Sardar Patel Institute of Technology',
    duration: 'Hackathon',
    result: 'Participant',
    desc: 'High-pressure hackathon focused on rapid collaboration and prototype delivery.',
    cert: '/certificate/Hackfusion Certificate.pdf',
  },
  {
    title: 'Starknet Blitz',
    venue: 'Online · Web3',
    duration: 'Web3 Hackathon',
    result: 'Participant',
    desc: 'Web3-focused hackathon exploring blockchain development on the Starknet ecosystem.',
    cert: null,
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [counterRef, counterInView] = useCounterInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/10" />

      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">About</div>

          {/* ─── Top: intro + snapshot ─── */}
          <div className="mt-5 grid gap-6 sm:mt-6 lg:grid-cols-[1fr_320px] lg:gap-8">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                Thoughtful execution, not just flashy visuals.
              </h2>
              <p className="mt-3 text-[13px] leading-7 text-muted-foreground sm:mt-4 sm:text-sm sm:leading-7">
                I am Anurag Dubey, a full-stack developer building sharp, readable,
                and dependable interfaces — spanning payments, e-commerce, AI, and blockchain.
              </p>

              {/* Tool tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-background/75 px-2.5 py-1 text-[10px] font-medium text-foreground/80 sm:px-3 sm:py-1.5 sm:text-[11px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Snapshot card */}
            <div className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur sm:p-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
                Snapshot
              </p>
              <div className="mt-3 flex items-center gap-3 sm:mt-4 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-xs font-semibold text-background sm:h-12 sm:w-12 sm:text-sm">
                  AD
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">Anurag Dubey</h3>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">Full-stack · Frontend focus</p>
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
                download
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent transition-all hover:gap-2.5 sm:mt-4 sm:text-xs"
              >
                Download resume <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* ─── Stats row ─── */}
          <div ref={counterRef} className="mt-5 grid grid-cols-4 gap-2 sm:mt-6 sm:gap-3">
            {stats.map((stat, index) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-card/50 p-3 text-center backdrop-blur sm:rounded-2xl sm:p-4 sm:text-left">
                <div className="text-lg font-semibold text-foreground sm:text-2xl">
                  {counterInView ? (
                    <CountUp end={stat.value} duration={1.5} delay={index * 0.08} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-[9px] text-muted-foreground sm:mt-1 sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ─── Experience Timeline ─── */}
          <div className="mt-6 sm:mt-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
              Experience & Education
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.role} className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur">
                  <p className="text-[10px] font-mono text-accent sm:text-[11px]">{item.year}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{item.role}</p>
                  <p className="text-[11px] text-muted-foreground">{item.org}</p>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/80 sm:text-xs sm:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Hackathons ─── */}
          <div className="mt-6 sm:mt-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
              Hackathons
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hackathons.map((h) => (
                <div key={h.title} className="rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{h.title}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">{h.venue}</p>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      {h.duration}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[10px] font-semibold text-foreground/80 sm:text-[11px]">{h.result}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/80 sm:text-xs sm:leading-relaxed">
                    {h.desc}
                  </p>
                  {h.cert && (
                    <a
                      href={h.cert}
                      download
                      className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-medium text-accent transition-all hover:gap-2 sm:text-[11px]"
                    >
                      View certificate <ArrowRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
