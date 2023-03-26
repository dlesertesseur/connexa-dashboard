import { Group, Image } from "@mantine/core";
import React from "react";

const CustomHeader = () => {
  return (
    <Group position="left" grow>
      <Image maw={240} src={"/connexa_logo.png"} alt="logo" />

    </Group>
  );
};

export default CustomHeader;
