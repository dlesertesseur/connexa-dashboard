import { createStyles, Text, Card, RingProgress, Group, UnstyledButton, SimpleGrid, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function StatsRingCard({
  title = "<no title>",
  unit="SKU",
  completed = 1,
  total = 100,
  stats = [],
  color = "blue",
  onPress,
  disabled = true,
}) {
  const { t } = useTranslation();
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Stack spacing={0}>
        <Text className={classes.label}>{stat.value}</Text>
        <Text size="xs" color="dimmed">
          {stat.label}
        </Text>
      </Stack>
    </div>
  ));

  return (
    <UnstyledButton onClick={onPress} disabled={disabled}>
      <Card withBorder p="xs" radius="md" className={classes.card}>
        <Group sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text fz="xl" className={classes.label}>
            {title}
          </Text>
          <Text fz="xs" color="dimmed">
            {t("label.unit") + " [ "+unit+" ]"}
          </Text>
        </Group>
        <SimpleGrid
          className={classes.inner}
          cols={2}
          spacing="lg"
          breakpoints={[{ minWidth: "lg", cols: 1, spacing: "sm" }]}
        >
          <Stack spacing={"xs"} justify={"center"}>
            <Group mt="xs" h={"100%"} sx={{ alignItems: "center" }}>
              <Stack spacing={0}>
                <Text className={items.length ? classes.lead : classes.leadXl}>{total}</Text>
                <Text fz="xs" color="dimmed" >
                  {t("statsRing.total")}
                </Text>
              </Stack>
              <Stack spacing={0} ml={items.length ? 0 : 25}>
                <Text className={items.length ? classes.lead : classes.leadXl}>{completed}</Text>
                <Text fz="xs" color="dimmed">
                  {t("statsRing.completed")}
                </Text>
              </Stack>
            </Group>

            <Group mt="xs">{items}</Group>
          </Stack>

          <Stack spacing={"xs"} sx={{ justifyContent: "center", alignItems: "center" }}>
            <RingProgress
              roundCaps
              thickness={6}
              size={150}
              sections={[{ value: (completed / total) * 100, color: color }]}
              label={
                <div>
                  <Text ta="center" fz="lg" className={classes.label}>
                    {((completed / total) * 100).toFixed(1)}%
                  </Text>
                </div>
              }
            />
          </Stack>
        </SimpleGrid>
      </Card>
    </UnstyledButton>
  );
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
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

  leadXl: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 1,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  ring: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.fn.smallerThan("xs")]: {
      justifyContent: "center",
      marginTop: theme.spacing.md,
    },
  },
}));
