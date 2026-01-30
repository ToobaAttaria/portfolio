import { Mail, Github, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-16 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title */}
        
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-14 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-zinc-400">
           Get In Touch
          </h1>

        </div>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Contact Button */}
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-10 mb-12">
            <a href="mailto:toobaattaria26@gmail.com" className="flex items-center gap-2">
              Say Hello
              <ArrowUpRight size={18} />
            </a>
          </Button>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:toobaattaria26@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Mail size={18} className="text-accent" />
              </div>
              <span className="text-sm">toobaattaria26@gmail.com</span>
            </a>
            
            <a
              href="https://github.com/ToobaAttaria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Github size={18} className="text-accent" />
              </div>
              <span className="text-sm">ToobaAttaria</span>
            </a>
            
            <a
              href="tel:+923041915415"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Phone size={18} className="text-accent" />
              </div>
              <span className="text-sm">+92 304 1915415</span>
            </a>
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default Contact;
