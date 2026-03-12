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
      // Send via Web3Forms (A free service that sends form submissions to email)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Uses env variable securely
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
            <div className="w-12 h-[1px] bg-gradient-primary" />
            <span className="text-primary text-sm font-mono tracking-widest uppercase">Contact</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Let's build something{' '}
            <span className="text-gradient-primary">great together</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-xl mb-16"
          >
            I'm currently open to new opportunities, collaborations, and interesting projects.
            Don't hesitate to reach out.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl glass border ${errors.name ? 'border-destructive' : 'border-border'
                        } bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm`}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl glass border ${errors.email ? 'border-destructive' : 'border-border'
                        } bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm`}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project collaboration"
                    className="w-full px-4 py-3 rounded-xl glass border border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl glass border ${errors.message ? 'border-destructive' : 'border-border'
                      } bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none`}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-4 rounded-xl font-semibold relative overflow-hidden group disabled:opacity-70"
                >
                  <span className="absolute inset-0 bg-gradient-primary" />
                  <span className="relative text-primary-foreground flex items-center justify-center gap-2">
                    {status === 'idle' && (
                      <>
                        Send Message
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    )}
                    {status === 'sent' && (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </>
                    )}
                    {status === 'error' && 'Try Again'}
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Right: Info + GitHub stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact info */}
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'dubeyanurag3925@gmail.com', href: 'mailto:dubeyanurag3925@gmail.com' },
                  { icon: '🔗', label: 'LinkedIn', value: 'https://in.linkedin.com/in/anurag-dubey-407435349', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
                  { icon: '🐙', label: 'GitHub', value: 'github.com/anuraggdubey', href: 'https://github.com/anuraggdubey' },
                  { icon: '📍', label: 'Location', value: 'Mumbai, India', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center text-lg shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-foreground/80">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* GitHub Stats */}
              <div className="glass rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">@{githubStats.username}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Contributions', value: githubStats.contributions.toLocaleString() },
                    { label: 'Repositories', value: githubStats.repos },
                    { label: 'GitHub Stars', value: githubStats.stars.toLocaleString() },
                    { label: 'Followers', value: githubStats.followers },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-lg bg-secondary/60">
                      <div className="font-display font-bold text-xl text-gradient-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Language bar */}
                <div>
                  <div className="text-xs text-muted-foreground mb-2">Most used languages</div>
                  <div className="flex rounded-full overflow-hidden h-2 mb-3">
                    {githubStats.languages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                        title={`${lang.name}: ${lang.percent}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {githubStats.languages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span className="text-xs text-muted-foreground">{lang.name}</span>
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
