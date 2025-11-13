import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  const x = direction === "left" ? -30 : direction === "right" ? 30 : 0;
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { ease: "linear", duration: 0.5, delay },
  };
};

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn("up", 0)} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            About Amoha.ai
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amoha.ai is an innovative Software-as-a-Service (SaaS) MedTech
            platform designed to revolutionize the early detection and management
            of various ocular conditions such as diabetic retinopathy, glaucoma,
            AMD, cataracts, etc., which, if unchecked, can lead to significant
            vision loss or even blindness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
