import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS', 'HTML, CSS, JS...'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'Deno'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Azure', 'more'] }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.img
              src="/LogoB.png"
              alt="About Me"
              className="rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              Passionate fullstack developer with 5+ years of experience building scalable web applications. 
              Specialized in React and Next.js ecosystem.
            </p>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}