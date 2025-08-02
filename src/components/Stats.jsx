import StatCard from "./StatCard"

const stats = [
  { label: "Projects Completed", value: 12 },
  { label: "Projects working on", value: 4 },
  { label: "Automation Workflows", value: 30 },
];



const Stats = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <StatCard key={idx} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
