import React from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Badge,
  Card,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconEqual,
} from "@tabler/icons-react";
import { useState } from "react";

const OperatorRow = ({ operator, height = 96, onPress }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [valueAnt, setValueAnt] = useState(0);

  return (
    <Group grow mb={"xs"}>
      <UnstyledButton
        onClick={onPress}
        disabled={value || value > 0 ? false : true}
      >
        <Card shadow="sm" padding="xs" radius="md" withBorder>
          <Group spacing={"xs"}>
            <Group>
              <Avatar
                src={"https://picsum.photos/64/64"}
                size={height}
                radius="xs"
              />
            </Group>
            <Group position="apart">
              <Stack
                align="flex-start"
                justify="flex-start"
                spacing={0}
                h={height}
                w={300}
              >
                <Text fw={600} fz="md">
                  {operator.name}
                </Text>
                <Group>
                  <Text fw={600} fz="xs" c={"gray.8"} >
                    {t("label.profile") + ": " + operator.legajo}
                  </Text>
                </Group>
                <Group>
                  <Text fw={600} fz="xs" c={"gray.8"} mb={"xs"}>
                    {t("label.branch") + ": " + operator.sucursal}
                  </Text>
                </Group>
                <Group>
                  <Badge
                    size="sm"
                    variant="filled"
                    bg={operator.empresa === "Interno" ? "red" : "blue"}
                  >
                    {operator.empresa}
                  </Badge>
                </Group>
              </Stack>
            </Group>
            <Divider orientation="vertical" />
            <Stack
              align="flex-start"
              justify="flex-start"
              spacing={0}
              h={height}
            >
              <Group position="center" spacing={"xs"}>
                <Text fw={700} fz="md">
                  {t("label.workOrder") + ":"}
                </Text>
                <Text fw={500} fz="md">
                  {operator.work_order_type}
                </Text>
              </Group>
              <Group position="center" spacing={"xs"}>
                <Text fw={700} fz="md">
                  {t("label.woStatus") + ":"}
                </Text>
                <Text fw={500} fz="md">
                  {operator.status}
                </Text>
              </Group>
              <Group position="center" spacing={"xs"}>
                <Text fw={700} fz="md">
                  {t("label.position") + ":"}
                </Text>
                <Text fw={500} fz="md">
                  {operator.position}
                </Text>
              </Group>
              <Group position="center" spacing={"xs"}>
                <Text fw={700} fz="md">
                  {t("label.shelf") + ":"}
                </Text>
                <Text fw={500} fz="md">
                  {operator.shelf}
                </Text>
              </Group>
            </Stack>
          </Group>
        </Card>
      </UnstyledButton>
    </Group>
  );
};

export default OperatorRow;
