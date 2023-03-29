import React, { useEffect, useState } from "react";
import { Avatar, Button, Group, Paper, ScrollArea, Stack, Text, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getQuadrantData } from "../data/DashboardDao";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

const QuadrantDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const { title, quadrant } = state;
  const [data, setData] = useState([]);
  const theme = useMantineTheme();

  const [parentHeight, setParentHeight] = useState(window.innerHeight - 220 + "px");

  useEffect(() => {
    const params = { quadrant: quadrant };
    getQuadrantData(params).then((ret) => {
      setData(ret);
    });
  }, []);

  const createRows = () => {
    const ret = data.map((oper) => {
      return (
        <Group grow bg={"yellow"} m={5}>
          <Group noWrap>
            <Avatar src={"https://picsum.photos/64/64"} size={64} radius="md" />
            <div>
              <Text fz="lg" fw={500} sz={{fontFamily: `Greycliff CF, ${theme.fontFamily}`}}>
                {oper.name}
              </Text>

              <Group noWrap spacing={10} mt={3}>
                <IconAt stroke={1.5} size={16} sx={(theme) => ({color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5]})} />
                <Text fz="xs" c="dimmed">
                  {oper.work_order_type}
                </Text>
              </Group>

              <Group noWrap spacing={10} mt={5}>
                <IconPhoneCall stroke={1.5} size={16} sx={(theme) => ({color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5]})} />
                <Text fz="xs" c="dimmed">
                  {oper.sku}
                </Text>
              </Group>
            </div>
          </Group>
        </Group>
      );
    });

    return ret;
  };

  return (
    <Paper>
      <Stack>
        <ScrollArea h={parentHeight} p={"xs"}>
          {createRows()}
        </ScrollArea>
        <Group position="right" p={"xs"}>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            <Text>{t("button.back")}</Text>
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default QuadrantDetail;
