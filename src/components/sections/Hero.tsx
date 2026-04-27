import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mainPic from '../../../ss/Mainpic.jpeg';

const socials = [
  { label: 'Github', href: 'https://github.com/anuraggdubey', icon: Github },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349', icon: Linkedin },
  { label: 'X / Twitter', href: 'https://x.com/anuraggdubeyy', icon: Twitter },
  { label: 'Email', href: 'mailto:dubeyanurag3925@gmail.com', icon: Mail },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="section-padding relative overflow-hidden !pb-2 !pt-24 sm:!pb-3 sm:!pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto w-full max-w-[560px]"
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <img
            src={mainPic}
            alt="Anurag Dubey"
            className="h-20 w-18 shrink-0 rounded-[14px] object-cover shadow-[0_8px_24px_hsl(var(--foreground)/0.1)] sm:h-24 sm:w-22"
            draggable={false}
          />

          <div className="min-w-0 pt-1 sm:pt-2">
            <h1 className="font-sans text-[15px] font-semibold leading-5 tracking-normal text-foreground sm:text-[16px]">
              Anurag Dubey
            </h1>
            <p className="mt-0.5 font-sans text-[13px] font-normal leading-5 text-muted-foreground">
              20 y/o Web2 & Web3 Developer
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://drive.google.com/file/d/15vw1VwvLz4AZ2GKhmnv885zM9AQvhjRn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[6px] border border-border bg-secondary/50 px-2.5 py-1 font-sans text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Resume
                <FileText className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="rounded-[6px] border border-foreground/75 bg-background px-2.5 py-1 font-sans text-[11px] font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Say hello
              </button>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-[520px] font-sans text-[13px] font-normal leading-6 tracking-normal text-muted-foreground">
          Turning Web2 and Web3 ideas into products people
          can actually use.
        </p>

        <div className="mt-2 flex items-center gap-1.5 font-sans text-[12px] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          Mumbai, India
          <p className="px-2 py-1 font-sans text-[11px] font-medium text-muted-foreground">
            !! Open to work
          </p>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-2.5 py-1 font-sans text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Projects
            <ExternalLink className="h-3.5 w-3.5" />
          </button>

          <div className="mx-1 h-5 w-px bg-border" />

          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground hover:shadow-[0_2px_8px_hsl(var(--foreground)/0.08)]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
