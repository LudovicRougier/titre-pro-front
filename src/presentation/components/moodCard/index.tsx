import { MoodModel } from "@/domain/model/Mood";
import { useMoodDependencies } from "@/shared/contexts/dependencies/mood";
import { LOCALE } from "@/shared/enums/locale";
import { useShow } from "@/shared/hooks/useShow";
import {
  Badge,
  Button,
  Paper,
  Group,
  Text,
  BackgroundImage,
  Blockquote,
  Container,
  Menu,
  Modal,
} from "@mantine/core";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

interface MoodCardProps {
  mood: MoodModel;
}

export const MoodCard: React.FC<MoodCardProps> = ({ mood }) => {
  const { removeMoodHistoryEntry } = useMoodDependencies();
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [hoveredTitle, setHoveredTitle] = useState(false);
  const {
    show: showDeleteModal,
    handleShow,
    handleClose: handleCloseDeleteModal,
  } = useShow(false);

  const handleHoverEnter = () => setHovered(true);
  const handleHoverLeave = () => setHovered(false);
  const handleHoverTitleEnter = () => setHoveredTitle(true);
  const handleHoverTitleLeave = () => setHoveredTitle(false);

  const handleShowDeleteModal = (e: MouseEvent) => {
    e.stopPropagation();
    handleShow();
  };

  const handleDeleteMood = async (userAnswer: boolean) => {
    if (userAnswer) {
      const res = await removeMoodHistoryEntry.invoke(mood.id);
      if (res !== null) handleCloseDeleteModal();
    } else handleCloseDeleteModal();
  };

  const handleClickDetails = (e: MouseEvent) => {
    e.stopPropagation();
    router.push(`/mood/${mood.id}`);
  };
  const handleClickMovie = () =>
    router.push(`/movie/${mood.moviesRelatedToEmotions[0].id}`);

  const movie = mood?.moviesRelatedToEmotions[0];
  const mainEmotion = mood?.mainEmotion;
  const subEmotion = mood?.subEmotion;
  const date = new Date(mood?.date);
  const userInput = mood?.userInput;
  const AIMessage = mood?.message;

  return (
    <>
      <Paper
        shadow="md"
        radius="lg"
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoverLeave}
        style={{ cursor: "pointer" }}
        data-test="emotion-card"
      >
        <BackgroundImage
          radius="md"
          src={
            movie.backdropPath
              ? `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${movie.backdropPath}`
              : ""
          }
          onClick={handleClickMovie}
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
                onPointerEnter={handleHoverTitleEnter}
                onPointerLeave={handleHoverTitleLeave}
                style={{
                  transition: "0.5s",
                  cursor: "pointer",
                  opacity: hoveredTitle ? 1 : 0.8,
                }}
              >
                {movie?.title ?? ""}
              </Text>
              <Badge
                variant="gradient"
                gradient={{
                  from: `${mainEmotion.color}`,
                  to: `${subEmotion?.color}`,
                  deg: 35,
                }}
              >
                {mainEmotion.translation ?? ""}
              </Badge>
            </Group>

            <Group position="left" mt="md" mb="xs" p="md">
              <Blockquote cite={AIMessage}>
                {userInput ??
                  "Life is like an npm install – you never know what you are going to get."}
              </Blockquote>
            </Group>

            <Group position="right" mt="md" mb="xs" p="md">
              <Menu
                transitionProps={{ transition: "pop-top-right" }}
                position="top-end"
                width={220}
                withinPortal
              >
                <Menu.Target>
                  <Button
                    variant="light"
                    color="gray"
                    mt="md"
                    radius="md"
                    onClick={(e) => e.stopPropagation()}
                    style={{ transition: "0.5s" }}
                    data-test="emotion-card-options"
                  >
                    ...
                  </Button>
                </Menu.Target>
                <Menu.Dropdown data-test="emotion-card-dropdown">
                  <Menu.Item
                    onClick={handleClickDetails}
                    className="emotion-card-options-details"
                  >
                    {LOCALE.VIEW_DETAILS}
                  </Menu.Item>
                  <Menu.Item
                    onClick={handleShowDeleteModal}
                    className="emotion-card-options-delete"
                  >
                    {LOCALE.DELETE}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Container>
        </BackgroundImage>
      </Paper>
      <Text size="xs" mt={4}>
        {date.toLocaleDateString()} - {date.toLocaleTimeString("fr-FR")}
      </Text>

      <Modal
        opened={showDeleteModal}
        onClose={handleCloseDeleteModal}
        title={LOCALE.CONFIRM_DELETE}
        data-test="emotion-card-modal-delete"
      >
        <Text>{LOCALE.DELETE_MOOD_CONFIRMATION}</Text>

        <Group mt="xl" position="apart" grow>
          <Button
            variant="light"
            color="gray"
            mt="md"
            radius="md"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteMood(false);
            }}
            style={{ transition: "0.5s" }}
          >
            {LOCALE.CANCEL}
          </Button>
          <Button
            variant="light"
            color="red"
            mt="md"
            radius="md"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteMood(true);
            }}
            style={{ transition: "0.5s" }}
          >
            {LOCALE.DELETE}
          </Button>
        </Group>
      </Modal>
    </>
  );
};
