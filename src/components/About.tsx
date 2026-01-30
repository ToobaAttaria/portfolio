import { Code, Smartphone, Server, Calendar, Award, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-16 relative mx-auto px-6  max-w-5xl">
      <div className="container ">

        <div className="flex items-center  justify-center mb-14">
          <h1 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-zinc-400">
            About Me
          </h1>
          {/* Two-color horizontal line */}

        </div>

        <div className="grid md:grid-cols-6 gap-12  items-center">

          <div className="md:col-span-2 flex flex-col relative">
            {/* Vertical Line */}
            <div className="absolute -left-5 top-0 h-full w-1 bg-zinc-700/50 rounded-full"></div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-[72px] relative">
              {/* First Item */}
              <div className="flex items-start gap-4 relative z-10">
                {/* Dot */}
                <div className="absolute -left-[22px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>

                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-700/20 flex items-center justify-center">
                  <Code className="text-accent" size={20} />
                </div>

                {/* Label */}
                <span className="text-zinc-400 text-lg font-medium mt-1">
                  Front-End Development
                </span>
              </div>

              {/* Second Item */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="absolute -left-[22px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-700/20 flex items-center justify-center">
                  <Server className="text-accent" size={20} />
                </div>

                <span className="text-zinc-400 text-lg font-medium mt-1">
                  Back-End Development
                </span>
              </div>

              {/* Third Item */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="absolute -left-[22px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-700/20 flex items-center justify-center">
                  <Server className="text-accent" size={20} />
                </div>

                <span className="text-zinc-400 text-lg font-medium mt-1">
                  Website Hosting
                </span>
              </div>
            </div>
          </div>


          {/* RIGHT SIDE: About Text + Stats */}
          <div className="md:col-span-4 space-y-8">


            {/* <div className="md:col-span-4 space-y-8"> */}
            <div className="md:col-span-4 relative">
              {/* About Text */}
              <div className="md:col-span-4 relative">
                {/* About Text */}
                <div className="space-y-6 text-justify relative">
                  <p className="text-zinc-400 leading-relaxed">
                    I am a <span className="text-accent font-semibold">Full Stack Developer</span> skilled in React, Next.js, and Supabase. I build clean, responsive web interfaces and connect them with efficient backend systems.
                    I specialize in creating interactive UI components, optimizing web performance, and ensuring responsive designs across all devices.
                  </p>

                  <p className="text-zinc-400 leading-relaxed">
                    I enjoy turning Figma designs into smooth, functional user experiences. My focus is on writing clean code and building applications that are both beautiful and performant.
                    Additionally, I handle backend integrations, API development, and deployment for scalable web applications.
                  </p>

                  <p className="text-zinc-400 leading-relaxed">
                    Currently, I work as a full-stack developer, collaborating on projects globally. I am <span className="text-accent font-semibold">Tooba Attaria</span> — a creator and passionate problem-solver on a mission to make a meaningful impact through technology.
                  </p>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
