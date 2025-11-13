import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card";

const about = [
  {
    icon: "img/about-1.gif",
    title: "AI-Enabled Accessibility",
    detail:
      "We leverage AI to rapidly process retinal images and scans, significantly reducing waiting times for diagnosis results. Through our technology, we provide high-quality ocular care, irrespective of geographical boundaries and constraints.",
  },
  {
    icon: "img/about-2.gif",
    title: "Ophthalmic Empowerment Hub",
    detail:
      "We facilitate informed decision-making, empowering patients, ophthalmologists, and eye care professionals to manage ocular health proactively.",
  },
  {
    icon: "img/about-3.gif",
    title: "Diagnosis and Monitoring",
    detail:
      "Our platform offers wide-ranging ocular assessments based on continuous data analysis, which promotes timely health interventions and meticulous scrutiny of potential eye health threats.",
  },
  {
    icon: "img/about-4.gif",
    title: "Device Agnostic Approach",
    detail:
      "Our device-agnostic approach ensures compatibility with various eye imaging devices, enabling seamless integration in diverse clinical settings. This flexibility allows eye care professionals to use the platform with their existing diagnostic equipment, thus eliminating the need for costly upgrades or proprietary hardware.",
  },
];

const fadeIn = (direction = "up", delay = 0) => {
  const x = direction === "left" ? -30 : direction === "right" ? 30 : 0;
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { ease: "linear", duration: 0.5, delay },
  };
};

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn("up", 0)} className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            What we do?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amoha.ai is an innovative Software-as-a-Service (SaaS) MedTech
            platform designed to revolutionize the early detection and management
            of various ocular conditions such as diabetic retinopathy, glaucoma,
            AMD, cataracts, etc., which, if unchecked, can lead to significant
            vision loss or even blindness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {about.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeIn("up", index * 0.1)}
              className="w-full"
            >
              <Card {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

