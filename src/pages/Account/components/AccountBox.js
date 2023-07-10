import { ActionIcon, CopyButton, Tooltip } from "@mantine/core";
import Container from "src/components/layout/Container";
import { FiCopy, FiCheck, FiShare } from "react-icons/fi";

const AccountBox = (accountInfo) => {
  const { iban, balance } = accountInfo;

  return (
    <Container style="flex-row px-5 py-5">
      <div className="flex text-gray-900 bg-gray-300 w-full mt-0 mb-5 px-2 py-1 rounded">
        <span className="mr-auto">{iban}</span>
        <CopyButton value={iban} timeout={5000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied" : "Copy"}
              withArrow
              position="right"
            >
              <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                {!copied ? <FiCopy size="1rem" /> : <FiCheck size="1rem" />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
        <Tooltip label="Share" withArrow position="right">
          <ActionIcon color="gray">
            <FiShare size="1rem" />
          </ActionIcon>
        </Tooltip>
      </div>
      <span className="text-xl font-semibold">{balance}&nbsp;USD</span>
      <span className="text-blue-400">View details</span>
    </Container>
  );
};

export default AccountBox;
