import React from "react";
import Section from "../../components/containers/Section";
import Container from "../../components/containers/Container";
import MovementBox from "./components/MovementBox";
import BalanceBox from "./components/BalanceBox";
import strings from "../../data/strings";
import { useGlobalContext } from "../../context/context";
import { Grid, Text } from "@mantine/core";
import ServicesBox from "./components/ServicesBox";
import DocumentHead from "../../components/DocumentHead";

const Dashboard = () => {
  const { containerMovement, containerBalance } = strings.dashboard;
  const { userMovements } = useGlobalContext();

  function sortMovementsByDate(data) {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) return 1;
      else return -1;
    });
    return sortedData;
  }

  return (
    <Section>
      <Grid>
        <DocumentHead title="Dashboard | Caspianbank" />
        <Grid.Col xs={8}>
          <article>
            <Text className="font-semibold">{containerMovement.title}</Text>
            <Container style="min-h-[450px] overflow-y-auto">
              {sortMovementsByDate(userMovements).map((movement, index) => (
                <MovementBox key={index} {...movement} />
              ))}
            </Container>
          </article>
          <article className="w-fit ml-auto my-5">
            <h3>{containerBalance.title}</h3>
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
