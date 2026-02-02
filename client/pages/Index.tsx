import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Breeze and Blaze — Smart Temperature-Regulated Blanket",
    tech: "Hardware Design, Microcontrollers",
    description: "Designed a smart temperature-controlled blanket with automatic regulation without manual intervention. Emphasizes safety and energy efficiency with applications in homes, healthcare, and travel environments.",
  },
  {
    title: "Anti-Theft System for Two-Wheelers",
    tech: "Electronics, Embedded Systems",
    description: "Developed an electronics-based security solution to mitigate two-wheeler theft. Features owner authentication, remote control, and integrated vehicle tracking for recovery during theft or accident scenarios.",
  },
  {
    title: "Sushanth Engineers Internship",
    tech: "Hardware Implementation",
    description: "6-month hands-on hardware implementation and circuit design experience. Worked on diagnosing and resolving hardware-level issues in industry-grade electronic systems.",
  },
];

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
}

const Parallax = ({ children, offset = 0 }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = elementCenter - screenCenter;
        setTranslateY(distance * 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} style={{ transform: `translateY(${translateY * offset}px)` }}>
      {children}
    </div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  scale?: boolean;
}

const ScrollReveal = ({ children, delay = 0, direction = "up", scale = false }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    let transform = "";

    if (!isVisible) {
      if (direction === "left") transform = "translateX(-60px)";
      else if (direction === "right") transform = "translateX(60px)";
      else transform = "translateY(60px)";

      if (scale) transform += " scale(0.95)";
    }

    return transform;
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default function Index() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
            {/* Left: Profile Image */}
            <Parallax offset={0.4}>
              <div
                className={`flex justify-center lg:justify-start transition-all duration-1200 ${
                  isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                }`}
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 blur-2xl opacity-50" />
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-white/50">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Ff11b34f0fc244da89705edac23c5f473%2Fb83664de3c4c483daf04a715fb1cd657?format=webp&width=800&height=1200"
                      alt="V. Dinesh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Parallax>

            {/* Right: Hero Content */}
            <div
              className={`flex flex-col justify-center transition-all duration-1200 delay-300 ${
                isHeroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-6">
                  <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                    Electronics & VLSI Engineer
                  </p>
                  <h1 className="font-light tracking-tight text-4xl sm:text-5xl lg:text-7xl text-slate-900 leading-tight">
                    V.<br />Dinesh
                  </h1>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <p className="text-sm sm:text-base text-slate-700 tracking-wide">
                    Digital Electronics • VLSI • Hardware Design
                  </p>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-lg">
                    Passionate about designing innovative electronics solutions with a focus on VLSI and embedded systems.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 lg:pt-8">
                  <Link
                    to="/resume"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center font-light text-xs sm:text-sm text-gray-900 hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 active:scale-95"
                    style={{ backgroundColor: '#FFC107' }}
                  >
                    Resume
                  </Link>
                  <Link
                    to="/projects"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center font-light text-xs sm:text-sm text-white hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 active:scale-95"
                    style={{ backgroundColor: '#FF5252' }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center font-light text-xs sm:text-sm text-gray-900 hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 active:scale-95"
                    style={{ backgroundColor: '#4DD0E1' }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-5 h-8 text-slate-400 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-8">
              <div className="inline-block">
                <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                  About
                </p>
              </div>
              <h2 className="font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight tracking-tight">
                Innovative Full Stack Developer
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="mt-16 space-y-6 max-w-3xl">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                My work spans the MERN stack, AI agents, and automation pipelines—focused on turning ideas into production-ready software. I design systems with scalability, security, and real-world constraints in mind.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                I enjoy working on problems where architecture matters: integrating AI into workflows, building end-to-end platforms, and designing systems that continue to work as usage grows.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                My goal is simple: build software that actually gets used.
              </p>
              <p className="text-base text-slate-600 pt-6 font-light">
                B.Tech in Electronics & Communication Engineering (2023-27)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-block mb-8">
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                Expertise
              </p>
            </div>
            <h2 className="font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight tracking-tight">
              Technical foundation
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20">
            {[
              {
                category: "Frontend",
                items: ["React.js", "HTML / CSS / JavaScript", "Responsive Design", "Performance Optimization"],
              },
              {
                category: "Backend",
                items: ["Node.js", "Express.js", "REST APIs", "System Architecture"],
              },
              {
                category: "Database",
                items: ["MongoDB", "Data Modeling", "Query Optimization", "Indexing Strategies"],
              },
              {
                category: "AI & DevOps",
                items: ["LLM-based Agents", "Prompt Engineering", "Git / Docker", "Linux"],
              },
            ].map((skill, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 120} scale>
                <div className="group p-8 lg:p-12 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px]">
                  <h3 className="text-xl font-light text-slate-900 mb-8 tracking-tight">
                    {skill.category}
                  </h3>
                  <ul className="space-y-4">
                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-slate-700 font-light text-base group-hover:text-slate-900 transition-colors duration-300"
                        style={{
                          transitionDelay: `${i * 50}ms`
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-4">
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                Work
              </p>
              <h2 className="font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight tracking-tight">
                Featured projects
              </h2>
              <p className="text-lg text-slate-600 mt-6 font-light">
                Building scalable systems from the ground up
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-20">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 140} scale>
                {project.isLive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px] block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-8 lg:p-10 h-full flex flex-col justify-between relative z-10">
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-light text-slate-900 tracking-tight leading-tight">
                              {project.title}
                            </h3>
                            <span className="inline-block text-xs font-semibold text-emerald-600 mt-2 px-2 py-1 rounded bg-emerald-50">
                              LIVE
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-all duration-500 flex-shrink-0 group-hover:translate-x-2 group-hover:-translate-y-1" />
                        </div>

                        <span className="inline-block text-xs font-light px-3 py-2 rounded-lg bg-slate-100 text-slate-700 mb-6 tracking-wide group-hover:bg-slate-200 transition-colors duration-300">
                          {project.tech}
                        </span>

                        <p className="text-slate-700 leading-relaxed text-base font-light group-hover:text-slate-900 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-200 group-hover:border-slate-300 transition-colors duration-300">
                        <span className="inline-flex items-center gap-2 text-sm font-light text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                          Visit site <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="group relative h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="p-8 lg:p-10 h-full flex flex-col justify-between relative z-10">
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <h3 className="text-xl font-light text-slate-900 flex-1 tracking-tight leading-tight">
                            {project.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-all duration-500 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>

                        <span className="inline-block text-xs font-light px-3 py-2 rounded-lg bg-slate-100 text-slate-700 mb-6 tracking-wide group-hover:bg-slate-200 transition-colors duration-300">
                          {project.tech}
                        </span>

                        <p className="text-slate-700 leading-relaxed text-base font-light group-hover:text-slate-900 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="space-y-4">
              <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">
                Connect
              </p>
              <h2 className="font-light text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight tracking-tight">
                Let's work together
              </h2>
              <p className="text-lg text-slate-600 mt-6 font-light max-w-2xl">
                Always open to meaningful projects and collaborations. Typically respond within 24–48 hours.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-20">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "contact@mohammedshahzaman.dev",
                link: "mailto:contact@mohammedshahzaman.dev",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "View projects",
                link: "https://github.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Connect",
                link: "https://linkedin.com",
              },
            ].map((contact, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 120} scale>
                <a
                  href={contact.link}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block p-8 lg:p-10 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-500 hover:translate-y-[-4px]"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-light text-slate-900 mb-3 tracking-tight">
                    {contact.label}
                  </h3>
                  <p className="text-slate-700 font-light text-base group-hover:text-slate-900 transition-colors duration-300">{contact.value}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
