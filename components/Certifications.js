import {motion} from 'framer-motion';
import {FaMedal, FaServer, FaShieldAlt} from 'react-icons/fa';

export default function Certifications() {
  const certs = [
    {
      title: "Cyber Threat Intelligence 101",
      platform: "arcX",
      date: "2023",
        icon: <FaShieldAlt className="text-purple-400 text-4xl mb-4"/>,
      skills: ["Threat Intelligence", "Cybersecurity", "Security Analysis"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
                <FaMedal className="inline-block mr-4 text-purple-400"/>
                Certifications
            </h2>
            <div className="grid gap-8 max-w-4xl mx-auto">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg"
                        whileHover={{y: -10}}
                    >
                        {cert.icon}
                        <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                        <div className="flex items-center gap-2 text-purple-400 mb-2">
                            <FaServer className="text-sm"/>
                            <p>{cert.platform}</p>
                        </div>
                        <p className="text-gray-400 mb-4">{cert.date}</p>
                        <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-200 hover:bg-purple-800 transition-colors"
                                >
                      {skill}
                    </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
