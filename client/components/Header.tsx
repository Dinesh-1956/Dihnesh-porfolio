import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex flex-col min-w-0">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-gray-900 hover:text-gray-700 transition truncate"
          >
            V. Dinesh
          </Link>
          <span className="text-xs sm:text-sm text-gray-600 font-medium truncate">
            Electronics & VLSI Engineer
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-3 sm:gap-6 ml-3 sm:ml-6">
          <Link
            to="/resume"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 transition font-medium text-xs sm:text-sm whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
