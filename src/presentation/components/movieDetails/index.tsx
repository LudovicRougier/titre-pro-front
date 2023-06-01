import React from "react";
import {
  createStyles,
  BackgroundImage,
  Badge,
  Center,
  Container,
  Group,
} from "@mantine/core";

import { Star1, Calendar, Clock } from "iconsax-react";

const useStyles = createStyles(() => ({
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
    width: "100%",
    minHeight: "100%",
    "&:after": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: "0.5rem",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(15,15,15, 1) 45%, rgba(15,15,15, 0.8) 60%, rgba(15,15,15, 0.2) 100%)",
    },
  },
  cardInner: {
    position: "absolute",
    zIndex: 2,
    top: "25%",
    left: "10%",
    height: "100%",
  },
  cardBody: {
    width: "50%",
  },
  cardTitle: {
    fontSize: "3rem",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  cardDirector: {
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
  },
  cardSlug: {
    marginBottom: "1rem",
    fontSize: "0.9rem",
  },
  cardIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "0.8rem",
  },
  cardIconPair: {
    display: "flex",
    gap: "0.5rem",
  },
  cardSubText: {
    fontSize: "0.7rem",
    margin: "auto",
  },
  cardActors: {
    fontStyle: "italic",
    fontWeight: 200,
    fontSize: "0.9rem",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  },
}));

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { classes } = useStyles();
  return (
    <Center style={{ height: "100%" }}>
      <BackgroundImage
        src="https://film-grab.com/wp-content/uploads/2019/11/Avatar-059.jpg"
        className={classes.card}
      >
        <Container className={classes.cardInner}>
          <div className={classes.cardBody}>
            <div className={classes.cardTitle}>avatar</div>
            <div className={classes.cardDirector}>Director</div>
            <div>
              <ul className={classes.cardIcons}>
                <li className={classes.cardIconPair}>
                  <Star1 size={16} />
                  <span className={classes.cardSubText}>4.8</span>
                </li>
                <li className={classes.cardIconPair}>
                  <Calendar size={16} />
                  <span className={classes.cardSubText}>2013</span>
                </li>
                <li className={classes.cardIconPair}>
                  <Clock size={16} />
                  <span className={classes.cardSubText}>2h45</span>
                </li>
              </ul>
            </div>
            <div className={classes.cardSlug}>
              Sur le monde extraterrestre luxuriant de Pandora vivent les Navi,
              des êtres qui semblent primitifs, mais qui sont très évolués.
              Voilà voilà, allez le voir !
            </div>
            <Group className={classes.cardActors}>
              <span>Brad Pitt,</span>
              <span>Dick Grayson,</span>
              <span>Jack Sparrow</span>
            </Group>
            <div>
              <Group>
                <Badge color="red">Action</Badge>
                <Badge color="violet">Aventure</Badge>
                <Badge color="grape">Drama</Badge>
              </Group>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </Center>
  );
};

export default MovieDetails;
