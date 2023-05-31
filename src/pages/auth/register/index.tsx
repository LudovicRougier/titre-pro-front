import { GetServerSideProps, NextPage } from "next";
import { Container, Center } from "@mantine/core";
import { getSession } from "next-auth/react";
import { Path } from "@/shared/enums/path";

const Register: NextPage = () => {
  return (
    <Container size={420} my={40}>
      <Center>TODO</Center>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: Path.HOME,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Register;
