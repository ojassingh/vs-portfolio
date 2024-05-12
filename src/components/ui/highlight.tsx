import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <motion.span
        initial={{
          backgroundSize: "0% 100%",
          color: "#525252"
        }}
        animate={{
          backgroundSize: "100% 100%",
          color: "#ffffff"
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-blue-700 to-purple-500 px-4`,
          className
        )}
      >
        {children}
      </motion.span>
    );
  };