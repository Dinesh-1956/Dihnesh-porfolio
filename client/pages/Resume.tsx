import Layout from "@/components/Layout";

export default function Resume() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-160px)] py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">Mohammed Shahzaman Ali</h1>
            <p className="text-xl text-gray-600 mb-4">Full-Stack Developer (MERN) | AI Agents | Automation Systems</p>
            <p className="text-gray-500">B.Tech ECE (2023-27)</p>
          </div>

          {/* About Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">
              Full-stack developer with hands-on experience building MERN applications, AI-driven systems, and automation pipelines. Focused on solving real-world problems through scalable architectures, clean workflows, and practical product design.
            </p>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">• React.js</li>
                  <li className="text-gray-700">• HTML, CSS, JavaScript</li>
                  <li className="text-gray-700">• Responsive Design</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">• Node.js</li>
                  <li className="text-gray-700">• Express.js</li>
                  <li className="text-gray-700">• REST APIs</li>
                </ul>
              </div>

              {/* Database */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Database</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">• MongoDB</li>
                  <li className="text-gray-700">• Data Modeling</li>
                  <li className="text-gray-700">• Query Optimization</li>
                </ul>
              </div>

              {/* AI & Automation */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI / Automation</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">• AI Agents (LLM-based workflows)</li>
                  <li className="text-gray-700">• Prompt Engineering</li>
                  <li className="text-gray-700">• Content Automation Pipelines</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Platforms</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="text-gray-700">• Git & GitHub</li>
                  <li className="text-gray-700">• Linux</li>
                  <li className="text-gray-700">• VS Code</li>
                  <li className="text-gray-700">• Docker (basics)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Strengths */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700">🔧 <span className="font-semibold">Problem-Solving</span> - Breaking down complex problems into scalable solutions</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700">🏗️ <span className="font-semibold">System Design</span> - Architecting robust, modular systems</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700">🤖 <span className="font-semibold">AI Integration</span> - Building practical AI-driven applications</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700">⚡ <span className="font-semibold">Full-Stack Execution</span> - From concept to production deployment</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
