import { Anchor, Group, SimpleGrid, Text, UnstyledButton } from "@mantine/core";
import AnimatedIcon from "src/components/common/AnimatedIcon";
import Container from "src/components/layout/Container";
import { services } from "src/routes/services";

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
          <Services />
        </SimpleGrid>
      </Container>
    </>
  );
};

const Services = () =>
  services.map((service) => <ServiceItem key={service.id} data={service} />);

const ServiceItem = ({ data }) => {
  return (
    <UnstyledButton
      key={data.id}
      className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-md shadow-sm"
    >
      <AnimatedIcon icon={data.icon} color={data.color} />
      <Text className="mt-2 text-sm">{data.text}</Text>
    </UnstyledButton>
  );
};
export default ServicesBox;
