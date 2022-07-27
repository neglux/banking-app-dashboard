import React from "react";
import Section from "../components/containers/Section";
import Container from "../components/containers/Container";
import TransferFrom from "../components/forms/TransferFrom";

const Transfer = () => {
  return (
    <Section>
      <Container style="min-h-[550px]">
        <TransferFrom />
      </Container>
    </Section>
  );
};

export default Transfer;
