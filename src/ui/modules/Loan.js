import React from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import strings from "../../data/strings";
import Input from "../components/Input";
import Button from "../components/Button";

const Loan = () => {
  const {
    loanConditionText,
    loanReviewText,
    loanApprovalText,
    loanApprovalTime,
    amountLabelText,
    approvalBtnText,
  } = strings.loan;

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
            <span className="font-bold">{loanApprovalTime}</span>
          </p>
        </div>
        <div className="mt-40 h-full flex flex-col justify-evenly">
          <Input text={amountLabelText} />
          <Button text={approvalBtnText} />
        </div>
      </Container>
    </Section>
  );
};

export default Loan;
