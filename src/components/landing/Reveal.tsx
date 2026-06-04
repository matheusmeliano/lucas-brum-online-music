import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  immediate?: boolean;
}>;

export default function Reveal({ className, delay = 0, immediate = false, children }: RevealProps) {
  const motionProps: MotionProps = immediate
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "0px 0px 15% 0px", amount: 0.12 },
        transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <motion.div {...motionProps} className={cn(className)}>
      {children}
    </motion.div>
  );
}
