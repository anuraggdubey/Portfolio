import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Send, MapPin } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/anuraggdubey', label: 'GitHub', color: 'hover:text-foreground' },
  { icon: Linkedin, href: 'https://in.linkedin.com/in/anurag-dubey-407435349', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  { icon: Twitter, href: 'https://x.com/anuraggdubeyy', label: 'X / Twitter', color: 'hover:text-foreground' },
  { icon: Instagram, href: 'https://instagram.com/anuragdubeyyyy', label: 'Instagram', color: 'hover:text-[#E4405F]' },
  { icon: Mail, href: 'mailto:dubeyanurag3925@gmail.com', label: 'Email', color: 'hover:text-accent' },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Required';
    if (!formData.email.trim()) e.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name, email: formData.email,
          subject: 'New message from portfolio',
          message: formData.message,
        }),
      });
      const r = await res.json();
      if (r.success) { setStatus('sent'); setFormData({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
    setTimeout(() => setStatus('idle'), 4000);
  };

  const fieldBase =
    'w-full rounded-xl border border-transparent bg-foreground/[0.04] px-3.5 py-2.5 text-[13px] text-foreground placeholder:text-muted-foreground/50 outline-none ring-1 ring-foreground/[0.06] transition-all duration-300 focus:bg-foreground/[0.06] focus:ring-accent/40 dark:bg-white/[0.04] dark:ring-white/[0.06] dark:focus:bg-white/[0.06] dark:focus:ring-accent/30';

  return (
    <section id="contact" className="section-padding relative overflow-hidden !max-w-[680px]">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />

      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="section-kicker">Say hello</div>
          <h2
            className="mt-3 text-[20px] font-bold leading-7 tracking-[-0.03em] text-foreground sm:text-[24px] sm:leading-8"
            style={displayStyle}
          >
            Let's build something meaningful
          </h2>
          <p className="mt-2 max-w-md text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
            Got an idea, a collaboration, or just want to say hey — I'm all ears.
          </p>
        </motion.div>

        {/* 2-col: form left, socials right */}
        <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-[1fr_auto] sm:gap-10">

          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3.5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Name"
                  className={`${fieldBase} ${errors.name ? '!ring-destructive/50' : ''}`}
                />
                {errors.name && <p className="mt-1 text-[10px] text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  className={`${fieldBase} ${errors.email ? '!ring-destructive/50' : ''}`}
                />
                {errors.email && <p className="mt-1 text-[10px] text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={4}
                className={`${fieldBase} resize-none ${errors.message ? '!ring-destructive/50' : ''}`}
              />
              {errors.message && <p className="mt-1 text-[10px] text-destructive">{errors.message}</p>}
            </div>

            {/* CTA button */}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-[12px] font-semibold text-background shadow-[0_8px_24px_hsl(var(--foreground)/0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(var(--foreground)/0.18)] disabled:opacity-50 sm:text-[13px]"
            >
              {status === 'idle' && (
                <>
                  Send message
                  <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </>
              )}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent ✓'}
              {status === 'error' && 'Try again'}
            </button>
          </motion.form>

          {/* ── Socials ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-row flex-wrap gap-3 sm:flex-col sm:items-start sm:gap-2 sm:pt-1"
          >
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.06 }}
                  className={`group flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/[0.08] hover:shadow-[0_6px_20px_hsl(var(--foreground)/0.08)] hover:ring-accent/25 dark:bg-white/[0.04] dark:ring-white/[0.06] dark:hover:bg-white/[0.08] ${s.color}`}
                >
                  <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}

            {/* Location tag */}
            <div className="flex items-center gap-1.5 pl-1 pt-1 text-[10px] text-muted-foreground/50 sm:pt-2">
              <MapPin className="h-3 w-3" />
              Mumbai, India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
