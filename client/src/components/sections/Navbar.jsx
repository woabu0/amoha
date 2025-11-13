import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../icons/logo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show navbar on login/register/dashboard pages
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center">
            <Logo variant={scrolled ? "black" : "white"} className="w-24 sm:w-32" />
          </Link>
          <div className="flex gap-3 sm:gap-4">
            <Link
              to="/login"
              className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all ${
                scrolled
                  ? "text-gray-700 border border-gray-300 hover:bg-gray-100"
                  : "text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base rounded-lg font-semibold transition-all shadow-lg ${
                scrolled
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                  : "bg-white text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

