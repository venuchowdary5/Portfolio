import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Venu Medarametla. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="mailto:medarametlavenu7866@gmail.com"
            aria-label="Email"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-smooth"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/medarametla-venu-5b8333294"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-smooth"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/venuchowdary5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-smooth"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
