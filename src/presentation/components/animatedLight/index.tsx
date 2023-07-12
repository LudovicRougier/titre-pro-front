import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Light = {
  id: number;
  color: string;
  width: number;
  height: number;
  opacity: number;
  blur: number;
};

interface LightAnimationProps {
  light: Light;
  containerWidth: number;
  containerHeight: number;
}

const LightAnimation: React.FC<LightAnimationProps> = ({
  containerWidth,
  containerHeight,
  light,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animation = () => {
      const newX = Math.random() * (containerWidth - light.width);
      const newY = Math.random() * (containerHeight - light.height);
      const adjustedX = Math.max(
        0,
        Math.min(newX, containerWidth - light.width)
      );
      const adjustedY = Math.max(
        0,
        Math.min(newY, containerHeight - light.height)
      );

      controls.start({
        x: adjustedX,
        y: adjustedY,
        transition: { duration: 10 },
      });
    };
    animation();
    const interval = setInterval(animation, 15000);
    return () => clearInterval(interval);
  }, [containerHeight, containerWidth, controls, light.height, light.width]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${light.width}px`,
        height: `${light.height}px`,
        opacity: light.opacity,
        filter: `blur(${light.blur}px)`,
        backgroundColor: light.color,
        borderRadius: "100%",
      }}
      animate={controls}
    />
  );
};

export default LightAnimation;
