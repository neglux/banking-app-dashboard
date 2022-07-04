import React from "react";
import strings from "../data/strings";
const Dashboard = () => {
  const { containerRate, containerMovement, containerBalance } =
    strings.dashboard;
  return (
    <section className="grid grid-cols-2 gap-5">
      <Container type={containerRate} item={<RateItem />} />
      <div className="flex flex-col justify-end items-end">
        <Container
          type={containerMovement}
          item={<MovementItem />}
          className="w-full h-[359px]"
        />
        <Container type={containerBalance} item={<BalanceItem />} />
      </div>
    </section>
  );
};

const Container = ({ type, item, className }) => {
  return (
    <div className={`mb-5 px-5 py-5 ${className}`}>
      <h3>{type.title}</h3>
      <ul className="flex justify-start items-start h-full bg-gray-300 rounded-sm shadow-md my-2">
        {item}
      </ul>
    </div>
  );
};

const RateItem = () => {
  return <li>Rate</li>;
};

const MovementItem = () => {
  return <li>Movement</li>;
};

const BalanceItem = () => {
  return (
    <li className="flex justify-center items-center h-full px-20 font-bold text-2xl">
      Balance
    </li>
  );
};

export default Dashboard;
