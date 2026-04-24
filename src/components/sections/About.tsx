import { useRef } from 'react';
import { ArrowRight, BriefcaseBusiness, GraduationCap, Trophy } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    year: '2021 – 2023',
    College: 'Thakur College of Arts, Science & Commerce',
    Degree: 'PCM CS',
    org: 'University Program 72%',
  },
  {
    year: '2023 – 2026',
    College: 'Rizvi College of Arts, Science & Commerce',
    Degree: 'Bachelors in Computer Science',
    org: 'Mumbai University GPA: 9.1/10',
  },
];

const experience = [
  {
    year: 'May 2025 - July 2025',
    role: 'Documentation Intern',
    org: 'RumiCare International Conference',
    desc: 'Worked on research paper and Magzine documentation for the RumiCare International Conference, issued certificates to the contributor, writers and creators.',
  },
  {
    year: 'Feb 2026 – April 2026',
    role: 'Open Source Blockchain Contributor',
    org: 'Risein web3 Stellar org',
    desc: 'Contributed on stellar ecosystem by building a web3 project and open source contribution to the stellar ecosystem.Earned more than 15k.',
  },
  {
    year: '2025 – Present',
    role: 'Full-stack & Blockchain Dev',
    org: 'Personal Development',
    desc: 'Building project-based experience across payments, e-commerce, AI experiments, and blockchain prototypes.',
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
    venue: 'Mumbai · Web3',
    duration: 'Web3 Hackathon',
    result: 'Participant',
    desc: 'Web3-focused hackathon exploring blockchain development on the Starknet ecosystem.',
    cert: null,
  },
  {
    title: 'OpenAi Codex Hackathon',
    venue: 'Mumbai · Web3',
    duration: '12hrs OpenAI Hackathon',
    result: 'Participant',
    desc: 'Built an Ai agent marketplace where user can create thier own agent and earn on the usage of the agents',
    cert: null,
  },
  {
    title: 'Unthink Hackathon',
    venue: 'MH Saboo Siddik College Mumbai',
    duration: '12 Hrs',
    result: 'Participant',
    desc: 'Participated in a 12-hour hackathon built an Desktop application NelAi solevs the context switching problem by running two things simultaneously on the desktop and providing a seamless experience to the user.',
    cert: null,
  },
];

type EducationEntry = {
  year: string;
  College: string;
  Degree: string;
  org: string;
};

type ExperienceEntry = {
  year: string;
  role: string;
  org: string;
  desc: string;
};

type HackathonEntry = {
  title: string;
  venue: string;
  duration: string;
  result: string;
  desc: string;
  cert: string | null;
};

const itemMotion = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.35 },
};

const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

const SectionTitle = ({
  icon: Icon,
  title,
}: {
  icon: typeof GraduationCap;
  title: string;
}) => (
  <div className="flex items-center gap-1.5">
    <h3
      className="text-[15px] font-semibold leading-5 tracking-[-0.04em] text-foreground sm:text-[16px]"
      style={displayStyle}
    >
      {title}
    </h3>
    <Icon className="h-3.5 w-3.5 text-foreground/72" />
  </div>
);

