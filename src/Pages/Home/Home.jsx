import React from "react";
import { Hero } from "../../components/HeroSection/Hero";
import { PopularServices } from "../../components/PopularServices/PopularServices";
import { AllServices } from "../../components/AllServices/AllServices";
import { WhyUs } from "../../components/WhyUs/WhyUs";
import { HowWeWork } from "../../components/HowWeWork/HowWeWork";

export const Home = () => {
  return (
    <div>
      <Hero />
      <PopularServices />
      <AllServices />
      <WhyUs />
      <HowWeWork />
    </div>
  );
};
