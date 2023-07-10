import { motion } from "framer-motion";
import SVGComponent from "@/presentation/components/blob/SVGComponent";

import s from "./style.module.css";

interface BlobComponent {
  gradients?: string[] | undefined;
  emotionColor?: string | undefined | null;
  opacity: number;
  blur: number;
  size: number;
}

const Blob: React.FC<BlobComponent> = ({
  gradients,
  emotionColor,
  opacity,
  blur,
  size,
}) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -550,
        left: -550,
        right: 550,
        bottom: 550,
      }}
      whileDrag={{
        cursor: "grabbing",
      }}
      whileTap={{
        scale: 1.5,
      }}
      dragSnapToOrigin
      className={s.blob}
    >
      <SVGComponent
        gradients={gradients}
        emotionColor={emotionColor}
        opacity={opacity}
        blur={blur}
        size={size}
      />
    </motion.div>
  );
};

export default Blob;
