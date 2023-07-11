import React from "react";
import { Title } from "@mantine/core";

import TeamProfile from "@/presentation/components/teamProfile";

import type { NextPage } from "next";

import s from "./style.module.css";

const Team: NextPage = () => {
  return (
    <div className={s.team}>
      <Title order={1} size="1.75rem">
        Meet the team !
      </Title>
      <div className={s.teamContent}>
        <TeamProfile
          image="vincent"
          link="https://www.linkedin.com/in/vincent-duch%C3%AAne-18b04597/"
          name="Vincent Duchêne"
          title="Product Owner / Dev Front"
          quote="Téma mon archi !"
        />
        <TeamProfile
          image="philemon"
          link="https://www.linkedin.com/in/philcayla/"
          name="Philémon Cayla"
          title="Lead Front"
          quote="Euh... Hum... Voilà !"
        />
        <TeamProfile
          image="ludovic"
          link="https://www.linkedin.com/in/ludovic-rougier-682259143/"
          name="Ludovic Rougier"
          title="Scrum Master / Dev Back"
          quote="J'peux t'embêter...?"
        />
        <TeamProfile
          image="julien"
          link=""
          name="Julien Gassman"
          title="Lead Back"
          quote="Vous pensez pas que...?"
        />
      </div>
    </div>
  );
};

export default Team;
