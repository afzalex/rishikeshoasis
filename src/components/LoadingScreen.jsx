import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../config/constants';

const LoadingScreen = ({ isLoading, progress }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center"
    >
      <div className="text-center w-full max-w-4xl px-6">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide mb-8 whitespace-nowrap overflow-hidden text-ellipsis px-2"
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
          {BUSINESS_INFO.name}
        </motion.h1>

        {/* Progress bar container */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p 
          className="mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 