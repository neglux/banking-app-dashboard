import React, { useState } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import strings from "../../data/strings";
import Input from "../components/Input";
import Button from "../components/Button";
import { useGlobalContext } from "../../context/context";
import bank from "../../data/bank";

const Loan = () => {
  const {
    loanConditionText,
    loanReviewText,
    loanApprovalText,
    loanApprovalTime,
    amountLabelText,
    approvalBtnText,
  } = strings.loan;
  const [time, setTime] = useState(loanApprovalTime);
  const [amount, setAmount] = useState();
  const [isAvailable, setIsAvailable] = useState(true);
  const { activeUser, userMovements, setDialog, createMovement, addMovement } =
    useGlobalContext();

  function startTimer() {
    let seconds = parseInt(loanApprovalTime);
    const timer = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
        if (reviewLoan(amount)) {
          setDialog({
            isShown: true,
            type: "suc",
            text: "loan approved! check your account.",
          });
          const movement = createMovement(
            { firstName: "bank", lastName: "loan" },
            `${activeUser.firstName} ${activeUser.lastName}`,
            amount,
            "USD",
            "loan",
            new Date().toISOString()
          );
          addMovement(movement, activeUser);
        } else {
          setDialog({
            isShown: true,
            type: "err",
            text: "we're sorry, you cannot request that loan amount",
          });
        }
        setTime(loanApprovalTime);
        setIsAvailable(true);
      } else setTime(seconds);
    }, 1000);
  }

  function reviewLoan(amount) {
    const isValidValue = (amount) => amount && amount > 0;
    const isValidAmount = (amount) => {
      const now = new Date();
      const maxAmount = userMovements.reduce((acc, mov) => {
        if (mov.type !== "deposit") return acc;
        const movementDate = new Date(mov.date);
        if ((now - movementDate) / (1000 * 60 * 60 * 24) < 30) {
          if (mov.amount > acc) return mov.amount;
          else return acc;
        }
      }, 0);
      return amount < maxAmount + maxAmount * bank.loanPercent;
    };

    return isValidValue(amount) && isValidAmount(amount);
  }

  return (
    <Section>
      <Container style="px-10 py-5 h-[550px]">
        <div>
          <div className="my-10">
            <p>{loanConditionText}</p>
            <p>{loanReviewText}</p>
          </div>
          <p>
            {loanApprovalText}
            &nbsp;
            <span className="font-bold">{time}</span>
          </p>
        </div>
        {isAvailable && (
          <div className="mt-40 h-full flex flex-col justify-evenly">
            <Input
              text={amountLabelText}
              value={amount}
              changeHandler={setAmount}
            />
            <Button
              text={approvalBtnText}
              clickHandler={() => {
                startTimer();
                setIsAvailable(false);
              }}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Loan;
