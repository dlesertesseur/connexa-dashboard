import React, { useEffect, useRef, useState } from "react";
import { Button, Group, Paper, Stack, Table, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getNotExhibitedItems } from "../data/DashboardDao";
import DataTable from "react-data-table-component";

const NotExhibited = () => {

  const [items, setItems] = useState([]);
  const [parentHeight, setParentHeight] = useState((window.innerHeight - 300) + "px");

  useEffect(() => {
    getNotExhibitedItems().then((ret) => {
      console.log(ret);
      setItems(ret);
    });
  }, []);

  const navigate = useNavigate();
  const { t } = useTranslation();

  const cols = t("notExhibited.columns", { returnObjects: true });

  const columns = [
    {
      name: cols[0],
      selector: (row) => row.sku,
      sortable: true,
      width:"100px"
    },
    {
      name: cols[1],
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: cols[2],
      selector: (row) => row.department,
      sortable: true,
      width:"200px"
    },
    {
      name: cols[3],
      selector: (row) => row.family,
      sortable: true,
      width:"200px"
    },
  ];

  return (
    <Paper>
      <Stack>
        {items ? (
          <DataTable
            title={"Productos sin exhibicion en gondola"}
            columns={columns}
            data={items}
            fixedHeader
            dense
            highlightOnHover
            // selectableRows
            // selectableRowsHighlight
            // selectableRowsSingle
            fixedHeaderScrollHeight={parentHeight}
          />
        ) : null}

        <Group position="right">
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

export default NotExhibited;
