import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4 py-8">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">TypingCast</span>
        </h1>
        <p className="text-lg mb-6">
          TypingCast is a simple yet powerful typing test platform designed to analyze your **typing speed** and provide insights into your performance. Whether you're a beginner or a pro, TypingCast helps you improve, challenge yourself, and compete with friends.
        </p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 8,
            delay: 0.5,
          }}
          className="py-4 px-6 bg-indigo-800 rounded-md text-lg font-semibold shadow-lg inline-block cursor-pointer hover:bg-yellow-400 hover:text-indigo-800 transition"
        >
          Try your speed here and share on socials!
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-sm">
          Built with 💖 by <span className="font-semibold">Shivam</span>
        </p>
        <p className="italic text-xs text-gray-200">
          "Speed thrills but doesn’t kill… in typing at least 😉"
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
