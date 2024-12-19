import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

export default function Certifications() {
  const certs = [
    {
      title: "Cyber Threat Intelligence 101",
      platform: "arcX",
      date: "2023",
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
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certification</h2>
          <div className="flex justify-center">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg max-w-md w-full"
              whileHover={{ y: -10 }}
            >
              <FaMedal className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{certs[0].title}</h3>
              <p className="text-purple-400 mb-2">{certs[0].platform}</p>
              <p className="text-gray-400 mb-4">{certs[0].date}</p>
              <div className="flex flex-wrap gap-2">
                {certs[0].skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
