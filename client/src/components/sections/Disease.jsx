import React from "react";
import { motion } from "framer-motion";

const diseases = [
  {
    id: 1,
    title: "Diabetic Retinopathy",
    detail:
      "A complication commonly seen in diabetics. It is caused by damage to the blood vessels in the tissue located at the back of the eye (retina) and can eventually lead to blindness.",
    video: "https://www.youtube.com/embed/TSRcjWmkf_A?si=BM27ZF7D-Y9Z7pgp&amp",
  },
  {
    id: 2,
    title: "Macular Edema",
    detail:
      "A condition where fluid and protein deposits collect on or under the macula of the eye (a yellow central area of the retina), causing it to thicken and swell (edema), leading to distorted vision.",
    video: "https://www.youtube.com/embed/_qv30ml8Whs?si=dBG36DNaPH7yAXmM&amp",
  },
  {
    id: 3,
    title: "Age-Related Macular Degeneration",
    detail:
      "This affects the middle part of your vision. It usually first affects people in their 50s and 60s. It doesn't cause total blindness. But it can make everyday activities like reading and recognising faces difficult.",
    video: "https://www.youtube.com/embed/QiCaBbVfOsQ?si=THfhxFc_43ktdH1C&amp",
  },
  {
    id: 4,
    title: "Glaucoma",
    detail:
      "Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is crucial for good vision. This damage is often caused by abnormally high pressure in the eye and can lead to blindness if left untreated.",
    video: "https://www.youtube.com/embed/6Tw9MjgqZCw?si=8jDc_ppqitt5_d2h&amp",
  },
  {
    id: 5,
    title: "Cataract",
    detail:
      "A cataract is a clouding of the lens in the eye, which leads to decreased vision. It commonly results from ageing but may also occur due to trauma or radiation exposure or be inherited through genetic disorders. Cataracts can be successfully treated with surgery.",
    video: "https://www.youtube.com/embed/n1iNx4RqiiY?si=mK5z9xqvO09PnKjb&amp",
  },
];

export const Disease = () => {
  return (
    <div id="disease" className="mt-[70px] px-[10px] lg:px-9">
      <div className="m-auto 2xl:w-[1366px]">
        <motion.div
          className="mt-[50px] lg:mt-[100px]"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <h1 className="text-[24px] lg:text-[48px] text-[#23262F] text-center b md:w-[60%] m-auto">
            Ever imagined the world through the lens of these conditions?
          </h1>
        </motion.div>
        <div className="mt-[100px]">
          {diseases.map((d) => (
            <div
              className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between w-auto m-auto text-[#101010]"
              id={d.id}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
              >
                <iframe
                  className="mb-5 rounded-[16px] w-full h-[275px] lg:h-[375px]"
                  src={d.video}
                  title="@AmohaAI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-[35px] lg:text-[40px] b">{d.title}</h1>
                <p className="mt-[25px] text-[14px] lg:text-[18px] m">
                  {d.detail}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
