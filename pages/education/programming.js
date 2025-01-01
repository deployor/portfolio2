import {motion} from 'framer-motion';
import {FaArrowLeft, FaCode, FaDatabase, FaPython, FaReact} from 'react-icons/fa';
import {SiLua} from 'react-icons/si';
import Link from 'next/link';
import Head from 'next/head';

export default function Programming() {
    const learningPath = [
        {
            year: "2019",
            language: "Python",
            projects: "Basic automation scripts, simple games",
            details: "Started with Python basics, learned about variables, loops, and functions and everything"
        },
        {
            year: "2019",
            language: "Lua",
            projects: "Roblox scripting, small games",
            details: "Explored Lua through roblox scripting and game development"
        },
        {
            year: "2022",
            language: "Web Development",
            projects: "Personal website, small web applications",
            details: "Learned HTML, CSS, JavaScript, and modern frameworks like React and more"
        }
    ];

    const currentFocus = [
        {
            icon: <FaReact className="text-3xl"/>,
            area: "Frontend Development",
            details: "Building interactive web applications with React and Next.js"
        },
        {
            icon: <FaDatabase className="text-3xl"/>,
            area: "Backend Integration",
            details: "Learning about databases and API development"
        },
        {
            icon: <FaCode className="text-3xl"/>,
            area: "Software Architecture",
            details: "Understanding clean code and best practices"
        }
    ];

    const programmingProjects = [
        {
            title: "Discord Bot",
            language: "JS",
            year: "2019",
            description: "Created a Discord bot with moderation and music features",
            achievement: "100+ Members"
        },
        {
            title: "Roblox Game Scripts",
            language: "Lua",
            year: "2020",
            description: "Developed custom game mechanics and systems",
            achievement: "10k+ plays"
        },
        {
            title: "Portfolio Website",
            language: "React/Next.js",
            year: "2023",
            description: "Built a responsive portfolio website with modern technologies",
            link: "/"
        },
        {
            title: "More",
            language: "React/Next.js",
            year: "2023",
            description: "On the dedicated page",
            link: "/"
        },
    ];

    const codingMilestones = [
        {
            year: "2019",
            title: "First Line of Code",
            description: "Wrote first Python script - a simple calculator"
        },
        {
            year: "2020",
            title: "Game Development",
            description: "Created first Roblox game using Lua"
        },
        {
            year: "2021",
            title: "Web Development",
            description: "Built first website using HTML and CSS"
        },
        {
            year: "2022",
            title: "Framework Learning",
            description: "Started learning React and Next.js"
        },
        {
            year: "2023",
            title: "Full Stack Development",
            description: "Building complete web applications with databases"
        }
    ];

    const learningResources = [
        {
            name: "freeCodeCamp",
            type: "Online Platform",
            topics: ["Web Development", "JavaScript", "React"],
            status: "Completed Frontend Track"
        },
        {
            name: "Codecademy",
            type: "Interactive Learning",
            topics: ["Python", "JavaScript"],
            status: "Completed Multiple Courses"
        },
        {
            name: "YouTube Tutorials",
            type: "Video Learning",
            topics: ["Web Dev Simplified", "Fireship", "Tech With Tim", "Theo"],
            status: "Ongoing Learning"
        }
    ];

    const programmingLanguages = [
        {
            name: "Python",
            level: "Advanced Beginner",
            useCase: "Automation, Discord Bots",
            projects: 5,
            startedYear: 2019
        },
        {
            name: "JavaScript",
            level: "Intermediate",
            useCase: "Web Development, React Apps",
            projects: 8,
            startedYear: 2021
        },
        {
            name: "Lua",
            level: "Intermediate",
            useCase: "Game Development, Roblox",
            projects: 3,
            startedYear: 2020
        },
    ];

    const futureLearningGoals = [
        {
            goal: "Master React and Next.js",
            timeline: "2024",
            progress: "In Progress",
            details: "Building complex web applications"
        },
        {
            goal: "Learn TypeScript",
            timeline: "2024",
            progress: "Planning",
            details: "Adding type safety to JavaScript projects"
        },
        {
            goal: "Explore Mobile Development",
            timeline: "2024-2025",
            progress: "Planned",
            details: "React Native for cross-platform apps"
        }
    ];

    return (
        <>
            <Head>
                <title>Programming Journey | Deployor</title>
            </Head>
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 mb-8">
                            <FaArrowLeft/> Back to Portfolio
                        </Link>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            className="text-center mb-12"
                        >
                            <div className="flex justify-center gap-4 mb-4">
                                <FaPython className="text-4xl text-purple-400"/>
                                <SiLua className="text-4xl text-purple-400"/>
                            </div>
                            <h1 className="text-4xl font-bold mb-4">Programming Journey</h1>
                            <p className="text-purple-400 text-lg">From Scripts to Web Applications</p>
                        </motion.div>

                        {/* Learning Timeline */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Learning Timeline</h2>
                            <div className="space-y-6">
                                {learningPath.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: 0.1 * index}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-800 px-3 py-1 rounded-full text-sm">
                                                {item.year}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{item.language}</h3>
                                                <p className="text-gray-400 mb-2">Projects: {item.projects}</p>
                                                <p className="text-gray-300">{item.details}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Current Focus */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Current Focus Areas</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {currentFocus.map((focus, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.05}}
                                        className="bg-gray-800 p-6 rounded-lg text-center"
                                    >
                                        <div className="text-purple-400 mb-4">{focus.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{focus.area}</h3>
                                        <p className="text-gray-300">{focus.details}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Programming Languages Overview */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Programming Languages</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {programmingLanguages.map((lang, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.05}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold text-purple-400">{lang.name}</h3>
                                        <p className="text-sm text-gray-400">Since {lang.startedYear}</p>
                                        <p className="text-purple-300 my-2">{lang.level}</p>
                                        <p className="text-gray-300">Main use: {lang.useCase}</p>
                                        <p className="text-sm text-gray-400 mt-2">{lang.projects} projects completed</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Notable Projects */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Notable Projects</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {programmingProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.02}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                                        <div className="flex items-center gap-2 my-2">
                                            <span className="text-sm text-gray-400">{project.language}</span>
                                            <span className="text-sm text-gray-400">• {project.year}</span>
                                        </div>
                                        <p className="text-gray-300 mb-2">{project.description}</p>
                                        {project.achievement && (
                                            <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                        {project.achievement}
                      </span>
                                        )}
                                        {project.link && (
                                            <Link href={project.link}
                                                  className="text-purple-400 hover:text-purple-300 ml-2">
                                                View Project →
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Coding Journey Timeline */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Coding Journey</h2>
                            <div className="space-y-4">
                                {codingMilestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: 0.1 * index}}
                                        className="bg-gray-800 p-6 rounded-lg flex gap-4"
                                    >
                                        <div className="bg-purple-900 px-3 py-1 h-fit rounded-full text-sm">
                                            {milestone.year}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-purple-400">{milestone.title}</h3>
                                            <p className="text-gray-300">{milestone.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Learning Resources */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Learning Resources</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {learningResources.map((resource, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.05}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold text-purple-400">{resource.name}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{resource.type}</p>
                                        <ul className="text-gray-300 text-sm space-y-1 mb-2">
                                            {resource.topics.map((topic, i) => (
                                                <li key={i}>• {topic}</li>
                                            ))}
                                        </ul>
                                        <p className="text-purple-300 text-sm">{resource.status}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Future Goals */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.7}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Future Learning Goals</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {futureLearningGoals.map((goal, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.05}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold text-purple-400">{goal.goal}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{goal.timeline}</p>
                                        <p className="text-gray-300 mb-2">{goal.details}</p>
                                        <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                      {goal.progress}
                    </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Learning Resources */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                            className="bg-gray-800 p-8 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Learning Resources</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Online coding platforms (Codecademy, freeCodeCamp)</li>
                                <li>YouTube tutorials and programming channels</li>
                                <li>Documentation and official guides</li>
                                <li>Personal projects and experimentation</li>
                                <li>Open source contributions</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
