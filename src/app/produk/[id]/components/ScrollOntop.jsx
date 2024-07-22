"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaChevronUp } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [show, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-4 right-4 bg-black border text-white p-3 rounded-full shadow-lg cursor-pointer z-50`}
      onClick={scrollToTop}
    >
      <FaChevronUp className="text-xl" />
    </motion.div>
  );
};

export default ScrollToTop;
