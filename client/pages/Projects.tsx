import Layout from "@/components/Layout";

const projects = [
  {
    title: "MeritOne — Skill Exchange Platform",
    tech: "MERN Stack",
    color: "#FFC107",
    description: "Built a skill-based collaboration platform enabling users to exchange services instead of money",
    highlights: [
      "User profiles and matching logic",
      "Collaboration spaces with real-time features",
      "Resume building and skill validation",
      "System designed to prove ability through real contributions rather than credentials"
    ]
  },
  {
    title: "Interpret — AI Communication Coaching Platform",
    tech: "MERN + AI Agents",
    color: "#FF5252",
    description: "AI-driven platform to analyze communication across multiple dimensions",
    highlights: [
      "Analyzes explanations, debates, storytelling, and discussions",
      "Generates structured feedback and evaluations",
      "Provides actionable improvement suggestions",
      "Makes communication improvement measurable and practical"
    ]
  },
  {
    title: "Automated Content Pipeline",
    tech: "Node.js, AI Agents, Automation",
    color: "#4DD0E1",
    description: "End-to-end automated system for content generation and publishing",
    highlights: [
      "Generates scripts, creates audio and visuals",
      "Assembles and publishes videos automatically",
      "Modular workflow allowing content niche changes without rebuilding",
      "Emphasis on clean architecture and full pipeline understanding"
    ]
  },
  {
    title: "Movella — Cinematic Story Adaptation System",
    tech: "System Design, AI Planning",
    color: "#9C27B0",
    description: "System design for converting books into cinematic-style narrated experiences",
    highlights: [
      "Designed architecture for story parsing",
      "Narration and visual alignment planning",
      "Concept fully designed with clear technical specifications",
      "Demonstrates system design and architectural thinking"
    ]
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">Projects</h1>
            <p className="text-xl text-gray-600">Showcasing hands-on experience building scalable systems and solving real-world problems</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Header with Color Accent */}
                <div
                  className="h-2"
                  style={{ backgroundColor: project.color }}
                />

                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.tech}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6">{project.description}</p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <section className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Development Philosophy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              My projects reflect a core philosophy: <span className="font-semibold">solve real problems with scalable, thoughtful engineering</span>. Each project demonstrates not just technical skill, but an understanding of user needs, system architecture, and the importance of clean, maintainable code.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From building skill-exchange platforms to automating content pipelines, I focus on creating systems that work reliably and scale elegantly. Whether it's integrating AI agents or designing complex workflows, every decision is driven by the goal of delivering practical, production-ready solutions.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
