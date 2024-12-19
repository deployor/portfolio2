import { FaGithub, FaDiscord} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center p-4 text-white">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://github.com/deployor" className="hover:text-teal-400">
          <FaGithub size={24} />
        </a>
        <a href="https://discord.com/users/996096794062761985/" className="hover:text-teal-400">
          <FaDiscord size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Deployor. All rights reserved.</p>
    </footer>
  );
}