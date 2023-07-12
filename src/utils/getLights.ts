/* eslint-disable no-plusplus */
import { Mood } from "@/domain/model/Mood";

const getLights = (
  recommendations: Mood,
  viewportSize: { width: number; height: number }
) => {
  const lights = [];
  const size =
    (viewportSize.height > viewportSize.width
      ? viewportSize.width
      : viewportSize.height) / 5;
  const widthSize = size;
  const heightSize = size;
  const opacity = 10;
  const blur = 150;

  for (let x = 1; x < 5; x++) {
    lights.push({
      id: x,
      color: recommendations.mainEmotion.color,
      width: x * widthSize,
      height: x * heightSize,
      opacity: x / opacity,
      blur,
      size,
    });
  }

  if (recommendations.subEmotion) {
    for (let x = 1; x < 5; x++) {
      lights.push({
        id: lights.length + x,
        color: recommendations.subEmotion.color,
        width: x * widthSize,
        height: x * heightSize,
        opacity: x / opacity,
        blur,
        size,
      });
    }
  }

  return lights;
};

export default getLights;
