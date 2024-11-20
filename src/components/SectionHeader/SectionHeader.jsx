import React from "react";

export const SectionHeader = ({ heading, subheading }) => {
  return (
    <div className="my-10">
      <h1 className="md:text-5xl text-3xl text-center font-semibold">
        {heading}
      </h1>
    </div>
  );
};
