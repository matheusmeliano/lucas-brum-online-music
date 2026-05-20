import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function Reveal({ className, delay = 0, children }: RevealProps) {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <motion.div {...motionProps} className={cn(className)}>
      {children}
    </motion.div>
  );
}

