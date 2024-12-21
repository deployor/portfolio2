import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: "BloClimb",
      role: "Game Development & Staff Managment",
      text: "Tom / Deployor has always been of great help towards me and our community, he has programmed and directed the making of multiple discord bots for our community, other public relations purposes and a moral supporter. I thank him for long time help towards me and on behalf of our community.",
      company: "BloClimb Chairman"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What People Say</h2>
          <div className="flex justify-center">
            <motion.div
              className="bg-gray-800 p-8 rounded-lg w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <FaQuoteLeft className="text-purple-400 text-3xl mb-6" />
              <p className="text-gray-300 mb-6 text-lg">{testimonials[0].text}</p>
              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-white font-bold text-xl">{testimonials[0].name}</h3>
                <p className="text-purple-400">{testimonials[0].role}</p>
                <p className="text-gray-400">{testimonials[0].company}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
