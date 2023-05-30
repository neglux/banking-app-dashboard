import React from "react";
import Section from "../../components/containers/Section";
import Container from "../../components/containers/Container";
import TransferForm from "./components/TransferForm";

const Transfer = () => {
  return (
    <Section>
      <Container style="min-h-[550px]">
        <TransferForm />
      </Container>
    </Section>
  );
};

export default Transfer;
