import React from "react";
import {
  BackgroundImage,
  Badge,
  Center,
  Container,
  Group,
} from "@mantine/core";

import { Star1, Calendar, Clock } from "iconsax-react";

import s from "./style.module.css";

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  return (
    <Center style={{ height: "100%" }}>
      <BackgroundImage
        src="https://film-grab.com/wp-content/uploads/2019/11/Avatar-059.jpg"
        className={s.card}
      >
        <Container className={s.cardInner}>
          <div className={s.cardBody}>
            <div className={s.cardTitle}>avatar</div>
            <div className={s.cardDirector}>Director</div>
            <div>
              <ul className={s.cardIcons}>
                <li className={s.cardIconPair}>
                  <Star1 size={16} />
                  <span className={s.cardSubText}>4.8</span>
                </li>
                <li className={s.cardIconPair}>
                  <Calendar size={16} />
                  <span className={s.cardSubText}>2013</span>
                </li>
                <li className={s.cardIconPair}>
                  <Clock size={16} />
                  <span className={s.cardSubText}>2h45</span>
                </li>
              </ul>
            </div>
            <div className={s.cardSlug}>
              Sur le monde extraterrestre luxuriant de Pandora vivent les Navi,
              des êtres qui semblent primitifs, mais qui sont très évolués.
              Voilà voilà, allez le voir !
            </div>
            <Group className={s.cardActors}>
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
