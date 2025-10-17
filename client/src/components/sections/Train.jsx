import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const icons = [
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
  {
    arrow: "img/arrow.svg",
    alt: "arrow",
  },
];

export const Train = () => {
  return (
    <div id="train" className="px-[10px] mt-24 lg:px-9 text-center">
      <h1 className="mb-5 text-2xl lg:text-4xl font-semibold">
        AI for Mitigating the <br /> Risk of Ocular Diseases
      </h1>
      <p className="text-sm w-3/4 m-auto mt-3">
        Harnessing the power of artificial intelligence, Amoha.ai's proprietary
        cloud-based platform is streamlining ocular health. With highly accurate
        early detection and diagnoses, it grants both patients and providers
        invaluable time for intervention, preserving vision and preventing
        severe impairment. By embracing proactive and predictive AI approaches,
        we're at the forefront of advancing eye care, ensuring a brighter future
        for all.
      </p>
      <div className="py-[135px] text-center m-auto bg-[#F3F3F6] rounded-[90px]">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <h1 className="text-[#23262F] text-[24px] lg:text-[48px] b">
            How we train our SaaS?
          </h1>
        </motion.div>
        <motion.div
          className="mt-[40px] w-full m-auto justify-evenly flex flex-col gap-[20px] xl:gap-0 xl:flex-row items-center xl:items-start relative"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <div className="absolute hidden xl:flex w-full justify-between mt-5">
            {icons.map((ic) => (
              <Marquee direction="right">
                <img src={ic.arrow} alt={ic.alt} />
              </Marquee>
            ))}
          </div>
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas1.png"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Data Repository (Fundus Images/Scans)</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas2.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>
              Data labelling (Annotate retinal images/scans with specific
              features)
            </p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas4.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Image preprocessing</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas3.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Feature Extraction such as exudates, haemorrhages, etc.</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas5.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>UNET With multi output layer</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas6.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model Traning and testing</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas7.gif"
              alt="saasImg"
              className="w-[74px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model Deployment</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas8.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Retraining and Retesting</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas9.gif"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Model inference</p>
          </div>
          <img
            src="img/arrow.svg"
            alt="arrow"
            className="rotate-90 xl:hidden"
          />
          <div className="z-10 text-[#101010] text-[15px] flex flex-col items-center gap-[10px] w-[50%] xl:w-[10%]">
            <img
              src="img/saas10.png"
              alt="saasImg"
              className="w-[59px] h-[57px] hover:scale-110 transition-all"
            />
            <p>Output</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
