import React from "react";
import { useMantineColorScheme, ActionIcon, Image, Flex } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { DIMENSION } from "../data/Constats";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";

const CustomHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { config } = useContext(AppStateContext);

  return (
    <Flex justify={"space-between"} dir={"row"} w={"100%"} align={"center"} h={DIMENSION.HEADER_HEIGHT}>
      <Image maw={240} src={config.assetsPath + "connexa_logo.png"} alt="logo" />

      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === "dark" ? <IconSun size={24} /> : <IconMoonStars size={24} />}
      </ActionIcon>
    </Flex>
  );
};

export default CustomHeader;
