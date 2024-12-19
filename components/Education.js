import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      period: "Present",
      institution: "Gymnasium in NRW",
      course: "Secondary Education",
      details: "Currently pursuing secondary education while focusing on computer science and technology"
    },
    {
      period: "Since Age 8",
      institution: "Self-Learning",
      course: "Computer Science & Security",
      details: "Started with Ubuntu Linux at age 8, learned system administration and security fundamentals. Successfully performed first system penetration at age 11."
    },
    {
      period: "Since Age 12",
      institution: "Self-Learning",
      course: "Scripting and Programming",
      details: "Started with Python and Lua scripting at age 12, learned web development and programming fundamentals. Developed first web application at age 13."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Education Journey</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg"
                whileHover={{ x: 10 }}
              >
                <FaGraduationCap className="text-purple-400 text-3xl mb-4" />
                <span className="text-purple-400 text-sm">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{edu.institution}</h3>
                <h4 className="text-gray-400 mb-2">{edu.course}</h4>
                <p className="text-gray-300">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
