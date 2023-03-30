import React, { useEffect, useState } from "react";
import WoRow from "../components/WoRow";
import OperatorCard from "../components/OperatorCard";
import { Button, Divider, Group, Paper, ScrollArea, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getWO } from "../data/DashboardDao";

const WorkOrderDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const theme = useMantineTheme();

  const [parentHeight, setParentHeight] = useState(window.innerHeight - 380 + "px");

  useEffect(() => {
    const params = { woId: state.woId };
    getWO(params).then((ret) => {
      setData(ret);
    });
  }, []);

  const createRows = () => {
    const ret = data?.tareas?.map((tarea) => {
      return <WoRow key={tarea.linea} task={tarea} />;
    });

    return ret;
  };

  return (
    <Paper>
      <Group p={"xs"}>
        <Title order={4}>{(t("page.workOrderDetail.title") + " - " + state.woId).toUpperCase()}</Title>
      </Group>
      <Divider />
      <OperatorCard operator={data} />
      <Divider />
      <Stack>
        <ScrollArea h={parentHeight} p={"xs"}>
          {data ? createRows() : null}
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

export default WorkOrderDetail;
