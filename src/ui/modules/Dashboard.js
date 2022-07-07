import React, { useEffect } from "react";
import strings from "../../data/strings";
import Section from "../components/Section";
import Container from "../components/Container";
import { useGlobalContext } from "../../context/context";

const Dashboard = () => {
  const { containerRate, containerMovement, containerBalance } =
    strings.dashboard;
  const { userMovements } = useGlobalContext();

  return (
    <Section style="grid grid-cols-2 gap-10">
      <article>
        <h3>{containerMovement.title}</h3>
        <Container style="min-h-[450px]">
          {userMovements.map((movement, index) => (
            <MovementItem key={index} {...movement} />
          ))}
        </Container>
      </article>
      <div>
        <article>
          <h3>{containerRate.title}</h3>
          <Container style="min-h-[370px]">{/* <RateItem /> */}</Container>
        </article>
        <article className="w-fit ml-auto my-5">
          <h3>{containerBalance.title}</h3>
          <Container style="min-h-[50px] min-w-[120px] w-fit">
            <BalanceItem />
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

const MovementItem = ({ sender, receiver, amount, currency, type, date }) => {
  const { dateFormat } = strings.dashboard.containerMovement;

  const { activeUser } = useGlobalContext();

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const daysPassed = Math.round(
      Math.abs((new Date() - date) / (1000 * 60 * 60 * 24))
    );

    if (daysPassed < 1) return dateFormat.today;
    if (daysPassed === 1) return dateFormat.yesterday;
    if (daysPassed < 7) return `${daysPassed} ${dateFormat.day}`;
    if (daysPassed === 7) return dateFormat.week;
    return Intl.DateTimeFormat(activeUser.language, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  return (
    <li className="w-full h-fit px-8 py-2 bg-gray-50 mt-1 border-l-4 border-gray-800 text-sm">
      <div className="flex justify-between">
        <div>
          <h5
            className={`font-bold text-xl ${
              type === "withdrawal" ? "text-red-500" : "text-green-600"
            }`}
          >
            {amount}&nbsp;
            {currency}
          </h5>
          <span className="text-sm">{type}</span>
        </div>
        <span>{formatDate(date)}</span>
      </div>
      <p className="mt-3">
        <span className="text-gray-400">{sender}</span>
        &nbsp;to&nbsp;
        <span className="text-gray-400">{receiver}</span>
      </p>
    </li>
  );
};

const BalanceItem = () => {
  const { balance, calcBalance, userMovements } = useGlobalContext();
  useEffect(() => {
    calcBalance(userMovements);
  }, [userMovements]);

  return (
    <li className="my-auto mx-auto px-5 font-bold text-xl">
      {balance}
      {}
    </li>
  );
};

export default Dashboard;
