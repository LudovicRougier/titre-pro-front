import Link from "next/link";
import Image from "next/image";
import { Title, Text } from "@mantine/core";

import s from "./style.module.css";

interface teamProfileProps {
  image: string;
  link: string;
  name: string;
  title: string;
  quote: string;
}

const TeamProfile: React.FC<teamProfileProps> = ({
  image,
  link,
  name,
  title,
  quote,
}) => {
  return (
    <div className={s.teamContentDev}>
      <Link href={link}>
        <Image
          src={`/images/${image}.jpeg`}
          alt={`Picture of ${name}`}
          width={150}
          height={150}
          className={s.teamContentDevImg}
        />
      </Link>
      <div className={s.teamContentDevText}>
        <Title order={3} fw={300} size="xm">
          {name}
        </Title>
        <Text weight={300} size="xs">
          {title}
        </Text>
      </div>
      <Text size="xs" italic>
        &quot;{quote}&quot;
      </Text>
    </div>
  );
};

export default TeamProfile;
