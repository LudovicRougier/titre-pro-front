import LightAnimation from "@/presentation/components/animatedLight";
import getLights from "@/utils/getLights";
import { Mood } from "@/domain/model/Mood";
import { useViewportSize } from "@mantine/hooks";
import { useBrowserInfo } from "@/shared/hooks/useBrowserInfo";

interface LightAnimationGroupProps {
  recommendations: Mood;
}

const LightAnimationGroup: React.FC<LightAnimationGroupProps> = ({
  recommendations,
}) => {
  const { browserInfo } = useBrowserInfo();
  const { height, width } = useViewportSize();
  const lights = getLights(recommendations);

  return !browserInfo.isMobile ? (
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
  ) : null;
};

export default LightAnimationGroup;
