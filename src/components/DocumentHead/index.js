import { Helmet } from "react-helmet";

const DocumentHead = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DocumentHead;
