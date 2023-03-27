import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Group,
  Navbar,
  Select,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Accordion } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getBranches, getDepartments } from "../data/DashboardDao";
import { AppStateContext } from "../context/AppStateContext";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    selectedBranch,
    setSelectedBranch,
    selectedDepartment,
    setSelectedDepartment,
    opened,
    setOpened,
  } = useContext(AppStateContext);

  const [branches, setBranches] = useState(null);
  const [departments, setDepartments] = useState(null);
  const theme = useMantineTheme();

  const getColor = (color) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  useEffect(() => {
    getBranches().then((ret) => {
      setBranches(ret);
    });
  }, []);

  useEffect(() => {
    getDepartments().then((ret) => {
      setDepartments(ret);
    });
  }, []);

  const branchesSelector = () => {
    return (
      <Stack
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Select
          size={"xs"}
          label={t("label.branches")}
          placeholder={t("label.selectItem")}
          value={selectedBranch}
          onChange={(e) => {
            //setSelectedBranch(e);
            setOpened(false);
          }}
          data={branches ? branches : []}
          disabled={branches ? false : true}
        />
      </Stack>
    );
  };

  const departmentSelector = () => {
    return (
      <Stack
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Select
          size={"xs"}
          label={t("label.department")}
          placeholder={t("label.selectItem")}
          data={departments ? departments : []}
          disabled={departments ? false : true}
          value={selectedDepartment}
          onChange={(e) => {
            setSelectedDepartment(e);
            setOpened(false);
          }}
        />
      </Stack>
    );
  };

  return (
    <Navbar.Section grow mt="xs">
      <Accordion variant="contained">
        <Accordion.Item value="products">
          <Accordion.Control
            onClick={() => {
              navigate("/stores");
            }}
            // icon={<IconBuilding size={20} color={getColor("blue")}/>}
          >
            {t("options.products")}
          </Accordion.Control>
          <Accordion.Panel>{branchesSelector()}</Accordion.Panel>
          <Accordion.Panel>{departmentSelector()}</Accordion.Panel>
          <Accordion.Panel>
            <Group grow>
              <Button
                onClick={() => {
                  if (opened) {
                    setOpened(false);
                  }
                  navigate("/notExhibited");
                }}
              >
                <Text>{t("button.withoutPosition")}</Text>
              </Button>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Navbar.Section>
  );
};

export default CustomNavbar;
