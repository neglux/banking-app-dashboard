import React from "react";
import Section from "../components/containers/Section";
import Container from "../components/containers/Container";
import MovementBox from "../components/containers/MovementBox";
import BalanceBox from "../components/containers/BalanceBox";
import strings from "../data/strings";
import { useGlobalContext } from "../context/context";

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
    <Section style="grid grid-cols-2 gap-10">
      <article>
        <h3>{containerMovement.title}</h3>
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
    </Section>
  );
};

export default Dashboard;
