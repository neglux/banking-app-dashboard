import Head from "src/components/common/Head";
import Container from "src/components/layout/Container";
import Section from "src/components/layout/Section";
import TransferForm from "./components/TransferForm";

const Transfer = () => {
  return (
    <Section>
      <Head title="Transfer | Caspianbank" />
      <Container style="min-h-[550px]">
        <TransferForm />
      </Container>
    </Section>
  );
};

export default Transfer;
