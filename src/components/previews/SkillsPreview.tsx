import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categories = [
  { title: 'Frontend', top: ['React / Next.js', 'TypeScript'], count: 6 },
  { title: 'Backend', top: ['Node.js', 'REST APIs'], count: 6 },
  { title: 'Tools & Platforms', top: ['Git & GitHub', 'VS Code'], count: 5 },
  { title: 'AI & Emerging', top: ['AI Tools', 'Blockchain'], count: 4 },
];

const SkillsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="skills" className="section-padding relative overflow-hidden !py-6 sm:!py-8 md:!py-10">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker">Skills</div>
          <h2 className="mt-3 font-sans text-[19px] font-semibold leading-7 tracking-normal text-foreground">
            Technical strengths
          </h2>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 lg:grid-cols-4 lg:gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="border-l border-border/80 pl-4"
              >
                <p className="text-sm font-semibold text-foreground">{cat.title}</p>
                <div className="mt-2 space-y-1">
                  {cat.top.map((skill) => (
                    <p key={skill} className="text-[11px] text-muted-foreground sm:text-xs">{skill}</p>
                  ))}
                </div>
                <p className="mt-2 text-[10px] font-mono text-muted-foreground/60">
                  +{cat.count - cat.top.length} more
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/skills')}
            className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-accent transition-all hover:gap-3 sm:text-sm"
          >
            View all skills <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreview;
