import React from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Badge,
  Card,
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
import { useEffect } from "react";

const OperatorCard = ({ operator, onPress }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [valueAnt, setValueAnt] = useState(0);

  return (
    <UnstyledButton
      onClick={onPress}
      disabled={value || value > 0 ? false : true}
    >
      <Card shadow="sm" padding="xs" radius="md" withBorder>
        <Stack spacing={"xs"}>
          <Group position="apart">
            <Stack spacing={0}>
              <Text fw={600} fz="md">
                {operator.name}
              </Text>

              <Group>
                <Badge size="sm" variant="filled">
                  {operator.empresa}
                </Badge>
                <Text fw={600} fz="xs">
                  {operator.legajo}
                </Text>
              </Group>
            </Stack>
            <Group>
              <Avatar
                src={"https://picsum.photos/64/64"}
                size={48}
                radius="xs"
              />
            </Group>
          </Group>

          <Group position="center">
            <Text fw={600} fz="xs">
              {operator.task}
            </Text>
          </Group>
        </Stack>
      </Card>
    </UnstyledButton>
  );
};

export default OperatorCard;
