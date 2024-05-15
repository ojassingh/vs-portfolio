import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/(app)/utils/cn";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {

  return (
    <motion.section
      whileHover={{ scale: 1.01, transition: { duration: 0.1, ease: "easeInOut" }}}
      className={cn(
        " w-full relative rounded-2xl h-[100%] overflow-hidden grid place-content-center",
        containerClassName
      )}
    >
      <div
        className="h-[100%] [background-image:radial-gradient(90%_50%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          
          className={cn("h-[100%] px-4 py-8 ", className)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};
