import React from "react";
import strings from "../../data/strings";
import Section from "../components/Section";
import Container from "../components/Container";

const Dashboard = () => {
  const { containerRate, containerMovement, containerBalance } =
    strings.dashboard;
  return (
    <Section style="grid grid-cols-2 gap-10">
      <article>
        <h3>{containerMovement.title}</h3>
        <Container style="min-h-[450px]">{/* <MovementItem /> */}</Container>
      </article>
      <div>
        <article>
          <h3>{containerRate.title}</h3>
          <Container style="min-h-[370px]">{/* <RateItem /> */}</Container>
        </article>
        <article className="w-fit ml-auto my-5">
          <h3>{containerBalance.title}</h3>
          <Container style="min-h-[50px] min-w-[120px] w-fit">
            {/* <BalanceItem /> */}
          </Container>
        </article>
      </div>
    </Section>
  );
};

const RateItem = () => {
  return (
    <li className="flex justify-between items-center w-full h-fit px-8 py-2 bg-gray-400 mt-1 border-l-4 border-gray-800 text-sm">
      <div>
        <h5 className="font-bold text-lg"></h5>
        <span className="text-sm"></span>
      </div>
      <span className="font-bold"></span>
      <div className="flex flex-col font-semibold">
        <span></span>
        <span></span>
      </div>
    </li>
  );
};

const MovementItem = () => {
  return (
    <li className="w-full h-fit px-8 py-2 bg-gray-50 mt-1 border-l-4 border-gray-800 text-sm">
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold text-xl"></h5>
          <span className="text-sm"></span>
        </div>
        <span></span>
      </div>
      <p className="mt-3">
        <span className="text-gray-400"></span>
        &nbsp;&nbsp;
        <span className="text-gray-400"></span>
      </p>
    </li>
  );
};

const BalanceItem = () => {
  return <li className="my-auto mx-auto px-5 font-bold text-xl"></li>;
};

export default Dashboard;
