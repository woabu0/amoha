import React from "react";
import { motion } from "framer-motion";
import FlowingMenu from "../animations/FlowingMenu";

const demoItems = [
  { link: '#', text: 'Normal', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Diabetic Retinopathy', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Macular Edema', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Age-Related Macular', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Glaucoma', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'Cataract', image: 'https://picsum.photos/600/400?random=4' }
];

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
    <section id="disease" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 text-center font-bold max-w-4xl mx-auto">
            Ever imagined the world through the lens of these conditions?
          </h1>
        </motion.div>
        <FlowingMenu items={demoItems} />
        <div className="mt-16 sm:mt-20 lg:mt-24 space-y-16 sm:space-y-20">
          {diseases.map((d) => (
            <div
              key={d.id}
              className="flex flex-col-reverse gap-8 lg:flex-row items-center justify-between"
            >
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    className="w-full h-[275px] sm:h-[350px] lg:h-[400px]"
                    src={d.video}
                    title={d.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/2 lg:pl-8"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {d.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {d.detail}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
