import LightAnimation from "@/presentation/components/animatedLight";
import getLights from "@/utils/getLights";
import { Mood } from "@/domain/model/Mood";
import { useViewportSize } from "@mantine/hooks";

interface LightAnimationGroupProps {
  recommendations: Mood;
}

const LightAnimationGroup: React.FC<LightAnimationGroupProps> = ({
  recommendations,
}) => {
  const { height, width } = useViewportSize();
  const lights = getLights(recommendations);

  return (
    <>
      {lights.map((light) => (
        <LightAnimation
          key={light.id}
          light={light}
          containerHeight={height}
          containerWidth={width}
        />
      ))}
    </>
  );
};

export default LightAnimationGroup;
