import { motion } from "motion/react";
function GlowingDot({
  dotWidth,
  dotColor,
  dotShadow,
  dx,
  dy,
  signX,
  signY,
  duration,
  onDotClick,
}: {
  dotWidth: number;
  dotColor: string;
  dotShadow: string;
  dx: number;
  dy: number;
  signX: number;
  signY: number;
  duration: number;
  onDotClick: () => void;
}) {
  return (
    <motion.div
      className={`w-${dotWidth} h-${dotWidth} rounded-full ${dotColor} shadow-[0_0_20px_${dotShadow}] hover:cursor-pointer`}
      animate={{ y: [0, signY * dy, 0], x: [0, signX * dx, 0] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={() => onDotClick()}
    />
  );
}

export default GlowingDot;
