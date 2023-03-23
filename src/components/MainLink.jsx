import React from 'react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

export function MainLink({ icon, color, label, onPress}) {
  return (
    <UnstyledButton
      onClick={onPress}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text fw={500} size="md">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
