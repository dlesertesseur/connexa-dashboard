import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Badge, Card, Group, RingProgress, Stack, Text, UnstyledButton } from "@mantine/core";

import { OT_TYPE } from "../data/Constats";
import { useNavigate } from "react-router-dom";

const OperatorRow = ({ operator, height = 96, config }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onPress = () => {
    navigate("./workOrderDetail", {
      state: { woId: operator.work_order_number, legajo: operator.legajo },
    });
  };

  return (
    <Group grow mb={"xs"}>
      <UnstyledButton
        onClick={onPress}
        disabled={
          operator.task !== OT_TYPE.OPERANDO &&
          operator.task !== OT_TYPE.EN_CORTE &&
          operator.task !== OT_TYPE.FIN_DE_JORNADA
            ? false
            : true
        }
      >
        <Card shadow="sm" padding="xs" radius="md" withBorder>
          <Group spacing={"xs"} sx={{ justifyContent: "space-between" }}>
            <Group>
              <Group>
                <Avatar src={config.assetsPath + "photo/" + operator.legajo + ".png"} size={height} radius="xs" />
              </Group>
              <Group>
                <Stack align="flex-start" justify="flex-start" spacing={0} h={height}>
                  <Text fw={600} fz="md">
                    {operator.name}
                  </Text>
                  <Group>
                    <Text fw={600} fz="xs" c={"gray.8"}>
                      {t("label.profile") + ": " + operator.legajo}
                    </Text>
                  </Group>
                  <Group>
                    <Text fw={600} fz="xs" c={"gray.8"} mb={"xs"}>
                      {t("label.branch") + ": " + operator.sucursal}
                    </Text>
                  </Group>
                  <Group>
                    <Badge size="sm" variant="filled" bg={operator.empresa === "Interno" ? "red" : "blue"}>
                      {operator.empresa}
                    </Badge>
                  </Group>
                </Stack>
              </Group>
            </Group>

            <Stack align="flex-start" justify="flex-start" spacing={0} h={height}>
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
              {operator.task !== OT_TYPE.OPERANDO &&
              operator.task !== OT_TYPE.EN_CORTE &&
              operator.task !== OT_TYPE.FIN_DE_JORNADA ? (
                <Group position="center" spacing={"xs"}>
                  <Text fw={700} fz="md">
                    {t("label.shelf") + ":"}
                  </Text>
                  <Text fw={500} fz="md">
                    {operator.shelf}
                  </Text>
                </Group>
              ) : null}
            </Stack>

            <Stack spacing={"xs"} sx={{ justifyContent: "center", alignItems: "center" }}>
              <RingProgress
                roundCaps
                thickness={6}
                size={height}
                sections={[{ value: eval(operator.porcentaje), color: "teal" }]}
                label={
                  <div>
                    <Text ta="center" fz="md" fw={700}>
                      {eval(operator.porcentaje).toFixed(1)}%
                    </Text>
                  </div>
                }
              />
            </Stack>
          </Group>
        </Card>
      </UnstyledButton>
    </Group>
  );
};

export default OperatorRow;
