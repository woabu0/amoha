import React from "react";
import Do from "./Do";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "./Button";

export const Home = () => {
  return (
    <div id="home" className="">
      <div id="hero" className="m-auto px-5 lg:px-9 xl:px-28 bg-[#0049FF] rounded-b-[40px] pb-[100px]">
        <div className="flex flex-col justify-between lg:flex-row">
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <div className="mt-[30px] lg:mt-28">
              <h1 className="text-[26px] lg:text-[30px] xl:text-[50px] s">
                Experience The Future Of <br />
                <div className="bg-white inline-block text-[#0049FF]">
                  <Typewriter
                    options={{
                      strings: [
                        "Diverse Ophthalmology!",
                        "Ocular Health!",
                        "Simplified Eyecare!",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h1>
            </div>
            <div className="text-[14px] lg:text-[18px] r">
              Early Detection | Advanced Insights | Cost-Efficient
            </div>
            <div className="text-[14px] lg:text-[18px] mt-[30px] xl:mt-[90px] r">
              AI for Eye scans
            </div>
            <Button title="Let's speak" />
          </motion.div>
          <motion.div
            className="m-auto w-full lg:w-[40%]"
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
          >
            <img
              src="img/eye.gif"
              alt="eyeImage"
              className="w-[283px] h-[283px] my-12 m-auto lg:h-[250px] lg:w-[250px] xl:h-[400px] xl:w-[400px] lg:mt-[80px]"
            />
          </motion.div>
        </div>
      </div>
      <div className="p-[20px] xl:p-[50px] mt-[-100px] lg:mt-[-50px] xl:mt-[-80px] 2xl:mt-[-100px] mx-11 2xl:w-[1280px] 2xl:m-auto rounded-[22px] lg:p-[60] bg-[#F9FBFF] lg:rounded-[40px] shadow border-[1px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 0.3 }}
        >
          <h1 className="text-[24px] text-center lg:text-[35px] xl:text-[50px] text-[#000] s">
            What we do?
          </h1>
          <p className="text-black text-center mt-2 w-full lg:w-[80%] m-auto text-[14px] lg:text-[16px]">
            Amoha.ai is an innovative Software-as-a-Service (SaaS) MedTech
            platform designed to revolutionize the early detection and
            management of various ocular conditions such as diabetic
            retinopathy, glaucoma, AMD, cataracts, etc., which, if unchecked,
            can lead to significant vision loss or even blindness.
          </p>
        </motion.div>
        <div className="xl:mt-12 flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start w-full lg:w-[80%] m-auto justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5 }}
            >
              <Do
                icon="img/homeIcon1.gif"
                title="AI-Enabled Accessibility"
                detail="We leverage AI to rapidly process retinal images and scans, significantly reducing waiting times for diagnosis results. Through our technology, we provide high-quality ocular care, irrespective of geographical boundaries and constraints."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            >
              <Do
                icon="img/homeIcon2.gif"
                title="Ophthalmic Empowerment Hub"
                detail="We facilitate informed decision-making, empowering patients, ophthalmologists, and eyecare professionals to manage ocular health proactively."
              />
            </motion.div>
          </div>
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between mt-4 xl:mt-10 w-full lg:w-[80%] m-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5 }}
            >
              <Do
                icon="img/homeIcon3.gif"
                title="Diagnosis and Monitoring"
                detail="Our platform offers wide-ranging ocular assessments based on continuous data analysis, which promotes timely health interventions and meticulous scrutiny of potential eye health threats."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            >
              <Do
                icon="img/homeIcon4.gif"
                title="Device Agnostic Approach"
                detail="Our device-agnostic approach ensures compatibility with various eye imaging devices, enabling seamless integration in diverse clinical settings. This flexibility allows eye care professionals to use the platform with their existing diagnostic equipment, thus eliminating the need for costly upgrades or proprietary hardware."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
