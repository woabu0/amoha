import React from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Disease } from "../sections/Disease";
import { Train } from "../sections/Train";
import { Feedback } from "../sections/Feedback";
import { Footer } from "../sections/Footer";
import { Contact } from "../sections/Contact";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Disease />
      <Train />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};
