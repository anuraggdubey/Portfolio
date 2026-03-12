import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Merchant Mitra – UPI Sahayak For Local Merchant",
    description:
      "A smart digital assistant designed for local merchants to track UPI payments, manage daily transactions, and generate simple financial insights for small businesses.",
    longDescription:
      "Merchant Mitra helps shopkeepers easily manage digital payments and track their daily business performance. The platform provides transaction history, basic analytics, and simplified dashboards so small merchants can better understand their sales and financial activity.",
    tech: ["React", "Node.js", "Express", "MongoDB", "UPI APIs", "Tailwind CSS"],
    category: "FinTech / Merchant Tools",
    metrics: "Local Business Solution",
    gradient: "from-primary/20 to-accent/20",
    accentColor: "text-primary",
    github: "https://github.com/anuraggdubey/Merchant-Mitra",
    live: "https://merchant-mitra.vercel.app/",
    featured: true,
  },

  {
    id: 2,
    title: "Voice Forge - Voice Cloning & Detection",
    description:
      "An AI-based system capable of cloning voices and detecting synthetic or manipulated audio using machine learning techniques.",
    longDescription:
      "This project explores voice synthesis and deepfake detection. It allows users to generate synthetic speech from voice samples and also includes a detection module that identifies whether an audio clip is real or AI-generated.",
    tech: ["Python", "TensorFlow", "Deep Learning", "Speech Processing", "Flask"],
    category: "AI / Machine Learning",
    metrics: "AI Research Project",
    gradient: "from-accent/20 to-accent2/20",
    accentColor: "text-accent",
    github: "https://github.com/anuraggdubey/voice-forge",
    featured: true,
  },

  {
    id: 3,
    title: "Sweet Bites – E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for a cake and dessert shop with product browsing, user accounts, order management, and customizable cake ordering.",
    longDescription:
      "Sweet Bites is an online ordering platform designed for bakery shops. Customers can browse cakes, pastries, and snacks, create accounts, and place orders. The system includes admin functionality for managing products, prices, and order tracking.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Firebase"],
    category: "E-Commerce",
    metrics: "Full Stack Web App",
    gradient: "from-accent2/20 to-primary/20",
    accentColor: "text-accent2",
    github: "https://github.com/anuraggdubey/Sweet-Bites",
    featured: true,
  },

  {
    id: 4,
    title: "Blockchain Asset Registry (Stellar)",
    description:
      "A decentralized asset registry system built on the Stellar blockchain for secure digital asset ownership and transfer.",
    longDescription:
      "This project demonstrates how blockchain can be used to register and transfer ownership of digital assets. Using Stellar's blockchain network, assets can be issued, transferred, and verified securely without centralized control.",
    tech: ["Stellar Blockchain", "JavaScript", "Node.js", "Blockchain APIs"],
    category: "Blockchain / Web3",
    metrics: "Decentralized Prototype",
    gradient: "from-primary/15 to-accent/15",
    accentColor: "text-primary",
    github: "https://github.com/anuraggdubey/asset-registry",
    featured: true,
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative glass rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 ${hovered ? 'border-primary/20 shadow-float' : ''
        } ${project.featured ? 'md:col-span-2' : ''}`}
      style={{
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Featured banner */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs text-primary font-medium">
          Featured
        </div>
      )}

      <div className="relative p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`text-xs font-mono ${project.accentColor} mb-2 block`}>
              {project.category}
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-mono">
            {project.metrics}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
          {project.description}
        </p>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 pt-2 border-t border-border/50">
                {project.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground font-mono hover:text-foreground transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm ${project.accentColor} hover:opacity-80 transition-opacity font-medium`}
          >
            Live Demo
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {expanded ? 'Less ↑' : 'More ↓'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'SaaS Platform', 'FinTech', 'Developer Tools', 'DevOps / OSS', 'EdTech'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/3 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-primary" />
            <span className="text-primary text-sm font-mono tracking-widest uppercase">Work</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Selected <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-10">
            A showcase of production applications built with modern architectures and attention to craft.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-gradient-primary text-primary-foreground'
                  : 'glass border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/anuraggdubey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all duration-300 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View all projects on GitHub
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
