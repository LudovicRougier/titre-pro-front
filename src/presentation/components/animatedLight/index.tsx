import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface LightAnimationProps {
  element: any;
  containerWidth: number;
  containerHeight: number;
}

const LightAnimation: React.FC<LightAnimationProps> = ({
  containerWidth,
  containerHeight,
  element,
}) => {
  const controls = useAnimation();
  useEffect(() => {
    const interval = setInterval(() => {
      const newX = Math.random() * (containerWidth - element.width);
      const newY = Math.random() * (containerHeight - element.height);

      const adjustedX = Math.max(
        0,
        Math.min(newX, containerWidth - element.width)
      );
      const adjustedY = Math.max(
        0,
        Math.min(newY, containerHeight - element.height)
      );

      controls.start({
        x: adjustedX,
        y: adjustedY,
        transition: { duration: 10 }, // Adjust the duration of the animation (in seconds) according to your preference
      });
    }, 10000); // Adjust the interval time (in milliseconds) according to your preference

    return () => clearInterval(interval);
  }, [element, containerWidth, containerHeight, controls]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${element.width}px`,
        height: `${element.height}px`,
        opacity: element.opacity,
        filter: `blur(${element.blur}px)`,
        backgroundColor: element.color,
        borderRadius: "100%",
      }}
      animate={controls}
    />
  );
};

export default LightAnimation;
