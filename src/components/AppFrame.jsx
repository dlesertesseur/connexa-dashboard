import React, { createContext, useState } from "react";
import CustomHeader from "./CustomHeader";
import CustomNavbar from "./CustomNavbar";
import CustomFooter from "./CustomFooter";
import Dashboard from "./Dashboard";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { AppStateContext } from "../context/AppStateContext";

const AppFrame = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("0");
  const [selectedDepartment, setSelectedDepartment] = useState("0");

  return (
    <AppStateContext.Provider
      value={{
        selectedBranch,
        setSelectedBranch,
        selectedDepartment,
        setSelectedDepartment,
        opened,
        setOpened,
      }}
    >
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 250 }}
          >
            <CustomNavbar />
          </Navbar>
        }
        footer={
          <Footer >
            <CustomFooter />
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <CustomHeader />
            </div>
          </Header>
        }
      >
        <Dashboard />
      </AppShell>
    </AppStateContext.Provider>
  );
};

export default AppFrame;
