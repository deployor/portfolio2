import {useState} from 'react';
import {motion} from 'framer-motion';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    'Fullstack Developer', 
    'UI/UX Enthusiast', 
    'Problem Solver',
    'Tech Innovator'
  ];

  return (
    <section className="min-h-screen relative bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 pt-16 md:pt-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <motion.img
          src="https://gravatar.com/avatar/60592cf08710dae04973a1c04afdb40f?size=512"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-8 border-4 border-purple-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-purple-400">Tom Daamen</span>
          </h1>
          <h2 className="text-2xl text-gray-300 mb-6">{roles[textIndex]}</h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="https://read.cv/deployor"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
            >
              Get CV
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">17+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
