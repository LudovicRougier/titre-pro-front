import { Mood } from "@/domain/model/Mood";

const getLights = (recommendations: Mood) => {
  const lights = [
    {
      id: 1,
      color: recommendations.mainEmotion.color,
      width: 400,
      height: 400,
      opacity: 0.5,
      blur: 100,
    },

    {
      id: 2,
      color: recommendations.mainEmotion.color,
      width: 600,
      height: 600,
      opacity: 0.5,
      blur: 100,
    },
  ];

  if (recommendations.subEmotion) {
    const subEmotionLight = {
      id: 3,
      color: recommendations.subEmotion.color,
      width: 600,
      height: 600,
      opacity: 0.5,
      blur: 100,
    };
    lights.splice(1, 0, subEmotionLight);

    return lights;
  }
  return lights;
};

export default getLights;
