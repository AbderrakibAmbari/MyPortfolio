import { useEffect, useState } from "react";

const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const StatCard = ({ label, value }) => {
  const count = useCountUp(value);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow">
      <h3 className="text-4xl font-bold text-indigo-400 mb-2">
        {count}+
      </h3>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};

export default StatCard;
