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
    const getRandomPosition = () => {
      const newX = Math.random() * (containerWidth - light.width * 1.5);
      const newY = Math.random() * (containerHeight - light.height * 1.5);

      const adjustedX = Math.max(
        0,
        Math.min(newX, containerWidth - light.width)
      );
      const adjustedY = Math.max(
        0,
        Math.min(newY, containerHeight - light.height)
      );
      const adjustedScale =
        Math.floor(Math.random() * (120 - 80 + 1) + 80) / 100;

      controls.start({
        scale: adjustedScale,
        x:
          adjustedX > (containerWidth - light.width) / 2
            ? -adjustedX + light.width / 2
            : adjustedX,
        y:
          adjustedY > (containerHeight - light.height) / 2
            ? -adjustedY - light.height / 2
            : adjustedY,
        transition: { duration: 12, ease: "easeInOut" },
      });
    };

    getRandomPosition();

    const interval = setInterval(getRandomPosition, light.id * 2000);

    return () => clearInterval(interval);
  }, [containerHeight, containerWidth, controls, light]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: containerHeight / 2 - light.height / 2,
        left: containerWidth / 2 - light.width / 2,
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
