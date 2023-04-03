import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Badge, Card, Group, Image, Stack, Text, UnstyledButton } from "@mantine/core";

import { OT_TYPE } from "../data/Constats";
import { useNavigate } from "react-router-dom";

const WoRow = ({ task, height = 96, config }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onPress = () => {
    // navigate("./workOrderDetail", {
    //   state: { woId: operator.work_order_number, legajo: operator.legajo },
    // });
  };

  return (
    <Group grow mb={"xs"}>
      <UnstyledButton onClick={onPress} disabled={true}>
        <Card shadow="sm" padding="xs" radius="md" withBorder>
          <Group spacing={"xs"}>
            <Group w={height} sx={{ justifyContent: "center", alignItems: "center" }}>
              <Group>
                <Image
                  src={config.assetsPath + "sku/" + task.sku.split(" ")[0] + ".jpg"}
                  size={height}
                  radius="xs"
                  withPlaceholder
                  placeholder={
                    <Group w={height} h={height}>
                      <Text align="center">Sin imagen</Text>
                    </Group>
                  }
                />
              </Group>
            </Group>
            <Group position="apart">
              <Stack align="flex-start" justify="space-between" spacing={0} h={height}>
                <Stack spacing={0}>
                  <Text fw={600} fz="md">
                    {task.sku}
                  </Text>
                  <Text fw={600} fz="xs" c={"gray.8"}>
                    {t("label.position") + ": " + task.posicion}
                  </Text>
                </Stack>
                <Group>
                  <Badge size="sm" variant="filled" bg={"teal"}>
                    {task.cantidad}
                  </Badge>
                </Group>
              </Stack>
            </Group>
          </Group>
        </Card>
      </UnstyledButton>
    </Group>
  );
};

export default WoRow;
