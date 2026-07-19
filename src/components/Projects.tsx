import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  // ==========================
  // AI / Full Stack Projects
  // ==========================

  {
    title: "AI Support Chatbot",
    description:
      "A production-ready AI chatbot with secure authentication, persistent chat history, Google Gemini integration, document-based conversations, and a modern responsive UI.",
    tech: [
      "Tailwind CSS",
      "Next.js",
      "Python",
      "Supabase",
      "PostgreSQL",
      "SQLAlchemy",
      "Google Gemini API",
      "JWT Authentication",
    ],
    link: "https://github.com/ToobaAttaria/AI_Chatbot",
    image: "/AI_Chatbot.png",
  },

  {
    title: "Expense Tracker (Full Stack)",
    description:
      "A full-stack expense management application featuring authentication, income & expense tracking, dashboard analytics, secure backend APIs, and Supabase database integration.",
    tech: [
      "Tailwind CSS",
      "React",
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      
    ],
    link: "https://expence-tracker-python.vercel.app/",
    image: "/Expence.png",
  },

  {
    title: "Event Management System",
    description:
      "Hackathon project with user authentication, event registration, Firebase database, responsive interface, and real-time data synchronization.",
    tech: [
      "Bootstrap",
      "React",
      "Firebase",
        "REST API",
      "Responsive Design"
    ],
    link: "https://midhackathon-f5752.web.app/",
    image: "/event.png",
  },

  {
    title: "Mobile Application",
    description:
      "Cross-platform mobile application with authentication, cloud database, image storage, and responsive mobile UI built using React Native.",
    tech: [
      "React Native",
      "Expo",
      "Appwrite",
      "Cloud Storage",
      "REST API"
    ],
    link: "https://github.com/TOOBA-ATTARIA/BookingApp",
    image: "/mobile.png",
  },

  // ==========================
  // React Projects
  // ==========================

  {
    title: "Text Preprocessing Tool",
    description:
      "Natural Language Processing interface for text cleaning, tokenization, stop-word removal, stemming, and preprocessing visualization.",
    tech: [
      "CSS",
      "React",
      "JavaScript",
      "Responsive Design"
    ],
    link: "https://toobaattaria.github.io/NLP-/",
    image: "/nlp.png",
  },
  
  {
    title: "Ludo Game",
    description:
      "Interactive multiplayer Ludo game featuring turn management, dice rolling, and game logic.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    link: "https://toobaattaria.github.io/jsProjects/ludo/",
    image: "/ludo.png",
  },

  {
    title: "Simon Game",
    description:
      "Classic Simon memory game with animations, audio feedback, and increasing difficulty levels.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript"

    ],
    link: "https://toobaattaria.github.io/jsProjects/simonGame/",
    image: "/simon.png",
  },

  // ==========================
  // Landing Pages
  // ==========================

  // {
  //   title: "Freelancer Portfolio Landing Page",
  //   description:
  //     "Modern freelancer portfolio landing page with responsive layout, animations, and clean UI design.",
  //   tech: [
  //     "HTML5",
  //     "CSS3",
  //     "Responsive Design"
  //   ],
  //   link: "https://toobaattaria.github.io/landingpages/Freelancer-Portfolio-Landing-Page/",
  //   image: "/portfolio.png",
  // },


  {
    title: "Portfolio Landing Page",
    description:
      "Professional portfolio landing page focusing on typography, responsiveness, and modern UI.",
    tech: [
      "HTML5",
      "CSS3",
      "Responsive Design",
     
    ],
    link: "https://toobaattaria.github.io/landingpages/portfolio-landing-page/",
    image: "/portfolio_clone.png",
  },

  {
    title: "UX Portfolio Landing Page",
    description:
      "User experience focused portfolio landing page with responsive sections and elegant visual hierarchy.",
    tech: [
      "HTML5",
      "CSS3",
      "UI Design",
      "Responsive Design"
    ],
    link: "https://toobaattaria.github.io/landingpages/ux-portfolio-landing/",
    image: "/portfolio_SJ.png",
  },

  {
    title: "Project Management Landing Page",
    description:
      "Marketing landing page for a SaaS project management product featuring responsive layouts and modern UI sections.",
    tech: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Landing Page Design"
    ],
    link: "https://toobaattaria.github.io/landingpages/project-management-software-landing-page/",
    image: "/whitespace.png",
  },

  // ==========================
  // JavaScript Projects
  // ==========================

];
const INITIAL_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

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
          {visibleProjects.map((project) => (
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
                  {project.link ? (
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
                  ) : (
                    <span className="text-xs px-3 py-2 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
                      Coming soon
                    </span>
                  )}
                </div>


                {/* Live Link */}


              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border border-accent text-accent font-medium
                hover:bg-accent hover:text-black transition-all duration-300"
            >
              {showAll ? 'Show Less' : `Show More (${projects.length - INITIAL_COUNT} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
