import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import CustomNavbar from "./CustomNavbar";
import CustomFooter from "./CustomFooter";
import Dashboard from "./Dashboard";
import { AppShell, Navbar, Header, Footer, MediaQuery, Burger, useMantineTheme } from "@mantine/core";

const AppFrame = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <CustomNavbar />
        </Navbar>
      }
      footer={
        <Footer height={60}>
          <CustomFooter />
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
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
  );
};

export default AppFrame;
