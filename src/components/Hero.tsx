import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

          {/* LEFT SIDE — TEXT CONTENT */}
          <div className="text-center md:text-left ">
            <p
              className="text-accent font-mono text-sm md:text-base mb-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, my name is
            </p>

            <h1
              className="text-5xl md:text-6xl lg:text-5xl font-bold mb-4 animate-fade-in opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Tooba Attaria
            </h1>

            <h2
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="text-gradient">Full Stack Developer</span>
            </h2>

            <p
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed animate-fade-in opacity-0 text-justify"
              style={{ animationDelay: "0.4s" }}
            >
              I build clean, responsive web interfaces and connect them with
              efficient backend systems. Passionate about creating modern web
              applications and turning designs into smooth, functional
              experiences.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12 animate-fade-in opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="/TOOBAATTARIA.pdf" download>
                  Download CV
                </a>
              </Button>


              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8"
              >
                <a href="#contact">Contact Now</a>
              </Button>
            </div>

            {/* SOCIAL LINKS */}

          </div>

          {/* RIGHT SIDE — PROFILE IMAGE */}
          <div
            className="flex justify-center md:justify-end animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              {/* IMAGE */}
              <img
                src="img7.png"
                alt="Tooba Attaria"
                className="w-64 h-64 md:w-80 md:h-80 object-cover border border-transparent shadow-lg rounded-lg"
              />

              {/* TOP-LEFT HIGHLIGHT */}
              {/* TOP-LEFT HIGHLIGHT */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-accent rounded-tl-lg"></div>

              {/* BOTTOM-RIGHT HIGHLIGHT */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-accent rounded-br-lg"></div>

            </div>
          </div>

        </div>

        
      </div>
    </section>
  );
};

export default Hero;
