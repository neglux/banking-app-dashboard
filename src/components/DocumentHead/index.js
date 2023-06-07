import { Helmet } from "react-helmet-async";

const DocumentHead = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DocumentHead;
