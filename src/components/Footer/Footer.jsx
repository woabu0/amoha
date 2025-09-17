import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {

  return (
    <div id="footer" className="bg-black mt-[50px] xl:mt-[125px]">
      <div className="w-full 2xl:w-[1366px] m-auto pt-[80px] px-9">
        <div className="flex flex-col justify-between xl:flex-row gap-[50px]">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <img
              src="img/logo-footer.gif"
              alt="footerLogo"
              className="w-[110px] h-[33px]"
            />
          </motion.div>
        </div>
        <div className="mt-20 w-full">
          <motion.div
            className="h-[1px] w-full bg-white m-auto"
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
            <h6 className="text-[12px]">
              Privacy Policy
            </h6>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
