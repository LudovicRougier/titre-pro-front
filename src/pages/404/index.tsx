import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  rem,
  keyframes,
} from "@mantine/core";

import { useRouter } from "next/navigation";

import Layout from "@/presentation/components/layout";
import { Path } from "@/shared/enums/path";

export const glitch = keyframes({
  "0%": { transform: "skewX(-15deg)" },
  "5%": { transform: "skewX(15deg)" },
  "10%": { transform: "skewX(-15deg)" },
  "15%": { transform: "skewX(15deg)" },
  "20%": { transform: "skewX(0deg)" },
  "100%": { transform: "skewX(0deg)" },
});

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    animation: `0.8s ${glitch} infinite alternate`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default function NotFoundTitle() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button
          variant="subtle"
          size="md"
          onClick={() => router.push(Path.INDEX)}
        >
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}

NotFoundTitle.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
