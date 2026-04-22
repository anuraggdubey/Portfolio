import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import mainPic from '../../../ss/Mainpic.jpeg';

const socials = [
  { label: 'Github', href: 'https://github.com/anuraggdubey', icon: Github },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/anurag-dubey-407435349', icon: Linkedin },
  { label: 'Email', href: 'mailto:dubeyanurag3925@gmail.com', icon: Mail },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="section-padding relative overflow-hidden !pb-7 !pt-28 sm:!pb-9 sm:!pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto w-full max-w-[560px]"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
          <img
            src={mainPic}
            alt="Anurag Dubey"
            className="h-30 w-30 rounded-[16px] object-cover shadow-[0_12px_36px_hsl(var(--foreground)/0.12)] sm:h-30 sm:w-28"
            draggable={false}
          />

          <div className="flex flex-wrap gap-2.5 sm:pb-1">
            <a
              href="https://drive.google.com/file/d/1hY62mOxSymGBSMIlieYwpjM5R99_RNgj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[8px] border border-border bg-secondary/50 px-3 py-1.5 font-sans text-[13px] font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Resume
              <FileText className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-[2px] border border-foreground/75 bg-background px-3 py-1.5 font-sans text-[13px] font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Say hello
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="font-sans text-[17px] font-semibold leading-6 tracking-normal text-foreground sm:text-[18px]">
            Anurag Dubey
          </h1>
          <p className="mt-0.5 font-sans text-[15px] font-normal leading-6 text-muted-foreground">
            20 y/o Web2 & Web3 Developer
          </p>
        </div>

        <p className="mt-8 max-w-[520px] font-sans text-[15px] font-normal leading-7 tracking-normal text-muted-foreground sm:text-[15px] sm:leading-7">
          Turning Web2 and Web3 ideas into products people
          can actually use.
        </p>

        <div className="mt-3 flex items-center gap-1.5 font-sans text-[14px] text-muted-foreground">
          <MapPin className="h-4 w-4" />
          Mumbai, India
        <p className="px-3 py-1.5 font-sans text-[13px] font-medium text-muted-foreground ">
        !! Open to work
        </p>
        </div>
        
        

        <div className="mt-7 flex flex-wrap gap-2.5">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1.5 font-sans text-[13px] font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Projects
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1.5 font-sans text-[13px] font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {social.label}
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