const Marker = ({
  label,
  tone,
}: {
  label: string;
  tone: 'education' | 'experience' | 'hackathon';
}) => {
  const toneClasses =
    tone === 'education'
      ? 'bg-[linear-gradient(135deg,hsl(var(--accent)/0.22),hsl(var(--accent2)/0.14))]'
      : tone === 'experience'
        ? 'bg-[linear-gradient(135deg,hsl(var(--accent2)/0.18),hsl(var(--accent)/0.12))]'
        : 'bg-[linear-gradient(135deg,hsl(var(--accent)/0.30),hsl(var(--accent2)/0.18))]';

  return (
    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/80 text-[9px] font-semibold text-foreground shadow-[0_4px_12px_hsl(var(--foreground)/0.06)] ${toneClasses}`}>
      {label}
    </div>
  );
};

const EducationSection = ({ items }: { items: EducationEntry[] }) => (
  <motion.section
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4 }}
    className="mt-12"
  >
    <SectionTitle icon={GraduationCap} title="Education" />
    <div className="mt-5 space-y-5">
      {items.map((item, index) => (
        <motion.div
          key={`${item.College}-${item.year}`}
          {...itemMotion}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-2.5"
        >
          <Marker label={index === 0 ? 'TC' : 'RC'} tone="education" />
          <div className="min-w-0">
            <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p
                  className="text-[13px] font-semibold leading-5 tracking-[-0.03em] text-foreground"
                  style={displayStyle}
                >
                  {item.College}
                </p>
                <p className="text-[12px] leading-5 text-muted-foreground">{item.Degree}</p>
                <p className="text-[12px] leading-5 text-foreground/86">{item.org}</p>
              </div>
              <p className="shrink-0 pt-0.5 text-[12px] leading-5 text-muted-foreground sm:text-right">{item.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const ExperienceSection = ({ items }: { items: ExperienceEntry[] }) => (
  <motion.section
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4 }}
    className="mt-14"
  >
    <SectionTitle icon={BriefcaseBusiness} title="Experience" />
    <div className="mt-5 space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={`${item.role}-${item.year}`}
          {...itemMotion}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-2.5"
        >
          <Marker label={item.role.slice(0, 2).toUpperCase()} tone="experience" />
          <div className="min-w-0">
            <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p
                  className="text-[16px] font-semibold leading-6 tracking-[-0.03em] text-foreground"
                  style={displayStyle}
                >
                  {item.role}
                </p>
                <p className="text-[12px] leading-5 text-muted-foreground">{item.org}</p>
              </div>
              <p className="shrink-0 pt-0.5 text-[12px] leading-5 text-muted-foreground sm:text-right">{item.year}</p>
            </div>
            <p className="mt-0.5 max-w-[58ch] text-justify text-[12px] leading-5 text-foreground/86">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const HackathonsSection = ({ items }: { items: HackathonEntry[] }) => (
  <motion.section
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4 }}
    className="mt-14"
  >
    <SectionTitle icon={Trophy} title="Hackathons" />
    <div className="mt-5 space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          {...itemMotion}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-2.5"
        >
          <Marker label={item.title.slice(0, 2).toUpperCase()} tone="hackathon" />
          <div className="min-w-0">
            <div className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p
                  className="text-[16px] font-semibold leading-6 tracking-[-0.03em] text-foreground"
                  style={displayStyle}
                >
                  {item.title}
                </p>
                <p className="text-[12px] leading-5 text-muted-foreground">{item.venue}</p>
              </div>
              <p className="shrink-0 pt-0.5 text-[12px] leading-5 text-muted-foreground sm:text-right">{item.duration}</p>
            </div>
            <p className="mt-0.5 text-[12px] font-medium leading-5 text-foreground/92">{item.result}</p>
            <p className="max-w-[60ch] text-justify text-[12px] leading-5 text-foreground/86">{item.desc}</p>
            {item.cert && (
              <a
                href={item.cert}
                download
                className="group mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all duration-300 hover:gap-1.5 hover:text-foreground"
              >
                View certificate <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative !py-8 sm:!py-10 md:!py-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="relative"
      >
        <div className="section-kicker">About</div>

        <div className="mt-4">
          <h2
            className="text-[15px] font-semibold leading-5 tracking-[-0.03em] text-foreground sm:text-[16px]"
            style={displayStyle}
          >
            Hey, Anurag here.
          </h2>
          <p className="mt-2 text-justify text-[12px] leading-[1.7] text-muted-foreground sm:text-[13px]">
            I am a Web2 & Web3 developer building sharp, readable,
            and dependable interfaces — spanning payments, AI, and blockchain. And making ideas into real, usable products is what I love doing.
            When I am not building, I am watching stuffs or playing sports. Currently just contributing in tech and open source work. If you wanna talk bout work nd other stuff let's get in touch.
          </p>
          <a
            href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
            download
            className="group mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-foreground/70 underline decoration-border underline-offset-[3px] transition-all duration-300 hover:gap-1.5 hover:text-foreground"
          >
            Download resume <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <EducationSection items={education} />
        <ExperienceSection items={experience} />
        <HackathonsSection items={hackathons} />
      </motion.div>
    </section>
  );
};

export default About;
