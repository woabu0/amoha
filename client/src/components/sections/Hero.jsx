import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../icons/logo";

const typewriterStrings = [
  "Diverse Ophthalmology!",
  "Ocular Health!",
  "Simplified Eyecare!",
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
    <section id="hero" className="w-full h-[100vh] p-5">
      <div className="bg-blue rounded-3xl h-full px-6">
        <div className="flex items-center justify-between">
          <Logo variant="white" className="w-24" />
          <Link
            to={heroInfo.scanRoute}
            className="cursor-pointer py-2 px-5 border text-white border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-blue transition-all"
          >
            Scan
          </Link>
        </div>
        <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start text-white">
          <motion.div {...fadeIn("left")} className="w-full">
            <h1 className="text-[26px] lg:text-[30px] xl:text-[50px] font-semibold">
              {heroInfo.title} <br />
              <span className="bg-white inline-block text-blue px-1">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="text-sm lg:text-lg mt-3">{heroInfo.subtitle}</p>
            <Button>{heroInfo.buttonLabel}</Button>
          </motion.div>
          <motion.div {...fadeIn("right")} className="w-full mt-10 lg:mt-0">
            <img src={heroInfo.heroImage} alt="Eye" className="w-1/2 m-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
