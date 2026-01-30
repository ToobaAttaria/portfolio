import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';

import { SiSupabase } from "react-icons/si";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPostgresql, SiOpenai } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={45} color="#61dafb" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={45} color="#fff" /> },
  { name: 'Node.js', icon: <FaNodeJs size={45} color="#68a063" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={45} color="#38B2AC" /> },
  { name: 'Supabase',icon: <SiSupabase size={45} color="#3ECF8E" />},
  { name: 'Express', icon: <SiExpress size={45} color="#fff" /> },
  // { name: 'PostgreSQL', icon: <SiPostgresql size={45} color="#336791" /> },
  { name: 'MongoDB', icon: <SiMongodb size={45} color="#4DB33D" /> },
  { name: 'Docker', icon: <FaDocker size={45} color="#2496ed" /> },
  // { name: 'Python', icon: <FaPython size={45} color="#FFD43B" /> },
  { name: 'GitLab', icon: <FaGitAlt size={45} color="#FC6D26" /> },
  { name: 'OpenAI', icon: <SiOpenai size={45} color="#00ffa3" /> },
  // { name: 'AWS', icon: <FaAws size={45} color="#FF9900" /> },

];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-16 relative">
      <div className="container mx-auto px-6 relative z-10 ">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mb-14 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-zinc-400">
            My Toolkit
          </h1>

          <p className="text-gray-400 mt-2 text-lg max-w-xl">
            The technologies I use to build modern web experiences.
          </p>
        </div>


        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 flex flex-col items-center justify-center hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-3">{skill.icon}</div>
              <span className="text-white font-semibold text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
