const Unavailable = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
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
