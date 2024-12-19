import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaLinux, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiVite, SiSupabase, SiPrisma, SiLua } from 'react-icons/si';

export default function Skills() {
  const skills = [
    // BASIC STUFFFFF
    { icon: <FaHtml5 size={48} />, name: 'HTML5' },
    { icon: <FaCss3Alt size={48} />, name: 'CSS3' },
    { icon: <FaJs size={48} />, name: 'JavaScript' },
    { icon: <SiTypescript size={48} />, name: 'TypeScript' },
    
    // Frameworks
    { icon: <FaReact size={48} />, name: 'React & Native' },
    { icon: <SiNextdotjs size={48} />, name: 'Next.js' },

    // Backend
    { icon: <FaNodeJs size={48} />, name: 'Node.js' },
    { icon: <SiSupabase size={48} />, name: 'Supabase' },
    { icon: <SiPrisma size={48} />, name: 'Prisma' },

    // Languages
    { icon: <FaPython size={48} />, name: 'Python' },
    { icon: <SiLua size={48} />, name: 'Lua' },
    
    // DevOps & Cloud
    { icon: <FaDocker size={48} />, name: 'Docker' },
    { icon: <FaLinux size={48} />, name: 'Linux/Debian' },
    { icon: <FaGithub size={48} />, name: 'Git / GH' },
    //TODO: AzureDevOps is smth i should look into soon!
  ];

  return (
    <section id="skills" className="py-16 px-8 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            {skill.icon}
            <p className="mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}