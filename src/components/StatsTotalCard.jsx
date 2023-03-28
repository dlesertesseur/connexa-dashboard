import React from "react";
import { useTranslation } from "react-i18next";
import {
  createStyles,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconEqual,
} from "@tabler/icons-react";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const StatsTotalCard = ({ title, data }) => {
  const { t } = useTranslation();
  const { classes, theme } = useStyles();
  const [value, setValue] = useState(0);
  const [valueAnt, setValueAnt] = useState(0);

  useEffect(() => {
    if (data) {
      // console.log("value:",value, "valueAnt:", valueAnt, "localDiff:", localDiff);
      setValue(data.length);
      setValueAnt(value);
    }
  }, [data]);

  const getIcon = () => {
    let DiffIcon = null;
    let iconColor = null;
    
    if (value > valueAnt) {
      DiffIcon = IconArrowUpRight;
      iconColor = theme.colors.teal[6];
    } else {
      if (value < valueAnt) {
        DiffIcon = IconArrowDownRight;
        iconColor = theme.colors.red[6];
      } else {
        DiffIcon = IconEqual;
        iconColor = theme.colors.blue[6];
      }
    }

    return (
      <ThemeIcon
        color="gray"
        variant="light"
        sx={(theme) => ({
          color: iconColor,
        })}
        size={38}
        radius="md"
      >
        <DiffIcon size={32} stroke={1.5} />
      </ThemeIcon>
    );
  };

  return (
    <Paper withBorder p="xs" radius="md" key={title}>
      <Stack spacing={"xs"}>
        <Group position="apart">
          <Group>
            <Text
              c="dimmed"
              tt="uppercase"
              fw={700}
              fz="xs"
              className={classes.label}
            >
              {t("statsActivity." + title)}
            </Text>
          </Group>
          <Group>{getIcon()}</Group>
        </Group>

        <Group position="center">
          <Text fw={600} sx={{ fontSize: 46 }}>
            {value ? value : "0"}
          </Text>
        </Group>
        {/* <Text c="dimmed" fz="sm" mt="md">
        <Text component="span" c={stat.diff > 0 ? "teal" : "red"} fw={700}>
          {stat.diff}%
        </Text>{" "}
        {stat.diff > 0 ? "increase" : "decrease"} compared to last month
      </Text> */}
      </Stack>
    </Paper>
  );
};

export default StatsTotalCard;
