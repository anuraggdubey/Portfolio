import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import stellarImg from '../../../ss/stellar.png';
import rumiImg from '../../../ss/rumi.png';

const workExperience = [
  {
    company: 'Stellar Open Source',
    role: 'Open Source Developer',
    duration: 'Feb 2026 - Current',
    logo: stellarImg,
  },
  {
    company: 'RUMI Care',
    role: 'Documentation Intern',
    duration: '3 Months',
    logo: rumiImg,
  }
];

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  return (
    <section id="about" className="section-padding relative overflow-hidden !py-3 sm:!py-4 md:!py-5">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* About Section */}
          <h2
            className="text-[20px] font-bold text-foreground sm:text-[24px]"
            style={displayStyle}
          >
            About
          </h2>

          <p className="mt-2 text-left text-[15px] leading-[1.6] text-muted-foreground sm:text-[16px]">
            Building AI and Web3 products that solve real-world problems. Open-source contributor to Stellar, Stellar Brand Ambassador, and recipient of ₹20K+ in ecosystem rewards. Passionate about fintech, automation, and turning ideas into scalable products.
          </p>

          {/* Work Experience Section */}
          <h2
            className="mt-8 text-[20px] font-bold text-foreground sm:text-[24px]"
            style={displayStyle}
          >
            Work Experience
          </h2>

          <div className="mt-4 flex flex-col gap-5">
            {workExperience.map((exp, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card p-1 sm:h-14 sm:w-14">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="h-full w-full rounded-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random`;
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-semibold text-foreground sm:text-[16px]">
                      {exp.company}
                    </h3>
                    <p className="text-[13px] text-foreground/80 sm:text-[14px]">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-[13px] text-muted-foreground sm:text-[14px]">
                    {exp.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
