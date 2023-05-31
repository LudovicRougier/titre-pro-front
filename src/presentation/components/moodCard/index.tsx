import { MoodModel } from "@/domain/model/Mood";
import {
  Badge,
  Button,
  Paper,
  Group,
  Text,
  BackgroundImage,
  Blockquote,
  Container,
} from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

interface MoodCardProps {
  mood: MoodModel;
}

export const MoodCard: React.FC<MoodCardProps> = ({ mood }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);

  const handleHoverEnter = () => setHovered(true);
  const handleHoverLeave = () => setHovered(false);
  const handleHoverTitleEnter = () => setHoveredTitle(true);
  const handleHoverTitleLeave = () => setHoveredTitle(false);

  const handleClickDetails = () => router.push(`/mood/${mood.id}`);
  const handleClickMovie = () => router.push(`/movie/${mood.movies[0].id}`);

  const movie = mood?.movies[0];
  const emotion = mood?.mainEmotion;
  const date = new Date(mood?.date);
  const userInput = mood?.userInput;

  return (
    <>
      <Paper
        shadow="md"
        radius="lg"
        onClick={handleClickMovie}
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        style={{ cursor: "pointer" }}
      >
        <BackgroundImage
          radius="md"
          src={
            movie?.backdropPath ??
            "https://film-grab.com/wp-content/uploads/photo-gallery/White_Noise_27.jpg?bwg=1680018251"
          }
        >
          <Container
            bg={`rgba(0, 0, 0, ${hovered ? "0.4" : "0.55"})`}
            px={0}
            style={{
              transition: "0.5s",
              backdropFilter: `blur(5px)`,
              borderRadius: "0.5rem",
            }}
          >
            <Group position="apart" mt="md" mb="xs" p="md">
              <Text
                weight={600}
                size={20}
                onClick={handleClickMovie}
                onPointerEnter={handleHoverTitleEnter}
                onPointerLeave={handleHoverTitleLeave}
                style={{
                  transition: "0.5s",
                  cursor: "pointer",
                  opacity: hoveredTitle ? 1 : 0.8,
                }}
              >
                {movie?.title ?? "White Noise"}
              </Text>
              <Badge color={emotion?.color ?? "gray"} variant="light">
                {emotion?.name ?? "Neutral"}
              </Badge>
            </Group>

            <Group position="left" mt="md" mb="xs" p="md">
              <Blockquote cite="– me, myself and I">
                {userInput ??
                  "Life is like an npm install – you never know what you are going to get."}
              </Blockquote>
            </Group>

            <Group position="right" mt="md" mb="xs" p="md">
              <Button
                variant="light"
                color="gray"
                mt="md"
                radius="md"
                onClick={handleClickDetails}
                style={{ transition: "0.5s" }}
              >
                Details
              </Button>
            </Group>
          </Container>
        </BackgroundImage>
      </Paper>
      <Text size="xs" mt={4}>
        {date.toLocaleDateString()}
      </Text>
    </>
  );
};
