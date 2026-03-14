import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold">
        Hi I'm Kartik Shah
      </h1>

      <p className="text-xl mt-4">
        Full Stack Developer
      </p>

      <button className="mt-6 bg-blue-500 px-6 py-2 text-white rounded">
        Download Resume
      </button>
    </motion.div>
  );
}

export default Hero;
