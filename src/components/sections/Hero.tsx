import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Animated Sphere
const AnimatedSphere = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const primaryColor = isDark ? "#00F5FF" : "#00A3AC";
  const accentColor = isDark ? "#FF2BD6" : "#D61BA8";

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color={primaryColor}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={isDark ? 0.15 : 0.1}
          wireframe={false}
        />
      </Sphere>
      <Sphere args={[1.85, 32, 32]}>
        <meshBasicMaterial
          color={accentColor}
          wireframe
          transparent
          opacity={isDark ? 0.1 : 0.05}
        />
      </Sphere>
    </Float>
  );
};

// Floating particles
const Particles = ({ isDark }: { isDark: boolean }) => {
  const points = useRef<THREE.Points>(null);
  const count = 200;
  const color = isDark ? "#00F5FF" : "#00A3AC";

  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
      points.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={points} geometry={geo}>
      <pointsMaterial size={0.03} color={color} transparent opacity={isDark ? 0.6 : 0.4} sizeAttenuation />
    </points>
  );
};

const roles = [
  'Full-Stack Developer',
  'Web2 & Web3 Enthusiast',
  'Computer Science Student'
];

const TypewriterText = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 2000);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('deleting'), 500);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="text-primary font-mono tracking-wide text-shadow-glow">
      {displayed}
      <span className="animate-blink inline-block w-4 h-5 bg-accent ml-2 align-middle translate-y-[-2px]" />
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handler);

    // Theme observer
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('mousemove', handler);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-30"
        style={{ backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      {/* Scanning Line overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan-line pointer-events-none z-10 opacity-30 dark:opacity-100" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none"
        animate={{
          x: mousePos.x * -20,
          y: mousePos.y * -20,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none"
        animate={{
          x: mousePos.x * 15,
          y: mousePos.y * 15,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 25 }}
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1.5 : 1} color={isDark ? "#00F5FF" : "#00A3AC"} />
          <pointLight position={[-10, -10, -10]} intensity={isDark ? 1.5 : 1} color={isDark ? "#8A2BE2" : "#7A1BE2"} />
          <AnimatedSphere isDark={isDark} />
          <Particles isDark={isDark} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 cyber-panel text-xs uppercase tracking-widest font-mono"
          >
            <span className="w-2 h-2 rounded-none bg-primary animate-pulse" />
            <span className="text-primary">System Online</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight uppercase">
              <span className="text-foreground/80 block text-2xl mb-4 font-mono tracking-widest text-primary">System Boot //</span>
              <span className="text-foreground glitch-text inline-block" data-text="Identify:">
                Identify:
                <span>Identify:</span>
                <span>Identify:</span>
              </span>
              <br />
              <div className="my-4 p-4 lg:p-6 bg-primary/5 border-l-4 border-primary inline-block backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                <TypewriterText />
              </div>
              <br />
              <span className="text-foreground/60 text-2xl tracking-widest block mt-4">Awaiting Directives...</span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed font-mono"
          >
            &gt; Uploading skills to neural network...<br />
            &gt; Initializing full-stack protocols...<br />
            &gt; Ready to deploy high-performance scalable systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center lg:justify-start mt-8"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 font-display font-bold uppercase tracking-widest overflow-hidden border border-primary glow-primary bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
              <span className="relative text-primary group-hover:text-white transition-colors flex items-center gap-3 text-sm">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                Execute_View_Projects
              </span>
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 font-display font-bold uppercase tracking-widest cyber-panel border-accent/50 text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 flex items-center gap-3 text-sm"
            >
              Initialize_Comms
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            {[
              { label: 'GitHub', href: 'https://github.com/anuraggdubey', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
              { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { label: 'Twitter', href: 'https://x.com/anuraggdubeyy', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
            <div className="flex-1 h-[1px] bg-border max-w-[80px]" />
          </motion.div>
        </div>

        {/* Right side: Floating stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="hidden lg:flex flex-col items-center justify-center gap-4"
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {[
              { value: '3+', label: 'Years Experience', accent: 'primary' },
              { value: '5+', label: 'Projects Build', accent: 'accent' },
              { value: '2+', label: 'Happy Clients', accent: 'accent2' },
              { value: '99%', label: 'Client Satisfaction', accent: 'primary' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="cyber-panel p-5 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className={`text-3xl font-display font-bold ${stat.accent === 'primary' ? 'text-gradient-primary text-shadow-glow' :
                  stat.accent === 'accent' ? 'text-gradient-accent drop-shadow-[0_0_10px_rgba(138,43,226,0.5)]' :
                    'text-accent2 drop-shadow-[0_0_10px_rgba(255,43,214,0.5)]'
                  }`}>
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2 font-mono group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
