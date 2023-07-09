import { Link, useRouteError } from "react-router-dom";
import { IconBug } from "src/assets/Icons";
import AnimatedIcon from "src/components/common/AnimatedIcon";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="bg-red-500 min-h-screen flex flex-col items-center justify-center">
      <AnimatedIcon
        icon={<IconBug />}
        color="#fff"
        size="50px"
        trigger="morph"
      />
      <h1 className="text-4xl font-bold text-white mt-2 mb-4">
        Error {error.status}
      </h1>
      <p className="text-lg text-white mt-4">
        We're sorry, but something went wrong.
      </p>
      <p className="text-lg text-white mb-8">
        Our team has been notified about this issue. Via
        <a
          className="ml-1 underline"
          href="https://sentry.io/welcome/#"
          target="_blank"
          rel="noreferrer"
        >
          sentry.io
        </a>
      </p>
      <Link
        to="/"
        className="bg-white text-red-500 px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-100 transition duration-300 ease-in-out"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
