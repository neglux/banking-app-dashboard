const BinaryButtons = ({ positiveOption, negativeOption }) => {
  return (
    <div className="text-sm">
      <button
        className="mr-5 capitalize bg-slate-900 text-slate-200 py-1 px-8 rounded-md"
        onClick={() => positiveOption?.clickHandler(true)}
      >
        {positiveOption?.text}
      </button>
      <button
        className="mr-5 capitalize border border-slate-900 px-8 py-1 rounded-md"
        onClick={() => positiveOption?.clickHandler(false)}
      >
        {negativeOption?.text}
      </button>
    </div>
  );
};

export default BinaryButtons;
