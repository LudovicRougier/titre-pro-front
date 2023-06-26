import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Timeline, Container, Center } from "@mantine/core";
import { MoodCard } from "@/presentation/components/moodCard";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Session, getServerSession } from "next-auth";
import { useViewModel } from "@/presentation/viewModel/moodHistory";
import { UiMessages } from "@/utils/enums/UiMessages.enum";

interface MoodHistoryProps {
  user: Session | null;
}

const MoodHistory: NextPage<MoodHistoryProps> = ({ user }) => {
  const { moodHistory } = useViewModel(user?.user.id ?? 0);

  return (
    <Container>
      {moodHistory.length === 0 ? (
        <Center>
          <h2>{UiMessages.NO_HISTORY}</h2>
        </Center>
      ) : null}
      <Timeline active={4} bulletSize={12} lineWidth={2} color="gray">
        {moodHistory &&
          moodHistory.map((mood) => {
            return (
              <Timeline.Item key={mood.id}>
                <MoodCard mood={mood} />
              </Timeline.Item>
            );
          })}
      </Timeline>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      user: session,
    },
  };
};

export default MoodHistory;
