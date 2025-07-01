import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-[80px] flex flex-col items-center justify-center w-full min-h-screen relative overflow-hidden bg-transparent px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl w-full">
        <SkillText />
      </div>
    </section>
  );
};

export default Skills;
