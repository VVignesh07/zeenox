const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <span className="font-display text-xl font-bold gradient-text">Zeenox</span>
          <p className="mt-1 text-xs text-muted-foreground">Media · Technology · Automation</p>
        </div>
        <div className="flex gap-6">
          {["Services", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zeenox. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
