import { IconQuestionMark } from "src/assets/Icons";
import AnimatedIcon from "src/components/common/AnimatedIcon";

const Unavailable = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <AnimatedIcon
        icon={<IconQuestionMark />}
        size="50px"
        color="#000"
        trigger="morph"
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        It seems like the page you were looking for took a vacation without
        leaving a forwarding address!
      </p>
    </div>
  );
};

export default Unavailable;
