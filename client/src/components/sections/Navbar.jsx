import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../icons/logo";

export const Navbar = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // adjust sensitivity
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className={`flex justify-between items-center h-16 sticky top-0 z-50 px-5 
        ${isHeroVisible ? "bg-[#0049FF]" : "bg-white"} 
        transition-colors duration-500`}
      initial={{ y: -30 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {isHeroVisible ? (
        <Logo variant="white" className="w-24" />
      ) : (
        <Logo variant="black" className="w-24" />
      )}
      <div className="text-[8px] flex items-center gap-2 lg:gap-[20px] lg:text-[18px] font-medium">
        <Link
          to="/scanpage"
          className="cursor-pointer w-[73px] h-[24px] lg:w-[180px] lg:h-[45px] border-[#FAFAFA] border-[1px] rounded-[8px] flex items-center justify-center hover:bg-[#FAFAFA] hover:text-[#0049FF] transition-all"
        >
          Scan
        </Link>
      </div>
    </motion.div>
  );
};
