import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Logo from "../icons/logo";

const typewriterStrings = [
  "Diverse!",
  "Ocular Health!",
  "Simplified!",
];

const heroInfo = {
  title: "Experience The Future Of",
  subtitle: "Early Detection | Advanced Insights | Cost-Efficient",
  tagline: "AI for Eye Scans",
  buttonLabel: "Let's Speak",
  heroImage: "img/eye.gif",
  scanRoute: "/scanpage",
};

const fadeIn = (direction = "up", delay = 0) => {
  const x = direction === "left" ? -30 : direction === "right" ? 30 : 0;
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { ease: "linear", duration: 0.5, delay },
  };
};

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 text-white">
          <motion.div {...fadeIn("left")} className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              {heroInfo.title} <br />
              <span className="bg-white/20 backdrop-blur-sm inline-block text-white px-4 py-2 rounded-lg mt-2">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
              {heroInfo.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl text-center text-lg"
              >
                Start Scanning
              </Link>
              <Link
                to="#about"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div {...fadeIn("right")} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Eye illustration using SVG */}
              <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer eye shape */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="200"
                  ry="120"
                  fill="rgba(255, 255, 255, 0.1)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="3"
                />
                {/* Iris */}
                <circle
                  cx="250"
                  cy="250"
                  r="80"
                  fill="url(#irisGradient)"
                  className="animate-pulse"
                />
                {/* Pupil */}
                <circle
                  cx="250"
                  cy="250"
                  r="40"
                  fill="#1a1a2e"
                />
                {/* Highlight */}
                <circle
                  cx="230"
                  cy="230"
                  r="15"
                  fill="rgba(255, 255, 255, 0.6)"
                />
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="irisGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#67C9CB" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                {/* Eyelashes */}
                <path
                  d="M 100 200 Q 120 180 140 200"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 360 200 Q 380 180 400 200"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
