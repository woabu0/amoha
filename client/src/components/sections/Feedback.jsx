import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const feedbacks = [
  {
    profile: "img/profile1.png",
    feedback:
      "“Amoha.ai is the trailblazing revolution eye care has been waiting for, allowing ophthalmologists to screen and identify eye problems using artificial intelligence and with not just accuracy but also through remote locations using portable diagnostics. This will help catch many illnesses in their early stages, improve visual outcomes, and be a boon in our country, where there is a dearth of healthcare delivery systems in the interior.”",
    name: "Dr. (Major) Prashant Kumar Singh Chauhan",
    country: "Indian Army Veteran & Founder, Purple Squirrel Strategist",
  },
  {
    profile: "img/profile3.png",
    feedback:
      "“I've had the opportunity to review Amoha.ai, and I am genuinely impressed with the platform's capabilities. The accuracy in predicting diabetic retinopathy & macular edema is promising, and the user interface is intuitive, making it user-friendly for ophthalmologists. Amoha.ai has the potential to significantly impact the field of ophthalmology, not only in predicting DR and macular edema but also in its future applications. The initiative's commitment to affordability and accessibility is commendable, and I believe it could indeed revolutionize eye healthcare.”",
    name: "Dr. Blessy Jacob",
    country: "Ophthalmologist",
  },
  {
    profile: "img/profile2.png",
    feedback:
      "“Having reviewed Amoha.ai, I am pleased to express my endorsement for this groundbreaking initiative. The accuracy in predicting diabetic retinopathy & macular edema is promising, and the user interface is impressive. I see immense potential for Amoha.ai to expand beyond a few ocular conditions. Exploring collaborations with eye hospitals and incorporating feedback from experienced specialists will be crucial for the platform's growth. I envision Amoha.ai as a transformative force in predictive eye healthcare.”",
    name: "Mr. Braj Bhushan Bijoria,",
    country: "Co-founder, Purple Squirrel Strategist",
  },
];

export const Feedback = () => {
  return (
    <div id="feedback" className="mt-24">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <h1 className="text-2xl lg:text-5xl text-center font-semibold">
          What do the SME's have to say about us?
        </h1>
      </motion.div>
      <div className="m-auto">
        <Swiper
          className="px-10 mt-10"
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {feedbacks.map((f) => (
            <SwiperSlide className="w-full m-auto">
              <div className="flex flex-col justify-between w-full bg-white rounded-2xl p-10">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
                >
                  <h1 className="text-[14px] lg:text-[16px] text-black s">
                    {f.feedback}
                  </h1>
                </motion.div>
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.5 }}
                  >
                    <img
                      src={f.profile}
                      alt="profileImg"
                      className="w-[38px] lg:w-[59px]"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-col justify-between"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, ease: "linear", duration: 0.5 }}
                  >
                    <h2 className="text-[11px] lg:text-[13px] text-black b">
                      {f.name}
                    </h2>
                    <h3 className="text-[#C2C2C2] text-[10px] lg:text-[12px] r">
                      {f.country}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div
        className="flex items-center gap-[26px] justify-center mt-[38px]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: "linear", duration: 0.5 }}
      >
        <img
          src="img/arrow.png"
          alt="arrowImage"
          className="-rotate-180 w-[24px] h-[24px] prev cursor-pointer"
        />
        <img
          src="img/arrow.png"
          alt="arrowImage"
          className="w-[24px] h-[24px] next cursor-pointer"
        />
      </motion.div>
    </div>
  );
};
