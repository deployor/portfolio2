import { motion } from 'framer-motion';
import { FaGithub, FaDiscord} from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header
      className="fixed w-full top-0 bg-gray-900 p-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <nav>
        <ul className="flex justify-center space-x-8 text-white">
          <li><a href="#hero" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        </ul>
      </nav>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/deployor" className="text-white hover:text-teal-400">
          <FaGithub size={24} />
        </a>
        <a href="https://discord.com/users/996096794062761985/" className="text-white hover:text-teal-400">
          <FaDiscord size={24} />
        </a>
      </div>
    </motion.header>
  );
}