import {
  createStyles,
  Text,
  Card,
  RingProgress,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function StatsRingCard({
  title = "<no title>",
  completed = 1,
  total = 100,
  stats = [],
  color = "blue",
  onPress
}) {
  const { t } = useTranslation();
  const { classes, theme } = useStyles();
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <UnstyledButton onClick={onPress} disabled={onPress ? false : true}>
      <Card withBorder p="xl" radius="md" className={classes.card}>
        <div className={classes.inner}>
          <div>
            <Text fz="xl" className={classes.label}>
              {title}
            </Text>

            <Group mt="lg">
              <div>
                <Text className={classes.lead} mt={30}>
                  {total}
                </Text>
                <Text fz="xs" color="dimmed">
                  {t("statsRing.total")}
                </Text>
              </div>
              <div>
                <Text className={classes.lead} mt={30}>
                  {completed}
                </Text>
                <Text fz="xs" color="dimmed">
                  {t("statsRing.completed")}
                </Text>
              </div>
            </Group>

            <Group mt="lg">{items}</Group>
          </div>

          <div className={classes.ring}>
            <RingProgress
              roundCaps
              thickness={6}
              size={150}
              sections={[
                { value: (completed / total) * 100, color: color },
              ]}
              label={
                <div>
                  <Text ta="center" fz="lg" className={classes.label}>
                    {((completed / total) * 100).toFixed(0)}%
                  </Text>
                </div>
              }
            />
          </div>
        </div>
      </Card>
    </UnstyledButton>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
  },

  inner: {
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  ring: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",

    [theme.fn.smallerThan("xs")]: {
      justifyContent: "center",
      marginTop: theme.spacing.md,
    },
  },
}));