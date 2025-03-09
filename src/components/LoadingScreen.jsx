import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading, progress }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 tracking-wide mb-8"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Rishikesh Oasis Retreat
        </motion.h1>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.p 
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading your experience... {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 