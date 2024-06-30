import React from "react";

import { workExperience } from "@/data";
import { HoverEffect } from "./ui/HoverEffect";

const Experience = () => {
  return (
    <section id="experience">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-blue">work experience</span>
        </h1>

        <HoverEffect items={workExperience} />
      </div>
    </section>
  );
};

export default Experience;
