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
      <ul className="flex flex-col justify-start items-start h-full bg-gray-300 rounded-sm shadow-md my-2">
        {item}
      </ul>
    </div>
  );
};

const RateItem = () => {
  return (
    <li className="flex justify-between items-center w-full h-fit px-10 py-4 bg-gray-400 mt-1 border-l-4 border-gray-800">
      <div>
        <h5 className="font-bold text-xl">EUR/USD</h5>
        <span className="text-sm">Euro / US Dollar</span>
      </div>
      <span className="font-bold">1.64323</span>
      <div className="flex flex-col font-semibold">
        <span>+0.07%</span>
        <span>+0.0007</span>
      </div>
    </li>
  );
};

const MovementItem = () => {
  return (
    <li className="w-full h-fit px-10 py-4 bg-gray-50 mt-1 border-l-4 border-gray-800">
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold text-xl">$200</h5>
          <span className="text-sm">Payment</span>
        </div>
        <span>yesterday</span>
      </div>
      <p className="mt-5">
        <span className="text-gray-400">Keegan Reeves</span>
        &nbsp;to&nbsp;
        <span className="text-gray-400">Emerson Sawyer</span>
      </p>
    </li>
  );
};

const BalanceItem = () => {
  return (
    <li className="flex justify-center items-center h-full px-20 font-bold text-2xl">
      $25.5436,92
    </li>
  );
};

export default Dashboard;
