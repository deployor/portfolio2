import {motion} from 'framer-motion';
import {FaArrowRight, FaAward, FaBookOpen} from 'react-icons/fa';
import Link from 'next/link';

export default function Awards() {
    const awards = [
        {
            title: "Lyrix Poetry Winner January 2024",
            description: "Click to read my poem",
            link: "/awards/lyrix-poem",
            icon: <FaBookOpen className="text-purple-400 text-4xl mb-4"/>,
            tags: ["Poetry", "German", "Award"]
        }
        // Add more awards here in the future
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        <FaAward className="inline-block mr-4 text-purple-400"/>
                        Awards & Achievements
                    </h2>

                    <div className="grid gap-8 max-w-4xl mx-auto">
                        {awards.map((award, index) => (
                            <Link href={award.link} key={index}>
                                <motion.div
                                    className="bg-gray-800 p-8 rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                                    whileHover={{y: -10}}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            {award.icon}
                                            <h3 className="text-2xl font-bold text-white mb-2">{award.title}</h3>
                                            <p className="text-purple-400 mb-4">{award.description}</p>
                                        </div>
                                        <FaArrowRight className="text-purple-400 text-2xl"/>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        {award.tags.map((tag, i) => (
                                            <span key={i}
                                                  className="px-3 py-1 bg-purple-900 rounded-full text-sm text-purple-200">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
