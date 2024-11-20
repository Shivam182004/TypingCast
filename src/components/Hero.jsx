
import { motion } from "framer-motion";
import TypingAnimation from './TypingAnimation'; // Import Typing Animation

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex flex-col justify-center items-center">
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-yellow-400">TypingCast</span>!
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Test your typing speed, challenge yourself, and track your progress. Ready to improve your skills?
        </motion.p>

        {/* Typing Animation */}
        <motion.div
          className="text-lg font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <TypingAnimation />
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="inline-block bg-yellow-400 text-indigo-900 font-semibold text-lg px-6 py-3 rounded-lg cursor-pointer hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
        >
          Try your speed now!
        </motion.div>
      </div>

      {/* Illustration Section */}
      <div className="relative z-0 mt-10">
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
          >
            {/* Simple typing machine illustration */}
            <g>
              <circle cx="200" cy="200" r="150" fill="white" opacity="0.1" />
              <rect x="100" y="150" width="200" height="50" rx="10" fill="white" />
              <rect x="100" y="220" width="200" height="20" rx="5" fill="white" />
              <line x1="150" y1="190" x2="150" y2="150" stroke="white" strokeWidth="5" />
              <line x1="250" y1="190" x2="250" y2="150" stroke="white" strokeWidth="5" />
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
