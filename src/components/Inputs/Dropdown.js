import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import strings from "../../data/strings";

const Dropdown = ({ label, data, selectHandler = () => {} }) => {
  const { dropdownText } = strings.transfer;
  const [selectedIx, setSelectedIx] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    selectHandler(data[selectedIx]);
  }, [selectedIx]);
  return (
    <div className="flex my-4">
      <label className="capitalize">{label}:</label>
      <div className="ml-5">
        <div
          className="flex justify-between items-center w-[250px] h-[30px] bg-gray-300 cursor-pointer rounded-md"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <div className="w-full px-2">{data[selectedIx] || dropdownText}</div>
          <GrNext className="mx-4 rotate-90 " />
        </div>
        {isVisible && (
          <ul className="mt-1 absolute bg-gray-200 w-[250px]">
            {data.map((item, index) => {
              return (
                index !== selectedIx && (
                  <li
                    className="my-1 px-2 rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300"
                    key={index}
                    onClick={() => {
                      setSelectedIx(index);
                      setIsVisible(!isVisible);
                    }}
                  >
                    {item}
                  </li>
                )
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
