import React from "react";
import strings from "../../data/strings";
import { Select } from "@mantine/core";

const Dropdown = ({ label, data, handleSelect = () => {} }) => {
  const { dropdownText } = strings.transfer;

  return (
    <Select
      label={label}
      placeholder={dropdownText}
      data={data}
      onChange={handleSelect}
    />
  );
};

export default Dropdown;
