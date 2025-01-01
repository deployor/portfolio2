import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa';

export default function ProjectLayout({children, title, subtitle}) {
    return (
        <div className="min-h-screen bg-gray-900">
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <Link href="/#projects"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
                        <FaArrowLeft className="mr-2"/>
                        Back to Projects
                    </Link>
                    <h1 className="text-4xl font-bold text-white mt-4">{title}</h1>
                    {subtitle && (
                        <p className="text-xl text-gray-400 mt-2">{subtitle}</p>
                    )}
                </div>
            </div>
            <main className="container mx-auto px-4 py-12">
                {children}
            </main>
        </div>
    );
}
