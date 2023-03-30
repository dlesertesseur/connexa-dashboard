import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getQuadrantData } from "../data/DashboardDao";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import OperatorCard from "../components/OperatorCard";
import OperatorRow from "../components/OperatorRow";

const WorkOrderDetail = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const theme = useMantineTheme();

  const [parentHeight, setParentHeight] = useState(
    window.innerHeight - 220 + "px"
  );

  // useEffect(() => {
  //   const params = { quadrant: quadrant };
  //   getQuadrantData(params).then((ret) => {
  //     setData(ret);
  //   });
  // }, []);

  const createRows = () => {
    const ret = data.map((oper) => {
      return <OperatorRow key={oper.legajo} operator={oper} />;
    });

    return ret;
  };

  return (
    <Paper>
      <Group p={"xs"}>
        <Title order={4}>{t("page.workOrderDetail.title")}</Title>
      </Group>
      <Divider />
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

export default WorkOrderDetail;
