import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const roles = [
  'Full-Stack Developer',
  'Web2 & Web3 Builder',
  'Computer Science Student',
];

const stats = [
  { value: '3+', label: 'Years learning and building' },
  { value: '5+', label: 'Production-ready projects' },
  { value: '10+', label: 'Core tools in daily use' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/anuraggdubey',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://in.linkedin.com/in/anurag-dubey-407435349',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'X',
    href: 'https://x.com/anuraggdubeyy',
    icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/anuraggdubeyy',
    icon: 'M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.9 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8z',
  },
];

const AnimatedSphere = ({ isDark }: { isDark: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = clock.getElapsedTime() * 0.08;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.65, 64, 64]}>
        <MeshDistortMaterial
          color={isDark ? '#00F5FF' : '#008C93'}
          attach="material"
          distort={0.28}
          speed={1.8}
          roughness={0.18}
          metalness={0.7}
          transparent
          opacity={isDark ? 0.18 : 0.12}
        />
      </Sphere>
      <Sphere args={[1.82, 28, 28]}>
        <meshBasicMaterial
          color={isDark ? '#FF2BD6' : '#B01A8A'}
          wireframe
          transparent
          opacity={isDark ? 0.1 : 0.07}
        />
      </Sphere>
    </Float>
  );
};

const Particles = ({ isDark }: { isDark: boolean }) => {
  const points = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);

  if (!geometryRef.current) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometryRef.current = geometry;
  }

  useFrame(({ clock }) => {
    if (!points.current) return;

    points.current.rotation.y = clock.getElapsedTime() * 0.02;
    points.current.rotation.x = clock.getElapsedTime() * 0.015;
  });

  useEffect(() => {
    const current = geometryRef.current;

    return () => {
      current?.dispose();
    };
  }, []);

  return (
    <points ref={points} geometry={geometryRef.current}>
      <pointsMaterial
        size={0.03}
        color={isDark ? '#00F5FF' : '#008C93'}
        transparent
        opacity={isDark ? 0.5 : 0.3}
        sizeAttenuation
      />
    </points>
  );
};

const TypewriterText = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 65);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1800);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('deleting'), 500);
    } else if (displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
      setPhase('typing');
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="inline-flex items-center text-primary font-mono tracking-wide text-shadow-glow">
      {displayed}
      <span className="ml-2 inline-block h-5 w-[3px] animate-blink bg-accent align-middle" />
    </span>
  );
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const heroMotion = prefersReducedMotion
    ? { x: 0, y: 0 }
    : {
        x: mousePos.x * 14,
        y: mousePos.y * 14,
      };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.15),transparent_35%),radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.18),transparent_30%),linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_55%,hsl(var(--secondary)/0.7)_100%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-[0.16]" style={{ backgroundSize: '42px 42px' }} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />

      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]"
        animate={heroMotion}
        transition={{ type: 'spring', stiffness: 35, damping: 24 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[140px]"
        animate={prefersReducedMotion ? { x: 0, y: 0 } : { x: mousePos.x * -10, y: mousePos.y * -10 }}
        transition={{ type: 'spring', stiffness: 28, damping: 22 }}
      />

      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/35 to-transparent" />
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.45} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1.2 : 0.9} color={isDark ? '#00F5FF' : '#008C93'} />
          <pointLight position={[-10, -8, -8]} intensity={isDark ? 0.9 : 0.65} color={isDark ? '#A855F7' : '#9333EA'} />
          <AnimatedSphere isDark={isDark} />
          <Particles isDark={isDark} />
        </Canvas>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-background/60 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.28em] text-primary shadow-[0_0_30px_hsl(var(--primary)/0.08)] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for internships and freelance work
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <p className="text-sm font-mono uppercase tracking-[0.32em] text-primary/80">
              Full-stack systems with a sharp frontend edge
            </p>
            <h1 className="max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
              Building fast,
              <span className="block text-foreground/80"> cinematic products</span>
              <span className="mt-4 block text-2xl font-medium normal-case tracking-normal text-muted-foreground sm:text-3xl">
                <TypewriterText />
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              I design and ship polished web experiences with strong engineering underneath:
              responsive interfaces, reliable APIs, and product flows that feel smooth on real devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-3 rounded-none border border-primary/60 bg-primary px-7 py-4 text-sm font-display uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_18px_40px_hsl(var(--primary)/0.2)]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">&gt;</span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-3 rounded-none border border-border bg-background/75 px-7 py-4 text-sm font-display uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
            >
              Let&apos;s Work Together
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[22px] border border-border/80 bg-background/60 p-5 backdrop-blur">
                <div className="text-3xl font-display font-bold text-gradient-primary">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-10 flex items-center gap-5"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_24px_hsl(var(--primary)/0.18)]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-primary/15 via-transparent to-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-card/75 p-6 shadow-[0_20px_60px_hsl(var(--background)/0.45)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
            <div className="relative flex items-center justify-between border-b border-border/80 pb-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">Now building</p>
                <h2 className="mt-2 text-2xl font-display font-semibold uppercase tracking-wide">
                  Portfolio Interface
                </h2>
              </div>
              <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                Stable UI pass
              </div>
            </div>

            <div className="relative mt-6 space-y-4">
              {[
                'Smoother layout rhythm across sections',
                'Cleaner typography and stronger contrast',
                'Project cards that feel consistent and easier to scan',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-border/70 bg-background/55 p-4"
                >
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-mono text-primary">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-xs font-mono uppercase tracking-[0.24em] text-accent">Focus</p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                Building interfaces that keep the futuristic feel, but read clearly and hold together better on mobile and desktop.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="h-14 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
