import {motion} from 'framer-motion';
import {MdHistoryEdu} from "react-icons/md";
import {FaArrowLeft, FaFlagUsa, FaGraduationCap, FaLaptopCode} from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

export default function Gymnasium() {
    const favoriteSubjects = [
        {
            name: "Computer Science",
            icon: <FaLaptopCode/>,
            details: "Learning Python, algorithms, and computer architecture. Passionate about coding and problem-solving."
        },
        {
            name: "English",
            icon: <FaFlagUsa/>,
            details: "Havent touched a book in years, but i am still far ahead of my class!"
        },
        {
            name: "History",
            icon: <MdHistoryEdu/>,
            details: "Fascinated by mechanics and electronics. Enjoy practical experiments and theoretical concepts."
        }
    ];

    const milestones = [
        {
            year: "2024",
            event: "Current Grade: 10th",
            details: "Focusing on core subjects while maintaining strong performance in MINT subjects"
        },
        {
            year: "2025",
            event: "Starting Qualification Phase",
            details: "Will choose advanced courses with focus on Computer Science and Other"
        },
        {
            year: "2028",
            event: "Expected Abitur",
            details: "Aiming for excellent grades to pursue further education in Computer Science"
        }
    ];

    const schoolProjects = [
        {
            title: "HTML & CSS Website",
            subject: "Informatik",
            grade: "1 (Outstanding equal to A+)",
            description: "Developed a fully responsive website using HTML and CSS and minor JavaScript",
            link: "https://gmv-infoprojekt-html.pages.dev/"
        }
    ];

    const coursework = [
        {
            subject: "Informatik / Computer Science",
            grade: "1",
            details: "Advanced programming concepts, algorithms, and system design",
            projects: 3
        }
    ];

    const schoolActivities = [
        {
            name: "Hack Club",
            role: "Active Member",
            description: "Contributing to school's technical projects"
        }
    ];

    const languageChoices = [
        {
            language: "English",
            level: "Advanced",
            details: "Strong focus on technical and business English",
            grade: "1 (Excellent)"
        }
    ];

    const classRepresentative = {
        role: "Class Representative",
        period: "2023-2024",
        responsibilities: [
            "Representing students in Informatik"
        ]
    };

    const upcomingEvents = [
        {
            name: "Scrapyard",
            date: "Spring 2024",
            description: "MAYBE"
        }
    ];

    const studyGroups = [
        {
            subject: "Not anymore :c",
            role: "Not anymore :c",
            frequency: "Not anymore :c",
            focus: "Not anymore :c"
        }
    ];

    return (
        <>
            <Head>
                <title>Gymnasium Education | Deployor</title>
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
                            <FaGraduationCap className="text-purple-400 text-5xl mx-auto mb-4"/>
                            <h1 className="text-4xl font-bold mb-4">Gymnasium Education</h1>
                            <p className="text-purple-400 text-lg">Journey towards Abitur 2028</p>
                        </motion.div>

                        {/* School Image */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className="mb-12"
                        >
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipPVApmxM11AjMx6BcE7PaP_TfNFNO2xPqtzu0J9=s680-w680-h510"
                                alt="Gymnasium Mariaveen"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>

                        {/* Current Status */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="bg-gray-800 p-8 rounded-lg mb-8"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Current Status</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Currently attending a Gymnasium in North Rhine-Westphalia, focusing on MINT subjects
                                (Mathematics, Information Technology, Natural Sciences, Technology). Maintaining strong
                                academic performance while pursuing personal interests in technology and programming.
                            </p>
                        </motion.div>

                        {/* Favorite Subjects */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Favorite Subjects</h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {favoriteSubjects.map((subject, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <div className="text-purple-400 text-2xl mb-3">{subject.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                                        <p className="text-gray-300">{subject.details}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education Timeline */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-8"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Education Timeline</h2>
                            <div className="space-y-4">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="bg-purple-800 px-3 py-1 rounded-full text-sm">
                                            {milestone.year}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{milestone.event}</h3>
                                            <p className="text-gray-300">{milestone.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Course Performance */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.3}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Course Performance</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {coursework.map((course, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{course.subject}</h3>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl font-bold">{course.grade}</span>
                                            <span className="text-gray-400">(Outstanding)</span>
                                        </div>
                                        <p className="text-gray-300">{course.details}</p>
                                        <div className="mt-2 text-sm text-gray-400">
                                            {course.projects} projects completed
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* School Projects */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.4}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Notable Projects</h2>
                            <div className="space-y-4">
                                {schoolProjects.map((project, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                                        <p className="text-gray-300 mb-2">{project.description}</p>
                                        <div className="flex items-center gap-4">
                      <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                        {project.grade}
                      </span>
                                            <span className="text-gray-400">{project.subject}</span>
                                        </div>
                                        {project.link && (
                                            <Link href={project.link}
                                                  className="text-purple-400 hover:text-purple-300 mt-2 inline-block">
                                                View Project →
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* School Activities */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Activities</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {schoolActivities.map((activity, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{activity.name}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{activity.role}</p>
                                        <p className="text-gray-300">{activity.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional Activities */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.5}}
                            className="bg-gray-800 p-8 rounded-lg"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Additional Activities</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Participation in computer science projects</li>
                                <li>Active involvement in technology-related school activities</li>
                                <li>Self-directed learning in programming and cybersecurity</li>
                                <li>Contributing to school's technical infrastructure</li>
                            </ul>
                        </motion.div>

                        {/* Language Education */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.6}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Language Education</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {languageChoices.map((lang, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{lang.language}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{lang.level}</p>
                                        <p className="text-gray-300 mb-2">{lang.details}</p>
                                        <span className="bg-purple-900 px-3 py-1 rounded-full text-sm">
                      {lang.grade}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Class Representative Role */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.7}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Leadership Role</h2>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-purple-400">{classRepresentative.role}</h3>
                                <p className="text-sm text-gray-400 mb-4">{classRepresentative.period}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {classRepresentative.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Study Groups */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.8}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Study Groups</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {studyGroups.map((group, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{group.subject}</h3>
                                        <p className="text-sm text-purple-300 mb-2">{group.role}</p>
                                        <p className="text-gray-400 mb-2">{group.frequency}</p>
                                        <p className="text-gray-300">{group.focus}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Upcoming Events */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.9}}
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Upcoming Academic Events</h2>
                            <div className="space-y-4">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-purple-400">{event.name}</h3>
                                        <p className="text-sm text-gray-400 mb-2">{event.date}</p>
                                        <p className="text-gray-300">{event.description}</p>
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
