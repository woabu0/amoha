import React from "react";
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { WhatWeDo } from "../sections/WhatWeDo";
import { Disease } from "../sections/Disease";
import { Train } from "../sections/Train";
import { Feedback } from "../sections/Feedback";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <Disease />
      <Train />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};
