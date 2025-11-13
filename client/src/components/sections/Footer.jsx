import React from "react";
import { motion } from "framer-motion";
import Logo from "../icons/logo"

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 to-gray-800 mt-16 sm:mt-20 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col justify-between lg:flex-row gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <Logo variant="white" className="w-32 sm:w-40" />
            <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-md">
              Revolutionizing eye care through AI-powered early detection and diagnosis.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 w-full">
          <motion.div
            className="h-px w-full bg-gray-700"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, ease: "linear", duration: 0.8 }}
          ></motion.div>
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.2 }}
          >
            <p className="text-sm text-gray-400">
              Copyright © 2024 amoha.ai. All rights reserved.
            </p>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
