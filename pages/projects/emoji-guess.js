import ProjectLayout from '../../components/ProjectLayout';
import {motion} from 'framer-motion';
import {FaGamepad, FaGithub, FaLightbulb, FaMobile, FaServer, FaTrophy} from 'react-icons/fa';

export default function EmojiGuessProject() {
    const motivations = [
        {
            icon: <FaLightbulb className="text-3xl text-purple-400"/>,
            title: "Birth of the Idea",
            description: "Created during Christmas break as a fun way to engage the Hack Club community and practice with Next.js 13's new features."
        },
        {
            icon: <FaGamepad className="text-3xl text-purple-400"/>,
            title: "Learning Through Play",
            description: "Wanted to create something that combines entertainment with technical learning, making it both fun and educational."
        }
    ];

    const challenges = [
        {
            title: "Real-time Scoring",
            description: "Implemented Prisma with PostgreSQL for efficient leaderboard management and real-time updates. Switched to SupaBase later!"
        },
        {
            title: "User Experience",
            description: "Crafted smooth animations and responsive design for seamless gameplay across all devices."
        }
    ];

    return (
        <ProjectLayout
            title="Emoji Guess Game"
            subtitle="A festive multiplayer guessing game built for Hack Club Highseas!"
        >
            <div className="space-y-20">
                {/* Hero */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="text-center"
                >
                    <img
                        src="https://files.catbox.moe/a4cvq7.png"
                        alt="Emoji Guess Screenshot"
                        className="mx-auto rounded-lg shadow-xl mb-8"
                    />
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-white mb-4">Why I Built This</h2>
                        <p className="text-gray-300">
                            During the Christmas season, I wanted to create something that would bring joy
                            and entertainment to the Hack Club community while challenging myself technically.
                            This project became a perfect blend of festive fun and technical learning.
                        </p>
                    </div>
                </motion.section>

                {/* Motivation Grid */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Project Journey</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {motivations.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{y: -5}}
                                className="bg-gray-800 p-6 rounded-lg"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Technical Challenges */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Technical Challenges</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                                <p className="text-gray-400">{challenge.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Future Plans */}
                <section className="bg-gray-800 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-6">Future Development</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center">
                            <FaTrophy className="text-purple-400 mr-3"/>
                            Advanced modes or something
                        </li>
                        <li className="flex items-center">
                            <FaMobile className="text-purple-400 mr-3"/>
                            Native mobile app (maybe)
                        </li>
                        <li className="flex items-center">
                            <FaServer className="text-purple-400 mr-3"/>
                            Multiplayer rooms with chat
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <a
                        href="https://emoji.thiswhity.uk"
                        className="btn-primary mr-4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Play Now
                    </a>
                    <a
                        href="https://github.com/deployor/emoji-guess"
                        className="btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="inline mr-2"/>
                        View Source
                    </a>
                </section>
            </div>
        </ProjectLayout>
    );
}
