import React, { useEffect, useState } from "react";
import { Button, Divider, Group, Paper, ScrollArea, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getQuadrantData } from "../data/DashboardDao";
import { DIMENSION } from "../data/Constats";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";
import OperatorRow from "../components/OperatorRow";

const QuadrantDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const { title, quadrant } = state;
  const [data, setData] = useState([]);
  const theme = useMantineTheme();
  const { config } = useContext(AppStateContext);

  const [parentHeight, setParentHeight] = useState(window.innerHeight - (342 - DIMENSION.OPERATOR_CARD) + "px");

  useEffect(() => {
    const params = { quadrant: quadrant };
    getQuadrantData(params).then((ret) => {
      setData(ret);
    });
  }, []);

  const createRows = () => {
    const ret = data.map((oper) => {
      return <OperatorRow key={oper.legajo} operator={oper} config={config}/>;
    });

    return ret;
  };

  return (
    <Paper>
      <Group p={"xs"}>
        <Title order={4} h={DIMENSION.TITLE_HEIGHT}>
          {t("statsActivity." + quadrant).toUpperCase()}{" "}
        </Title>
      </Group>
      <Divider />
      <Stack spacing={0}>
        <ScrollArea h={parentHeight} p={"xs"}>
          {createRows()}
        </ScrollArea>
        <Group position="right" p={"xs"} >
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
