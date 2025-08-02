/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import MeteorBG from "../assets/meteor.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gray-900 text-white overflow-hidden">

      {/* 🔥 Animated Meteor Background */}
      <div className="absolute inset-0 z-0 animate-meteor">
        <img
          src={MeteorBG}
          alt="Meteor Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 🧠 Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-10">
        
        {/* 👉 Left side: Text */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Abderrakib Ambari
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Software Developer
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-800 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* 🧍‍♂️ Right side: Image */}
        <div className="flex justify-end w-[340px]">
          <img
            src="./src/assets/me.jpg"
            alt="Abderrakib Ambari"
            className="w-[340px] h-[420px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
