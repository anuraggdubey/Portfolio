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
            <div className="w-12 h-[2px] bg-primary glow-primary" />
            <span className="text-primary text-xs font-mono tracking-widest uppercase">01 // Identity_Matrix</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div className="space-y-8">
              <motion.h2
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight uppercase"
              >
                Building Conceptual <span className="text-primary text-shadow-glow">UI Matrices</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground leading-relaxed font-mono text-sm border-l-2 border-primary/20 pl-6 py-2">
                <p>
                  &gt; Initializing bio_protocol...<br/>
                  I'm Anurag Dubey, a full-stack architect specializing in ultra-futuristic 
                  digital interfaces and scalable neural-web topologies. I transform complex 
                  logic into immersive, interactive, and high-performance digital environments.
                </p>

                <p>
                  &gt; Technical_Focus_Log:<br/>
                  My engineering methodology prioritizes robust backend mainframes and dynamic, 
                  GPU-accelerated frontend experiences. From secure cryptographic layers to 
                  blockchain-integrated systems, I build for the next generation of the web.
                </p>

                <p>
                  &gt; Operational_Status:<br/>
                  Currently augmenting skills in AI subsystems and decentralized protocols. 
                  Committed to pushing the boundaries of software engineering and 
                  high-fidelity visual storytelling.
                </p>
              </motion.div>

              {/* Skill badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {['TypeScript', 'React', 'Javascript', 'python', 'Node.js', 'Express.js', 'AI Tools', 'Micrsoft Tools', 'Postman', 'Supabase', 'Firebase', 'Git & Github', 'Canva'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-widest text-primary hover:border-primary hover:glow-primary transition-all duration-300"
                  >
                    [{skill}]
                  </span>
                ))}
              </motion.div>

              {/* Download resume */}
              <motion.div variants={itemVariants}>
                <a
                  href="/certificate/Anurag Dubey CV.pdf"
                  download
                  className="group flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-all duration-300"
                >
                  <span className="w-12 h-12 border border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:glow-primary transition-all relative">
                    <div className="absolute top-0 right-0 w-1 h-1 bg-primary" />
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>

                  <span className="border-b border-transparent group-hover:border-primary pb-1">[ DOWNLOAD_ARCHIVE ]</span>

                  <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    &gt;&gt;
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
                    className="cyber-panel p-6 border border-primary/20 hover:border-primary transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <div className="font-display text-4xl font-bold text-gradient-primary text-shadow-glow relative z-10">
                      {counterInView ? (
                        <CountUp end={stat.value} duration={2} delay={i * 0.2} suffix={stat.suffix} />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground mt-2 group-hover:text-primary transition-colors relative z-10">{stat.label}</div>
                    <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-hover:w-full transition-all duration-500" />
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
