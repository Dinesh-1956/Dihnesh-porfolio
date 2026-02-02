import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Email */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 uppercase tracking-widest">
              Email
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm break-all">
              dineshnani5691@email.com
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 uppercase tracking-widest">
              Location
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Hyderabad, Telangana, India
            </p>
          </div>

          {/* Copyright */}
          <div className="sm:text-right lg:text-left">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">
              © 2026 V. Dinesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
