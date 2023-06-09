const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="loading_frame">
          <circle id="ellipse_1" cx="29.5" cy="29.5" r="4.5" />
          <circle id="ellipse_2" cx="70.5" cy="29.5" r="4.5" />
          <circle id="ellipse_3" cx="70.5" cy="70.5" r="4.5" />
          <circle id="ellipse_4" cx="29.5" cy="70.5" r="4.5" />
        </g>
      </svg>
    </div>
  );
};

export default Loading;
