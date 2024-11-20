import React from "react";
import { Hero } from "../../components/HeroSection/Hero";
import { PopularServices } from "../../components/PopularServices/PopularServices";
import { AllServices } from "../../components/AllServices/AllServices";

export const Home = () => {
  return (
    <div>
      <Hero />
      <PopularServices />
      <AllServices />
    </div>
  );
};
