import { FaRobot, FaAndroid, FaCode, FaServer } from "react-icons/fa";

const skills = [
  {
    icon: <FaRobot size={32} />,
    title: "LLM Integration",
    description: "Seamless AI prompt engineering and local model deployment—specializing in MCP integration for tailored intelligence",
  },
  {
    icon: <FaAndroid size={32} />,
    title: "Android Development",
    description: "Custom Kotlin apps with Tasker, LM Studio, device automation, and localization—built for smart, adaptive systems.",
  },
  {
    icon: <FaCode size={32} />,
    title: "Frontend Engineering",
    description: "Crafting sleek Frontends with React, Angular, or Vue + Vuetify—using Tailwind, Framer Motion, precision.",
  },
  {
    icon: <FaServer size={32} />,
    title: "Backend Engineering",
    description: "Designing scalable backends with Node.js, REST APIs, WebSocket, and databases like MongoDB, MySQL, PostgreSQL.",
  },
  {
    icon: <FaServer size={32} />,
    title: "Workflow Automation",
    description: "Comfortable building simple n8n workflows, with a solid grasp of complex automation, AI bots, and APIs.",
  },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What I Am Great At</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-indigo-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
