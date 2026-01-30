import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [

  {
    title: 'Ludo Game',
    description: 'Interactive Ludo game with turn-based logic and multiple players using JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://toobaattaria.github.io/jsProjects/ludo/',
    image: '/project1.png',
  },
  {
    title: 'Simon Game',
    description: 'Memory-based Simon game with sound and color sequence logic.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://toobaattaria.github.io/jsProjects/simonGame/',
    image: '/project2.png',
  },
  {
    title: 'Portfolio Landing Page',
    description: 'Clean portfolio landing page focusing on layout, typography, and UI structure.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://toobaattaria.github.io/landingpages/portfolio-landing-page/',
    image: '/project3.png',
  },
  {
    title: 'Expense Tracker',
    description: 'React-based expense tracker with real-time balance and transaction history.',
    tech: ['HTML', 'CSS', , 'React'],
    link: 'https://toobaattaria.github.io/expencetraker/',
    image: '/project4.png',
  },
  {
    title: 'Text Preprocessing Tool (NLP)',
    description: 'React application for text preprocessing including tokenization and stop-word removal.',
    tech: ['HTML', 'CSS', 'React'],
    link: 'https://toobaattaria.github.io/NLP-/',
    image: '/project5.png',
  },
  {
    title: 'Event Management',
    description: 'Hackathon project showcasing frontend and backend integration.',
    tech: ['HTML', 'CSS', 'React', 'Firebase'],
    link: 'https://midhackathon-f5752.web.app/',
    image: '/project6.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-16 bg-black">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-14 text-center">
          <h1 className="text-xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-zinc-400">
            My Projects
          </h1>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-accent transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[220px] overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
      group-hover:scale-105
      transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>




              {/* Content */}
              <div className="p-6 flex flex-col h-[50%]">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
               border border-zinc-600 
               text-white bg-zinc-800
               hover:bg-accent hover:text-black
               transition-all duration-300"
                  >
                    <ExternalLink size={18} strokeWidth={2} />
                  </a>
                </div>


                {/* Live Link */}


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
