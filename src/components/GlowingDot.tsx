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
      className={`rounded-full ${dotColor} shadow-[0_0_20px_${dotShadow}] hover:cursor-pointer`}
      style={{
        width: `${dotWidth * 4}px`, // Tailwind 'w-5' is actually 20px (5 * 4)
        height: `${dotWidth * 4}px`,
        boxShadow: `0 0 20px ${dotShadow}`, // This allows for dynamic shadow colors too!
      }}
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
