import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView as useCounterInView } from 'react-intersection-observer';

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Projects Build' },
  { value: 2, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Technologies' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [counterRef, counterInView] = useCounterInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-primary" />
            <span className="text-primary text-sm font-mono tracking-widest uppercase">About Me</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div className="space-y-8">
              <motion.h2
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight"
              >
                Building digital products that{' '}
                <span className="text-gradient-primary">matter</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm Anurag Dubey, a full-stack developer passionate about building modern,
                  scalable web applications and interactive digital experiences. I enjoy
                  turning complex ideas into clean, efficient, and user-friendly solutions.
                </p>

                <p>
                  My work focuses on developing robust backend systems and dynamic frontend
                  interfaces using modern technologies. I have built projects ranging from
                  secure authentication systems and blockchain-based applications to advanced
                  animated web interfaces and full-stack platforms.
                </p>

                <p>
                  When I'm not coding, I explore new technologies, experiment with creative
                  web animations, and work on projects that push my skills in software
                  engineering and problem solving.
                </p>
              </motion.div>

              {/* Skill badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Javascript', 'python', 'Node.js', 'Express.js', 'AI Tools', 'Micrsoft Tools', 'Postman', 'Supabase', 'Firebase', 'Git & Github', 'Canva'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium glass border border-border/60 text-foreground/70 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>

              {/* Download resume */}
              <motion.div variants={itemVariants}>
                <a
                  href="/certificate/Anurag Dubey CV.pdf"
                  download
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>

                  <span>Download Resume</span>

                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right: Stats + Avatar */}
            <div className="space-y-8">
              {/* Avatar / Abstract graphic */}
              <motion.div
                variants={itemVariants}
                className="relative mx-auto lg:mx-0 w-64 h-64"
              >
                {/* Rotating rings */}
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border border-accent/10 animate-[spin-slow_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full bg-gradient-card" />
                {/* Central avatar placeholder */}
                <div className="absolute inset-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <span className="font-display font-bold text-5xl text-gradient-primary relative">AD</span>
                </div>
                {/* Orbit dots */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary/60 animate-spin-slow"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`,
                      animationDuration: `${20 + i * 5}s`,
                      animationDelay: `${-i * 3}s`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Stats */}
              <div ref={counterRef} className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    custom={i}
                    className="glass rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="font-display text-3xl font-bold text-gradient-primary">
                      {counterInView ? (
                        <CountUp end={stat.value} duration={2} delay={i * 0.2} suffix={stat.suffix} />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
