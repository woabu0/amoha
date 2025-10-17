import React from "react";
import { motion } from "framer-motion";
import Logo from "../icons/logo"

export const Footer = () => {
  return (
    <div id="footer" className="bg-black mt-[50px] xl:mt-[125px]">
      <div className="w-full 2xl:w-[1366px] m-auto px-9">
        <div className="flex flex-col justify-between xl:flex-row gap-[50px]">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <Logo variant="white" className="w-24" />
          </motion.div>
        </div>
        <div className="mt-20 w-full">
          <motion.div
            className="h-px w-full bg-white m-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, ease: "linear", duration: 0.8 }}
          ></motion.div>
          <motion.div
            className="flex flex-col lg:flex-row justify-between py-[31px]"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.2 }}
          >
            <h6 className="text-[12px] r text-[#777E90]">
              Copyright © 2024 amoha.ai
            </h6>
            <h6 className="text-[12px]">Privacy Policy</h6>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
