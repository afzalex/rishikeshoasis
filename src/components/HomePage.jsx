import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import { sliderImages } from '../config/images';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setImagesLoaded(prev => prev + 1);
          resolve();
        };
        img.onerror = reject;
      });
    };

    Promise.all(sliderImages.map(image => loadImage(image.url)))
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error loading images:', error);
        setIsLoading(false); // Still hide loading screen even if some images fail
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Rishikesh Oasis Retreat - Welcome</title>
        <meta name="description" content="Welcome to Rishikesh Oasis Retreat - Your peaceful sanctuary in Rishikesh" />
      </Helmet>

      <LoadingScreen 
        isLoading={isLoading} 
        progress={(imagesLoaded / sliderImages.length) * 100} 
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
                    Welcome to Rishikesh Oasis Retreat
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 text-lg"
                  >
                    Discover inner peace and spiritual growth in the yoga capital of the world.
                    Our retreat offers a perfect blend of traditional yoga practices, meditation,
                    and modern comfort to help you on your journey of self-discovery.
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