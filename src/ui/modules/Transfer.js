import React from "react";
import Section from "../containers/Section";
import Container from "../containers/Container";
import TransferFrom from "../forms/TransferFrom";

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
