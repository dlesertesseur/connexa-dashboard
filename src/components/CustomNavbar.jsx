import React from "react";
import { Navbar, Stack } from "@mantine/core";
import { IconBarcode, IconBuilding } from "@tabler/icons-react";
import { MainLink } from "./MainLink";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar.Section grow mt="md">
      <Stack spacing="xs">
        <MainLink icon={<IconBuilding size="1rem" />} color={"blue"} label={"Sucursales"} onPress={() => {navigate("/stores")}} />
        <MainLink icon={<IconBarcode size="1rem" />} color={"blue"} label={"Reposicion"} onPress={() => {navigate("/replacement")}} />
      </Stack>
    </Navbar.Section>
  );
};

export default CustomNavbar;
