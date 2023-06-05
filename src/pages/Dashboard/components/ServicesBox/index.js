import { Anchor, Group, SimpleGrid, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import AnimatedIcon from "../../../../components/containers/AnimatedIcon";
import { services } from "../../../../data/services";
import Container from "../../../../components/containers/Container";

const ServicesBox = () => {
  return (
    <>
      <Group position="apart">
        <Text className="font-semibold">Services</Text>
        <Text className="text-xs" color="dimmed">
          powered by&nbsp;
          <Anchor href="https://lordicon.com/">Lordicon</Anchor>
        </Text>
      </Group>
      <Container style="px-2 py-4">
        <SimpleGrid cols={3}>
          {services.map((service) => (
            <UnstyledButton
              key={service.id}
              className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-md shadow-sm"
            >
              <AnimatedIcon icon={service.icon} color={service.color} />
              <Text className="mt-2 text-sm">{service.text}</Text>
            </UnstyledButton>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ServicesBox;
