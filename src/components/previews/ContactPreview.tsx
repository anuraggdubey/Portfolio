import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const socials = [
  { label: 'Email', href: 'mailto:dubeyanurag3925@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/anuraggdubey' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349' },
  { label: 'X', href: 'https://x.com/anuraggdubeyy' },
];

const ContactPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border/60 bg-card/50 p-5 text-center backdrop-blur sm:rounded-[28px] sm:p-10">
            <div className="section-kicker justify-center">Say hello</div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Let&apos;s grab a virtual coffee ☕
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[13px] leading-7 text-muted-foreground sm:text-sm">
              Got an idea, a role, or just want to say hey? I&apos;m always up for a good conversation.
            </p>

            {/* Social pills */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/30"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
            >
              Send a message <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;
