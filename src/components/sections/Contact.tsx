import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const githubStats = {
  username: 'anuraggdubey',
  contributions: 50,
  repos: 12,
  stars: 15,
  followers: 18,
  languages: [
    { name: 'JavaScript', percent: 40, color: '#F7DF1E' },
    { name: 'TypeScript', percent: 18, color: '#3178C6' },
    { name: 'react', percent: 20, color: '#61DAFB' },
    { name: 'Python', percent: 15, color: '#3776AB' },
    { name: 'HTML', percent: 14, color: '#E34F26' },
    { name: 'CSS', percent: 13, color: '#1572B6' },
  ],
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/4 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary glow-primary" />
            <span className="text-primary text-xs font-mono tracking-widest uppercase">06 // Comms_Link</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase"
          >
            Establish <span className="text-primary text-shadow-glow">Connection</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-xl mb-16 font-mono text-sm leading-relaxed"
          >
            &gt; Initializing encrypted channel...<br/>
            &gt; Standby for neural uplink...<br/>
            &gt; Ready to process incoming directives and collaborative requests.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-primary mb-2 block">&gt; Origin_Identify</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="NAME"
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-destructive' : 'border-primary/20'} bg-background/40 text-foreground font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:glow-primary transition-all text-sm uppercase`}
                    />
                    {errors.name && <p className="text-[10px] font-mono text-destructive mt-1 uppercase tracking-tighter">! {errors.name}</p>}
                  </div>
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-primary mb-2 block">&gt; Signal_Source</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="EMAIL@DOMAIN.COM"
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-destructive' : 'border-primary/20'} bg-background/40 text-foreground font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:glow-primary transition-all text-sm uppercase`}
                    />
                    {errors.email && <p className="text-[10px] font-mono text-destructive mt-1 uppercase tracking-tighter">! {errors.email}</p>}
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-primary mb-2 block">&gt; Subject_Header</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="COLLABORATION_QUERY"
                    className="w-full px-4 py-3 border border-primary/20 bg-background/40 text-foreground font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:glow-primary transition-all text-sm uppercase"
                  />
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-primary mb-2 block">&gt; Data_Payload</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="ENTER_MESSAGE_BODY_HERE..."
                    rows={6}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-destructive' : 'border-primary/20'} bg-background/40 text-foreground font-mono placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary focus:glow-primary transition-all text-sm resize-none uppercase`}
                  />
                  {errors.message && <p className="text-[10px] font-mono text-destructive mt-1 uppercase tracking-tighter">! {errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-5 border border-primary bg-primary/10 text-primary font-mono font-bold uppercase tracking-[0.2em] relative overflow-hidden group disabled:opacity-50 glow-primary"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'idle' && (
                      <>
                        <span className="w-2 h-2 bg-primary animate-pulse" />
                        INIT_TRANSMISSION
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        ENCRYPTING...
                      </>
                    )}
                    {status === 'sent' && (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        SUCCESS_UPLINKED
                      </>
                    )}
                    {status === 'error' && 'FAIL_RETRY'}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </form>
            </motion.div>

            {/* Right: Info + GitHub stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact info */}
              <div className="space-y-4">
                  { [
                    { icon: '📧', label: 'NEURAL_MAIL', value: 'dubeyanurag3925@gmail.com', href: 'mailto:dubeyanurag3925@gmail.com' },
                    { icon: '🔗', label: 'PROFESSIONAL_FEED', value: 'anurag-dubey', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
                    { icon: '🐙', label: 'SOURCE_NEXUS', value: '@anuraggdubey', href: 'https://github.com/anuraggdubey' },
                    { icon: '📍', label: 'BASE_COORDINATES', value: 'Mumbai, India', href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-5 group">
                      <span className="w-10 h-10 border border-primary/30 bg-primary/5 flex items-center justify-center text-lg shrink-0 group-hover:border-primary group-hover:glow-primary transition-all">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-[10px] uppercase font-mono tracking-widest text-primary/60">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-mono text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                            &gt; {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-mono text-foreground/80">&gt; {item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {/* GitHub Stats */}
              <div className="cyber-panel p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <svg className="w-6 h-6 text-primary animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-xs font-mono font-bold text-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">@{githubStats.username} // EXTERNAL_DATA_NODE</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  {[
                    { label: 'TRANS_TOTAL', value: githubStats.contributions.toLocaleString() },
                    { label: 'NODES_ACTIVE', value: githubStats.repos },
                    { label: 'REP_STARS', value: githubStats.stars.toLocaleString() },
                    { label: 'SUBSCRIBERS', value: githubStats.followers },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 border border-primary/10 bg-primary/5 hover:border-primary/40 transition-all text-center">
                      <div className="font-mono font-bold text-2xl text-primary text-shadow-glow">{stat.value}</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Language bar */}
                <div className="relative z-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3 flex justify-between">
                    <span>SYNTAX_ALLOCATION</span>
                    <span className="text-primary animate-pulse">LIVE</span>
                  </div>
                  <div className="flex bg-primary/10 h-[2px] mb-4 relative overflow-hidden">
                    {githubStats.languages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                        title={`${lang.name}: ${lang.percent}%`}
                        className="h-full shadow-[0_0_8px_currentColor]"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {githubStats.languages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: lang.color, boxShadow: `0 0 5px ${lang.color}` }} />
                        <span className="text-[10px] font-mono uppercase tracking-tighter text-muted-foreground">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
