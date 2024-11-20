import React from "react";
import { Hero } from "../../components/HeroSection/Hero";
import { PopularServices } from "../../components/PopularServices/PopularServices";

export const Home = () => {
  return (
    <div>
      <Hero />
      <PopularServices />
    </div>
  );
};
