import React from "react";
import strings from "../../data/strings";

const Menu = () => {
  const { sections } = strings.menu;
  const optItemStyle = "ml-auto";
  return (
    <menu className="flex w-full bg-gray-700 text-gray-100">
      {sections.map((item, index) => {
        return (
          <li
            key={index}
            className={`px-12 py-2 text-sm hover:bg-gray-600 cursor-pointer border-x-[1px] border-gray-600 ${
              index === sections.length - 1 ? optItemStyle : ""
            }`}
          >
            {item}
          </li>
        );
      })}
    </menu>
  );
};

export default Menu;
