import React from "react";
import { Navbar } from "../sections/Navbar";
import { Home as Hero } from "../Home/Home";
import { Diseases } from "../Diseases/Diseases";
import { Ai } from "../Ai/Ai";
import { Train } from "../sections/Train";
import { Feedback } from "../Feedback/Feedback";
import { Footer } from "../sections/Footer";
import { Contact } from "../sections/Contact";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Diseases />
      <Ai />
      <Train />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};
