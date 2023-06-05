import React from "react";
import Section from "../../components/containers/Section";
import Container from "../../components/containers/Container";
import TransferForm from "./components/TransferForm";
import DocumentHead from "../../components/DocumentHead";

const Transfer = () => {
  return (
    <Section>
      <DocumentHead title="Transfer | Caspianbank" />
      <Container style="min-h-[550px]">
        <TransferForm />
      </Container>
    </Section>
  );
};

export default Transfer;
