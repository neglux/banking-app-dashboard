import React from "react";
import strings from "../../data/strings";
import { useGlobalContext } from "../../context/context";

const Menu = () => {
  const { sections } = strings.menu;
  const { setActiveModuleIx } = useGlobalContext();

  function isLastSection(index, array) {
    return index === array.length - 1;
  }

  return (
    <menu className="flex w-full bg-gray-700 text-gray-100">
      {sections.map((item, index) => {
        return (
          <li
            key={index}
            className={`px-12 py-2 text-sm hover:bg-gray-600 cursor-pointer border-x-[1px] border-gray-600 ${
              isLastSection(index, sections) && "ml-auto"
            }`}
            onClick={() => {
              setActiveModuleIx(index);
            }}
          >
            {item}
          </li>
        );
      })}
    </menu>
  );
};

export default Menu;
