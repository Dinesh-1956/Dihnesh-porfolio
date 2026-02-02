import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">dineshnani5691@email.com</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Location
            </h3>
            <p className="text-gray-600 text-sm">Hyderabad, Telangana, India</p>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Expertise
            </h3>
            <p className="text-gray-600 text-sm">
              Digital Electronics, VLSI, Hardware Design
            </p>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-600 text-xs mb-1">© 2026 V. Dinesh</p>
            <p className="text-gray-500 text-xs">
              Built with <span className="font-semibold">React & Vite</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
