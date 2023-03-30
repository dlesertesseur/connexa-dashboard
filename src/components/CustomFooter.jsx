import { Group, Text } from "@mantine/core";
import React from "react";
import { DIMENSION } from "../data/Constats";

const CustomFooter = () => {
  return (
    <Group grow h={DIMENSION.FOOTER_HEIGHT}> 
      <Text color="dimmed" size="sm" m={"xs"}>
        © 2022 zeetrex All rights reserved.
      </Text>
    </Group>
  );
};

export default CustomFooter;
