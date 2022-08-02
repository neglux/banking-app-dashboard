import React from "react";
import strings from "../data/strings";
import { useGlobalContext } from "../context/context";

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
            className={`flex items-center px-12 py-2 text-sm hover:bg-gray-600 cursor-pointer border-x-[1px] border-gray-600 ${
              isLastSection(index, sections) && "ml-auto"
            }`}
            onClick={() => {
              setActiveModuleIx(index);
            }}
          >
            <i className="text-lg">{item.icon}</i>
            <h5 className="ml-2">{item.text}</h5>
          </li>
        );
      })}
    </menu>
  );
};

export default Menu;
