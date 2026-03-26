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
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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

  const inputCls =
    'w-full rounded-xl border bg-background/75 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent sm:rounded-xl sm:px-3.5 sm:py-2.5';

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="hero-orb absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent2/10" />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="sm:section-shell-strong"
        >
          <div className="section-kicker">Say hello</div>
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="sm:hidden">Meet Anurag ☕</span>
            <span className="hidden sm:inline">Let&apos;s grab a virtual coffee ☕</span>
          </h2>
          <p className="hidden mt-2 max-w-2xl text-sm leading-7 text-muted-foreground sm:block">
            Got an idea, a role, or just want to say hey? I&apos;m always up for a good conversation.
          </p>

          {/* ─── Mobile: quick links row ─── */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 hide-scrollbar sm:hidden">
            {contactLinks.filter((l) => l.href).map((link) => (
              <a
                key={link.label}
                href={link.href!}
                target={link.href!.startsWith('http') ? '_blank' : undefined}
                rel={link.href!.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex-shrink-0 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/30"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ─── 2-column layout ─── */}
          <div className="mt-5 grid gap-6 sm:mt-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">

            {/* ─── Left: Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sm:self-start sm:rounded-2xl sm:border sm:border-border/60 sm:bg-card/50 sm:p-5 sm:backdrop-blur"
            >
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className={`${inputCls} ${errors.name ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`${inputCls} ${errors.email ? 'border-destructive' : 'border-border'}`}
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Topic of discussion"
                    className={`${inputCls} border-border`}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project."
                    rows={4}
                    className={`${inputCls} resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 disabled:opacity-60 sm:text-sm"
                >
                  {status === 'idle' && 'Send message'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && 'Message sent ✓'}
                  {status === 'error' && 'Try again'}
                </button>
              </form>
            </motion.div>

            {/* ─── Right: Sidebar ─── */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 sm:space-y-4"
            >
              {/* Contact links — hidden mobile, compact table on sm+ */}
              <div className="hidden sm:block sm:rounded-2xl sm:border sm:border-border/60 sm:bg-card/50 sm:p-4 sm:backdrop-blur">
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  Reach out
                </p>
                <div className="space-y-0 divide-y divide-border/50">
                  {contactLinks.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
                      <span className="text-xs font-medium text-foreground">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="truncate text-xs text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub snapshot — compact */}
              <div className="rounded-[18px] border border-border/80 bg-card/70 p-4 backdrop-blur sm:rounded-2xl sm:border-border/60 sm:bg-card/50 sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                      GitHub
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground sm:text-base">@{githubStats.username}</h3>
                  </div>
                  <a
                    href={`https://github.com/${githubStats.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-all duration-300 hover:gap-2"
                  >
                    <span className="sm:hidden">Profile</span>
                    <span className="hidden sm:inline">View</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Stats — 4-col inline */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    { label: 'Contribs', value: githubStats.contributions },
                    { label: 'Repos', value: githubStats.repos },
                    { label: 'Stars', value: githubStats.stars },
                    { label: 'Followers', value: githubStats.followers },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-border/50 bg-background/60 p-2 text-center">
                      <div className="text-sm font-semibold text-foreground sm:text-base">{stat.value}</div>
                      <div className="text-[9px] text-muted-foreground sm:text-[10px]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Language bar */}
                <div className="mt-3">
                  <div className="flex h-1.5 overflow-hidden rounded-full bg-secondary">
                    {githubStats.languages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                        title={`${lang.name}: ${lang.percent}%`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {githubStats.languages.map((lang) => (
                      <div key={lang.name} className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-[11px]">
                        <span className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2" style={{ backgroundColor: lang.color }} />
                        {lang.name}
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
