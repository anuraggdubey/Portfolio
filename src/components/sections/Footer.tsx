const footerSocials = [
  { href: 'https://github.com/anuraggdubey', label: 'GitHub' },
  { href: 'https://in.linkedin.com/in/anurag-dubey-407435349', label: 'LinkedIn' },
  { href: 'https://x.com/anuraggdubeyy', label: 'X' },
  { href: 'https://instagram.com/anuragdubeyyyy', label: 'Instagram' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-[620px] px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-6">
      <div className="border-t border-border/70 pt-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div>
              <p className="text-xs font-semibold text-foreground">Anurag Dubey</p>
              <p className="mt-1 text-[10px] text-muted-foreground">
                20y/o Web2 & Web3 Dev
              </p>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-5 text-muted-foreground">
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-2">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground">
              &copy; {currentYear} Anurag Dubey. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
