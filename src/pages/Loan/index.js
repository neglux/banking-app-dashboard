import React, { useState } from "react";
import Container from "../../components/containers/Container";
import Section from "../../components/containers/Section";
import LabelInput from "../../components/Inputs/LabelInput";
import Button from "../../components/Inputs/Button";
import strings from "../../data/strings";
import bank from "../../data/bank";
import { useGlobalContext } from "../../context/context";
import { useAuthContext } from "../../context/auth.context";
import { toast } from "react-toastify";
import DocumentHead from "../../components/DocumentHead";

const Loan = () => {
  const {
    loanConditionText,
    loanReviewText,
    loanApprovalText,
    loanApprovalTime,
    amountLabelText,
    approvalBtnText,
  } = strings.loan;
  const { loanSuccess, loanFail } = strings.dialogs;
  const [time, setTime] = useState(loanApprovalTime);
  const [amount, setAmount] = useState();
  const [isAvailable, setIsAvailable] = useState(true);
  const { userMovements, createMovement, addMovement } = useGlobalContext();

  const { activeUser } = useAuthContext();

  function startTimer() {
    let seconds = parseInt(loanApprovalTime);
    const timer = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        clearInterval(timer);
        if (reviewLoan(amount)) {
          toast.success(loanSuccess);
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
          toast.warning(loanFail);
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
      <DocumentHead title="Loan | Caspianbank" />
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
            <LabelInput
              label={amountLabelText}
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
