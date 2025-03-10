import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import { sliderImages } from '../config/images';
import { BUSINESS_INFO } from '../config/constants';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    // Start at 0%
    setLoadingProgress(0);

    // Load all images and track progress
    const totalResources = sliderImages.length;
    let loadedResources = 0;

    // Load images and update progress
    Promise.all(
      sliderImages.map(image => 
        loadImage(image.url)
          .then(() => {
            loadedResources++;
            setLoadingProgress((loadedResources / totalResources) * 90); // Up to 90%
          })
          .catch(error => {
            console.error('Error loading image:', error);
            loadedResources++;
            setLoadingProgress((loadedResources / totalResources) * 90);
          })
      )
    ).then(() => {
      // After images are loaded, wait for window load event
      if (document.readyState === 'complete') {
        setLoadingProgress(100);
        setIsLoading(false);
      } else {
        window.addEventListener('load', () => {
          setLoadingProgress(100);
          setIsLoading(false);
        });
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', () => {
        setLoadingProgress(100);
        setIsLoading(false);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{BUSINESS_INFO.name} - {BUSINESS_INFO.tagline}</title>
        <meta name="description" content={BUSINESS_INFO.description} />
      </Helmet>

      <LoadingScreen 
        isLoading={isLoading} 
        progress={loadingProgress} 
      />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            
            <main className="min-h-screen">
              {/* Hero Section with Image Slider */}
              <section className="pt-16">
                <ImageSlider />
              </section>

              {/* Welcome Section */}
              <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                  >
                    Welcome to {BUSINESS_INFO.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 text-lg"
                  >
                    {BUSINESS_INFO.description}
                  </motion.p>
                </div>
              </section>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage; 