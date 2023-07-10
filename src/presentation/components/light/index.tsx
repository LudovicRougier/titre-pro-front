interface LightComponent {
  gradients?: string[] | undefined;
  emotionColor?: string | undefined | null;
  opacity: number;
  blur: number;
  size: number;
}

const Light: React.FC<LightComponent> = ({
  emotionColor,
  opacity,
  blur,
  size,
}) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${emotionColor}`,
        filter: `blur(${blur}px)`,
        borderRadius: "100%",
        opacity,
      }}
    />
  );
};

export default Light;
