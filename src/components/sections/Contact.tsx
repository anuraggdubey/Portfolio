import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const githubStats = {
  username: 'anuraggdubey',
  contributions: 50,
  repos: 12,
  stars: 15,
  followers: 18,
  languages: [
    { name: 'JavaScript', percent: 40, color: '#f7df1e' },
    { name: 'TypeScript', percent: 18, color: '#3178c6' },
    { name: 'React', percent: 20, color: '#61dafb' },
    { name: 'Python', percent: 15, color: '#3776ab' },
    { name: 'HTML', percent: 14, color: '#e34f26' },
    { name: 'CSS', percent: 13, color: '#1572b6' },
  ],
};

const contactLinks = [
  { label: 'Email', value: 'dubeyanurag3925@gmail.com', href: 'mailto:dubeyanurag3925@gmail.com' },
  { label: 'LinkedIn', value: 'anurag-dubey', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
  { label: 'GitHub', value: '@anuraggdubey', href: 'https://github.com/anuraggdubey' },
  { label: 'X', value: '@anuraggdubeyy', href: 'https://x.com/anuraggdubeyy' },
  { label: 'Instagram', value: '@anuragdubeyyyy', href: 'https://instagram.com/anuragdubeyyyy' },
  { label: 'Location', value: 'Mumbai, India', href: null },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!formData.email.trim()) nextErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) nextErrors.message = 'Message is required';

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New message from portfolio',
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

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent2/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-shell-strong"
        >
          <div className="section-kicker">Contact</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Let&apos;s build something useful together
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            If you&apos;re hiring, collaborating, or discussing a project idea, send a message and I&apos;ll get back to you.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-shell"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className={`w-full rounded-2xl border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                    />
                    {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`w-full rounded-2xl border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                    />
                    {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-2xl border border-border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the project, role, or collaboration."
                    rows={6}
                    className={`w-full resize-none rounded-2xl border bg-background/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent ${
                      errors.message ? 'border-destructive' : 'border-border'
                    }`}
                  />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:opacity-60"
                >
                  {status === 'idle' && 'Send message'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && 'Message sent'}
                  {status === 'error' && 'Try again'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="section-shell">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Reach out
                </p>
                <div className="mt-5 space-y-4">
                  {contactLinks.map((item) => (
                    <div key={item.label} className="section-panel !rounded-[22px] !p-4">
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="mt-1 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-shell">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                      GitHub snapshot
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">@{githubStats.username}</h3>
                  </div>
                  <a
                    href={`https://github.com/${githubStats.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 hover:gap-3 hover:opacity-85"
                  >
                    View profile
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Contributions', value: githubStats.contributions.toLocaleString() },
                    { label: 'Repositories', value: githubStats.repos },
                    { label: 'Stars', value: githubStats.stars.toLocaleString() },
                    { label: 'Followers', value: githubStats.followers },
                  ].map((stat) => (
                    <div key={stat.label} className="section-panel !rounded-[22px] !p-4">
                      <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="mb-3 flex justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    <span>Language mix</span>
                    <span>Overview</span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-secondary">
                    {githubStats.languages.map((language) => (
                      <div
                        key={language.name}
                        style={{ width: `${language.percent}%`, backgroundColor: language.color }}
                        title={`${language.name}: ${language.percent}%`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {githubStats.languages.map((language) => (
                      <div key={language.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: language.color }} />
                        {language.name}
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
