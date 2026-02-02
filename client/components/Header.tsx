import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex flex-col">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition">
            Mohammed Shahzaman Ali
          </Link>
          <span className="text-sm text-gray-600 font-medium">Full-Stack Developer</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link
            to="/resume"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-sm"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-sm"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-sm"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
