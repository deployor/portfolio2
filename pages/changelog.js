import {motion} from 'framer-motion';
import {FaArrowLeft, FaAward, FaCode, FaGraduationCap} from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function Changelog() {
    return (
        <>
            <Head>
                <title>What's New? | Deployor Portfolio</title>
            </Head>
            <div className="min-h-screen bg-gray-900">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Navigation */}
                        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
                            <FaArrowLeft className="mr-2"/>
                            Back to Portfolio
                        </Link>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="bg-gray-800 rounded-xl p-8 shadow-2xl"
                        >
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-white mb-4">🌊 Highseas Update!</h1>
                                <p className="text-xl text-purple-400">This explains further what exactly i upgraded
                                    recently!</p>
                            </div>

                            {/* Main Update Section */}
                            <div className="space-y-12">
                                {/* Programming Journey Section */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaCode className="text-purple-400"/>
                                        Deep Dive into Programming Journey
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Added a HUGE programming journey page! 🚀 It shows everything from my first
                                        Python script to my latest web projects:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                        <li>Complete timeline of my coding adventures since age 12</li>
                                        <li>All my favorite languages (Python, Lua, JavaScript)</li>
                                        <li>Every major project I've built (like that Discord bot with 1000+ servers!)
                                        </li>
                                        <li>My learning resources and study methods</li>
                                        <li>Future goals and what I'm learning next</li>
                                    </ul>
                                    <img
                                        src="https://files.catbox.moe/4wkxe8.png"
                                        alt="Programming Journey"
                                        className="rounded-lg w-full mb-4"
                                    />
                                </div>
                                {/* Project pages */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaCode className="text-purple-400"/>
                                        Pages dedicated to Projects
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Added pages for all Projects describing them. 📈
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                        <li>Pages for all Projects i did.</li>
                                        <li>Deployment Journeys</li>
                                        <li>Impact and Metrics</li>
                                        <li>Tech Stack</li>
                                        <li>Screenshots</li>
                                        <li>More...</li>
                                    </ul>
                                    <img
                                        src="https://files.catbox.moe/bjlf0s.png"
                                        alt="Programming Journey"
                                        className="rounded-lg w-full mb-4"
                                    />
                                </div>
                                {/* Computer Science Education */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaGraduationCap className="text-purple-400"/>
                                        My Computer Science Story
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Created a detailed page about my CS education journey! Started with Ubuntu at
                                        age 8
                                        (yeah, I was THAT kid 😅) and haven't stopped since:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                        <li>Early days with Linux and system administration</li>
                                        <li>Current studies at Gymnasium (the German kind!)</li>
                                        <li>All my projects and achievements</li>
                                    </ul>
                                    <img
                                        src="https://files.catbox.moe/5im322.png"
                                        alt="CS Education"
                                        className="rounded-lg w-full mb-4"
                                    />
                                </div>

                                {/* My Gymnasium Journey */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaGraduationCap className="text-purple-400"/>
                                        My Gymnasium Journey
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Added a complete breakdown of my current education! 📚 Take a peek into my life
                                        at a German Gymnasium:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                        <li>Currently in 10th grade, focusing on MINT subjects</li>
                                        <li>Top grades in Computer Science and English</li>
                                        <li>Class representative duties and responsibilities</li>
                                        <li>Participating in study groups and school projects</li>
                                        <li>Timeline towards Abitur 2028</li>
                                    </ul>
                                    <img
                                        src="https://files.catbox.moe/2iflh4.png"
                                        alt="Gymnasium Journey"
                                        className="rounded-lg w-full mb-4"
                                    />
                                    <div className="bg-gray-900 p-4 rounded-lg mb-6">
                                        <p className="text-purple-400 italic">
                                            "Fun fact: In Germany, we have different types of high schools - Gymnasium
                                            is the academic track! 🎓"
                                        </p>
                                    </div>
                                </div>

                                {/* Award Winning Poem Section */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaAward className="text-purple-400"/>
                                        Added My Award-Winning Poem! 🏆
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Super proud of this one! Created a special bilingual showcase for my Lyrix
                                        competition poem.
                                        The tricky part? Translating German poetry to English (try fitting
                                        "Donaudampfschifffahrtsgesellschaftskapitän" into a verse 😅).
                                    </p>
                                    <div className="bg-gray-900 p-4 rounded-lg mb-6">
                                        <p className="text-purple-400 italic">
                                            "Fun fact: German compound words are like LEGO bricks - we just keep
                                            stacking them!"
                                        </p>
                                    </div>
                                    <img
                                        src="https://files.catbox.moe/jrq79e.png"
                                        alt="Lyrix Award"
                                        className="rounded-lg w-full mb-4"
                                    />
                                </div>

                                {/* Code Improvements Section */}
                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FaCode className="text-purple-400"/>
                                        Made Everything Super Modular
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Okay, this one's for my fellow code nerds 🤓 Completely rebuilt how the site
                                        works:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                        <li>Everything's in neat little components (no more spaghetti code!)</li>
                                        <li>Want to change something? Just edit the constants - no diving into 500 lines
                                            of code
                                        </li>
                                        <li>Made it super easy for others to use as a template</li>
                                    </ul>
                                    <img
                                        src="https://files.catbox.moe/e5fuv2.png"
                                        alt="Code Structure"
                                        className="rounded-lg w-full mb-4"
                                    />
                                </div>

                                {/* Time Investment */}
                                <div className="bg-purple-900/30 p-6 rounded-lg mt-8">
                                    <h3 className="text-xl font-bold text-white mb-2">⏱️ Behind the Scenes</h3>
                                    <p className="text-gray-300">
                                        This update took a while! Spent hours organizing my thoughts, translating poetry
                                        (German is complicated, y'all), and making sure everything works smoothly. But
                                        hey,
                                        that's what happens when you're building something cool! 💪
                                    </p>
                                </div>

                                {/* Technical Effort Section - New */}
                                <div className="bg-gray-800 p-6 rounded-lg mt-8">
                                    <h3 className="text-xl font-bold text-white mb-2">🔧 Changelogs</h3>
                                    <p className="text-gray-300 mb-4">
                                        Even this changelog page alone is about 200 lines of React/Next.js code!
                                        Every section you see here is a carefully crafted component with: Next.js and
                                        react and TailwindCSS. Every section in the code is commented, that takes LOTS
                                        of time! 🕰️
                                    </p>
                                    <p className="text-purple-400 italic">
                                        "Building beautiful UIs takes time, but it's worth every line of code! 💜"
                                    </p>
                                </div>

                                {/* Footer with Explore Button - Updated */}
                                <div className="mt-12 pt-8 border-t border-gray-700 text-center space-y-6">
                                    <p className="text-gray-400">
                                        Thanks for checking out my updates! More cool stuff coming soon... 👀
                                    </p>
                                    <motion.div
                                        whileHover={{scale: 1.05}}
                                        className="inline-block"
                                    >
                                        <Link
                                            href="/"
                                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full
                      font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 
                      flex items-center gap-2 mx-auto w-fit"
                                        >
                                            Explore The New Update
                                            <motion.span
                                                animate={{x: [0, 5, 0]}}
                                                transition={{repeat: Infinity, duration: 1.5}}
                                            >
                                                →
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
