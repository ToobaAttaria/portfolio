import { Github, Mail, Heart,Phone,Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div
              className="flex items-center justify-center md:justify-start gap-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://github.com/ToobaAttaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>

              <a
                href="mailto:toobaattaria26@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>

              <a
                href="tel:+923041915415"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Phone"
              >
                <Phone size={22} />
              </a>
            </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            Built with <Heart size={14} className="text-accent" /> by Tooba Attaria
          </p>
          
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
