import DocumentHead from "src/components/DocumentHead";
import Container from "src/components/containers/Container";
import Section from "src/components/containers/Section";
import TransferForm from "./components/TransferForm";

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
