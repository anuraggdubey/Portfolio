const footerSocials = [
  { href: 'https://github.com/anuraggdubey', label: 'GitHub' },
  { href: 'https://in.linkedin.com/in/anurag-dubey-407435349', label: 'LinkedIn' },
  { href: 'https://x.com/anuraggdubeyy', label: 'X' },
  { href: 'https://instagram.com/anuragdubeyyyy', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[24px] border border-border/80 bg-card/70 px-4 py-6 shadow-[0_18px_50px_hsl(var(--foreground)/0.06)] backdrop-blur sm:rounded-[30px] sm:px-6 sm:py-8 md:rounded-[36px] md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                AD
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Anurag Dubey</p>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  Full-stack developer portfolio
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              Focused on building clean web products, improving steadily, and presenting work with more clarity.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <div className="flex flex-wrap gap-4">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-background/75 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Anurag Dubey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
