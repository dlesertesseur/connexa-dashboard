import { Group, Text } from "@mantine/core";
import React from "react";

const CustomFooter = () => {
  return (
    <Group grow> 
      <Text color="dimmed" size="sm" m={"xs"}>
        © 2022 zeetrex All rights reserved.
      </Text>
    </Group>
  );
};

export default CustomFooter;
