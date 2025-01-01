import {motion} from 'framer-motion';
import {FaArrowLeft, FaLinux, FaNetworkWired, FaServer, FaShieldAlt} from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function ComputerScience() {
    const timeline = [
        {
            age: 8,
            milestone: "First Steps with Linux",
            details: "Started exploring Ubuntu Linux, learning basic system commands and operations"
        },
        {
            age: 9,
            milestone: "System Administration",
            details: "Began understanding file systems, user management, and basic networking"
        },
        {
            age: 10,
            milestone: "Network Fundamentals",
            details: "Learning about IP addressing, DNS, and basic network protocols"
        },
        {
            age: 11,
            milestone: "Security Basics",
            details: "Introduction to system security, firewalls, and basic penetration testing concepts"
        }
    ];

    const skills = [
        {
            icon: <FaLinux/>,
            name: "Linux Systems",
            details: "Comfortable with Ubuntu and basic system administration"
        },
        {
            icon: <FaServer/>,
            name: "Server Management",
            details: "Basic understanding of server setup and maintenance"
        },
        {
            icon: <FaShieldAlt/>,
            name: "Security Fundamentals",
            details: "Knowledge of basic security principles and practices"
        },
        {
            icon: <FaNetworkWired/>,
            name: "Networking",
            details: "Understanding of basic networking concepts and protocols"
        }
    ];

    const projects = [
        {
            title: "Network penetration",
            description: "Penetrated a local network and identified security vulnerabilities in a controlled environment",
            grade: "Outstanding Achievement",
            year: 2019
        },
        {
            title: "Linux System Administration",
            description: "Managed a server environment with multiple services and user accounts",
            year: 2022
        }
    ];

    const certifications = [
        {
            name: "Linux Essentials",
            platform: "Linux Foundation (Learning)",
            progress: "In Progress"
        },
        {
            name: "Networking Fundamentals",
            platform: "Self-Study with Cisco Materials",
            progress: "Completed"
        }
    ];

    const workshops = [
        {
            name: "Cyber Security Basics",
            organizer: "Local Tech Community",
            date: "2023"
        },
        {
            name: "Linux Administration",
            organizer: "Online Workshop",
            date: "2022"
        }
    ];

    const operatingSystems = [
        {
            name: "Ubuntu",
            experience: "Primary Learning Platform",
            details: "Daily driver for learning Linux fundamentals",
            startedAt: "Age 8"
        },
        {
            name: "Kali Linux",
            experience: "Security Testing",
            details: "Used for learning basic penetration testing",
            startedAt: "Age 11"
        }
    ];

    const onlineResources = [
        {
            platform: "TryHackMe",
            type: "Interactive Learning",
            focus: "Cybersecurity basics",
            status: "Completed several rooms"
        },
        {
            platform: "Linux Journey",
            type: "Documentation",
            focus: "Linux fundamentals",
            status: "Completed"
        }
    ];

    const futureGoals = [
        {
            goal: "CompTIA Linux+",
            timeframe: "2024-2025",
            status: "Planning"
        },
        {
            goal: "Basic Network Security",
            timeframe: "2024",
            status: "In Progress"
        }
    ];

    return (
        <>
            <Head>
                <title>Computer Science Journey | Deployor</title>
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
                            <FaLinux className="text-purple-400 text-5xl mx-auto mb-4"/>
                            <h1 className="text-4xl font-bold mb-4">Computer Science Journey</h1>
                            <p className="text-purple-400 text-lg">Self-Learning Path</p>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Learning Timeline</h2>
                            <div className="space-y-6">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: 0.1 * index}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-800 px-3 py-1 rounded-full text-sm">
                                                Age {item.age}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-2">{item.milestone}</h3>
                                                <p className="text-gray-300">{item.details}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Core Skills Developed</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.02}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <div className="text-purple-400 text-3xl mb-3">{skill.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                        <p className="text-gray-300">{skill.details}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Featured Projects */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{scale: 1.02}}
                                        className="bg-gray-800 p-6 rounded-lg"
                                    >
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-2">{project.description}</p>
                                        {project.grade && (
                                            <span
                                                className="bg-purple-900 text-purple-100 px-3 py-1 rounded-full text-sm">
                        {project.grade}
                      </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Certifications & Learning Path</h2>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="mb-4 last:mb-0">
                                        <h3 className="text-lg font-semibold text-purple-400">{cert.name}</h3>
                                        <p className="text-gray-300">{cert.platform}</p>
                                        <span className="text-sm text-gray-400">{cert.progress}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Workshops and Events */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Workshops & Events</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {workshops.map((workshop, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-purple-400">{workshop.name}</h3>
                                        <p className="text-gray-300">{workshop.organizer}</p>
                                        <span className="text-sm text-gray-400">{workshop.date}</span>
                                    </div>
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
                                <li>Online Linux tutorials and documentation</li>
                                <li>YouTube educational content</li>
                                <li>Practical experimentation with Ubuntu systems</li>
                                <li>Basic security testing in controlled environments</li>
                                <li>Online forums and communities</li>
                            </ul>
                        </motion.div>

                        {/* Operating Systems Experience */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.7}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Operating Systems Experience</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {operatingSystems.map((os, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{os.name}</h3>
                                        <p className="text-sm text-gray-400 mb-2">Started at {os.startedAt}</p>
                                        <p className="text-purple-300 mb-2">{os.experience}</p>
                                        <p className="text-gray-300">{os.details}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Online Learning Platforms */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Learning Platforms</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {onlineResources.map((resource, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{resource.platform}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{resource.type}</p>
                                        <p className="text-purple-300 mb-2">Focus: {resource.focus}</p>
                                        <p className="text-gray-300">{resource.status}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Future Goals */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.9}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Future Learning Goals</h2>
                            <div className="space-y-4">
                                {futureGoals.map((goal, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{goal.goal}</h3>
                                        <p className="text-sm text-gray-400 mb-2">Planned: {goal.timeframe}</p>
                                        <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                      {goal.status}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
