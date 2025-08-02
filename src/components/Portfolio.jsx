import TimeMasterImg from '../assets/TimeMaster.png';
import WorkflowImg from '../assets/Simple_workflow_n8n.png';
import TemiImg from '../assets/Temi.jpg';
import TripleAImg from '../assets/Frage.png';
const projects = [
    {
    title: "TimeMaster",
    image: TimeMasterImg , 
    category: "Website",
  },
  {
    title: "Tasker Workflow Suite",
    image: WorkflowImg, 
    category: "Automation",
  },
  {
    title: "TEMI Voice Assistant",
    image: TemiImg,
    category: "AI/Robotics",
  },
  {
    title: "TripleA",
    image: TripleAImg,
    category: "Website",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Masterpiece Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
