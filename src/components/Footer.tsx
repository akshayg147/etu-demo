const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-6">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-light text-foreground">
        ETU <span className="text-gold">Studio</span>
      </p>
      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} ETU Studio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
