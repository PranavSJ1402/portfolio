"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "@/utils/motion";

const TypingText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className="text-sm font-medium">{displayedText}</h1>;
};

const HeroTypingBox = () => {
  return (
    <motion.div
      variants={slideInFromTop}
      className="flex items-center gap-2 py-2 px-3 border border-[#7042f88b] rounded-md bg-white/5 backdrop-blur-sm text-white w-fit"
    >
      <SparklesIcon className="text-[#b49bff] h-5 w-5" />
      <TypingText text="Pranav Joshi — Frontend Developer" speed={80} />
    </motion.div>
  );
};

export default HeroTypingBox;
