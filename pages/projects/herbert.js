import ProjectLayout from '../../components/ProjectLayout';
import {motion} from 'framer-motion';
import {FaBrain, FaCode, FaLightbulb, FaRobot} from 'react-icons/fa';
import {MdSecurity} from 'react-icons/md';

export default function HerbertProject() {
    const features = [
        {
            icon: <FaRobot className="text-3xl text-purple-400"/>,
            title: "AI Support Companion",
            description: "24/7 empathetic chatbot providing personalized mental health support and crisis intervention."
        },
        {
            icon: <FaBrain className="text-3xl text-purple-400"/>,
            title: "Interactive Wellness Tools",
            description: "Guided breathing exercises, grounding techniques, and real-time anxiety relief tools."
        },
        // ...more features
    ];

    const techStack = [
        {name: "Next.js", description: "React framework for production"},
        {name: "TypeScript", description: "Type-safe development"},
        {name: "TailwindCSS", description: "Utility-first styling"},
        {name: "GPT-4", description: "Advanced language model integration"}
    ];

    const developmentJourney = [
        {
            phase: "Research & Planning",
            description: "Conducted research on mental health and designed a little",
            duration: "1 day",
            highlights: ["Checked out existing resources mainly german ones for some reason?", "Some sketches of UI"]
        },
        {
            phase: "Initial Development",
            description: "Built core chatbot functionality and basic UI",
            duration: "2 days",
            highlights: ["Implemented GPT integration", "Created responsive design", "Basic stuff"]
        },
        {
            phase: "Testing & Refinement",
            description: "Testing with focus groups and improvements",
            duration: "2 days",
            highlights: ["Performance optimization"]
        }
    ];

    const impactMetrics = [
        {metric: "Active Users", value: "5+", description: "Monthly active users seeking support"},
        {metric: "Support Sessions", value: "10+", description: "Successful support conversations"},
        {metric: "Response Time", value: "<2s", description: "Average response time"}
    ];

    const safetyFeatures = [
        {
            title: "Content Filtering",
            description: "Multi-layer content filtering system to ensure safe interactions"
        },
        {
            title: "Crisis Detection",
            description: "Algorithms to identify and respond to crisis situations"
        },
        {
            title: "Professional Referral",
            description: "Integration with professional help resources and emergency services"
        }
    ];

    return (
        <ProjectLayout
            title="Herbert"
            subtitle="Your compassionate digital companion for mental wellness"
        >
            <div className="space-y-20">
                {/* Hero Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    className="text-center"
                >
                    <img
                        src="https://files.catbox.moe/d6wdb6.png"
                        alt="Herbert Logo"
                        className="mx-auto mb-8 w-64"
                    />
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Herbert combines evidence-based coping techniques with cutting-edge AI technology
                        to provide immediate, personalized support when you need it most.
                    </p>
                </motion.section>

                {/* Development Journey */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Development Journey</h2>
                    <div className="relative">
                        {developmentJourney.map((phase, index) => (
                            <motion.div
                                key={index}
                                whileHover={{x: 10}}
                                className="bg-gray-800 p-6 rounded-lg mb-6 border-l-4 border-purple-500"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                                    <span className="text-purple-400 text-sm">{phase.duration}</span>
                                </div>
                                <p className="text-gray-400 mb-4">{phase.description}</p>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {phase.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Impact Metrics */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Impact & Metrics</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {impactMetrics.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{y: -5}}
                                className="bg-gray-800 p-6 rounded-lg text-center"
                            >
                                <h3 className="text-purple-400 text-4xl font-bold mb-2">{item.value}</h3>
                                <h4 className="text-white font-bold mb-2">{item.metric}</h4>
                                <p className="text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Safety & Ethics */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Safety & Ethics</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {safetyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.02}}
                                className="bg-gray-800 p-6 rounded-lg"
                            >
                                <MdSecurity className="text-purple-400 text-3xl mb-4"/>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Features Grid */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{y: -5}}
                                className="bg-gray-800 p-6 rounded-lg"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {techStack.map((tech, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start">
                                <FaCode className="text-purple-400 text-xl mr-4 mt-1"/>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                                    <p className="text-gray-400">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshots */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Screenshots</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'https://files.catbox.moe/yjnuf2.png',
                            'https://files.catbox.moe/7hoj8f.png',
                            'https://files.catbox.moe/nn2pp6.png',
                            'https://files.catbox.moe/k3ypge.png'
                        ].map((img, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.02}}
                                className="overflow-hidden rounded-lg"
                            >
                                <img src={img} alt={`Screenshot ${index + 1}`} className="w-full"/>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Future Roadmap */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Future Roadmap</h2>
                    <div className="space-y-4">
                        {[
                            "Multi-language support for global accessibility",
                            "Integration with wearable devices for bio-feedback",
                            "Community support groups and peer connections",
                            "Advanced personalization using machine learning",
                            "Voice interaction capabilities"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{x: 10}}
                                className="bg-gray-800 p-4 rounded-lg flex items-center"
                            >
                                <FaLightbulb className="text-purple-400 mr-4"/>
                                <span className="text-gray-300">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Try Herbert Today</h2>
                    <p className="text-gray-300 mb-8">
                        Experience compassionate AI-powered mental wellness support
                    </p>
                    <a
                        href="https://crisis.thiswhity.uk"
                        className="btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Launch Herbert
                    </a>
                </section>
            </div>
        </ProjectLayout>
    );
}
