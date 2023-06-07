import Section from "../../components/containers/Section";
import Container from "../../components/containers/Container";
import BalanceBox from "./components/BalanceBox";
import { Grid, Text } from "@mantine/core";
import ServicesBox from "./components/ServicesBox";
import DocumentHead from "../../components/DocumentHead";

const Dashboard = () => {
  return (
    <Section>
      <Grid>
        <DocumentHead title="Dashboard | Caspianbank" />
        <Grid.Col xs={8}>
          <article>
            <Text className="font-semibold">Movements</Text>
            <Container style="min-h-[450px] overflow-y-auto"></Container>
          </article>
          <article className="w-fit ml-auto my-5">
            <h3>Balance</h3>
            <Container style="min-h-[50px] min-w-[120px] w-fit">
              <BalanceBox />
            </Container>
          </article>
        </Grid.Col>
        <Grid.Col span={4}>
          <ServicesBox />
        </Grid.Col>
      </Grid>
    </Section>
  );
};

export default Dashboard;
