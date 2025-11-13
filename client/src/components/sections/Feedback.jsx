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
      "Amoha.ai is revolutionizing eye care with AI-powered screening that enables remote diagnostics and early detection of eye conditions.",
    name: "Dr. (Major) Prashant Kumar Singh",
    country: "Indian Army Veteran & Founder",
  },
  {
    profile: "img/profile3.png",
    feedback:
      "I'm impressed with Amoha.ai's accuracy in predicting diabetic retinopathy and macular edema. The platform has great potential to transform ophthalmology.",
    name: "Dr. Blessy Jacob",
    country: "Ophthalmologist",
  },
  {
    profile: "img/profile2.png",
    feedback:
      "Amoha.ai shows promising accuracy and an impressive interface. I see immense potential for this platform to expand and transform predictive eye healthcare.",
    name: "Mr. Braj Bhushan Bijoria",
    country: "Co-founder, Purple Squirrel Strategist",
  },
];

export const Feedback = () => {
  return (
    <section id="feedback" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            What do the experts say about us?
          </h1>
        </motion.div>
        <div className="relative">
          <Swiper
            className="!pb-12"
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {feedbacks.map((f, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, ease: "linear", duration: 0.5 }}
                  className="h-full"
                >
                  <div className="flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Profile Image at Top */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src={f.profile}
                          alt={f.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                    
                    {/* Feedback Text */}
                    <div className="flex-grow mb-6">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center italic">
                        "{f.feedback}"
                      </p>
                    </div>
                    
                    {/* Name and Country */}
                    <div className="text-center border-t border-gray-200 pt-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {f.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {f.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button className="prev cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="next cursor-pointer p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
