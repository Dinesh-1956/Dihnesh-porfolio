import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">contact@mohammedshahzaman.dev</p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600 text-sm">MERN Stack, AI Agents, Automation</p>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Follow Me</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-600 text-xs mb-1">© 2026 Mohammed Shahzaman Ali</p>
            <p className="text-gray-500 text-xs">
              Built with <span className="font-semibold">React & Vite</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
