import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/anuraggdubey', label: 'GitHub' },
  { icon: Linkedin, href: 'https://in.linkedin.com/in/anurag-dubey-407435349', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/anuraggdubeyy', label: 'X' },
  { icon: Instagram, href: 'https://instagram.com/anuragdubeyyyy', label: 'Instagram' },
  { icon: Mail, href: 'mailto:dubeyanurag3925@gmail.com', label: 'Email' },
];

const ContactPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();
  const displayStyle = { fontFamily: "'Space Grotesk', var(--font-display)" };

  return (
    <section id="contact" className="section-padding relative overflow-hidden !py-6 sm:!py-8 md:!py-10">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="section-kicker justify-center">Say hello</div>
          <h2
            className="mt-3 text-[18px] font-bold leading-6 tracking-[-0.03em] text-foreground sm:text-[20px]"
            style={displayStyle}
          >
            Let's build something meaningful
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-[11px] leading-relaxed text-muted-foreground sm:text-[12px]">
            Got an idea or just want to say hey — I'm all ears.
          </p>

          {/* Social icons */}
          <div className="mt-5 flex items-center justify-center gap-2.5 sm:mt-6">
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
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  className="group flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/[0.04] ring-1 ring-foreground/[0.06] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/[0.08] hover:text-foreground hover:shadow-[0_4px_14px_hsl(var(--foreground)/0.08)] hover:ring-accent/25 dark:bg-white/[0.04] dark:ring-white/[0.06]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('/contact')}
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold text-background shadow-[0_6px_20px_hsl(var(--foreground)/0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_hsl(var(--foreground)/0.16)] sm:text-[12px]"
          >
            Send a message
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
