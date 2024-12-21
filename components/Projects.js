import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Herbert 👀",
      description: "Mental health resources and AI chatbot",
      image: "/project1.png",
      tags: ["React", "Next.js", "TailwindCSS", "OpenAI"],
      demoLink: "https://crisis.deployor.dev/",
      githubLink: "https://github.com/deployor/ai-Crisis",
      featured: true
    },
    {
      title: "📊 Poll App",
      description: "Poll app made for Hackclub with DB entierly on supabase! So u dont have the hassle of phpmyadmin and more! :)",
      image: "/project3.png",
      tags: ["React", "Next.js", "TailwindCSS", "Supabase"],
      demoLink: "https://poll.deployor.dev/",
      githubLink: "https://github.com/deployor/poll-app/",
      featured: true
    },
    {
      title: "Club SignUP 📶",
      description: "Manage club signups with Supabase 👀",
      image: "/project4.png",
      tags: ["React", "Next.js", "TailwindCSS", "Supabase"],
      demoLink: "https://club-signup-demo.onrender.com/",
      githubLink: "https://github.com/deployor/club-signup/",
      featured: false
    },
    {
      title: "🤔 Emoji Guess",
      description: "Challenge Your Emoji Smarts! 🧩",
      image: "/project2.png",
      tags: ["React", "Next.js", "TailwindCSS"],
      demoLink: "https://emoji.deployor.dev/",
      githubLink: "https://github.com/deployor/emoji-guess",
      featured: false
    },
    
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 bg-purple-500 text-white text-sm rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-sm text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.demoLink} className="btn-primary">Live Demo</a>
                  <a href={project.githubLink} className="btn-secondary">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}