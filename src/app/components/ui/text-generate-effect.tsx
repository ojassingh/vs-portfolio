"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/utils/cn";
import { merriweather } from "./fonts";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={merriweather.className}>
        <div className="text-black leading-snug mx-auto w-[80%] tracking-wide relative z-10 text-3xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b to-neutral-700 from-neutral-900 text-center font-bold md:leading-[5rem]">
          {renderWords()}
        </div>
        </div>
      </div>
    </div>
  );
};
