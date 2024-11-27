import React from "react";
import { Hero } from "../../components/HeroSection/Hero";
import { PopularServices } from "../../components/PopularServices/PopularServices";
import { AllServices } from "../../components/AllServices/AllServices";
import { WhyUs } from "../../components/WhyUs/WhyUs";
import { HowWeWork } from "../../components/HowWeWork/HowWeWork";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <div>
      <Fade>
        {" "}
        <Hero />
      </Fade>
      <Fade>
        {" "}
        <PopularServices />
      </Fade>
      <Fade>
        {" "}
        <AllServices />
      </Fade>
      <Fade>
        {" "}
        <WhyUs />
      </Fade>
      <Fade>
        <HowWeWork />
      </Fade>
    </div>
  );
};
