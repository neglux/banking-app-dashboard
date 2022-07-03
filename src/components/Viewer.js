import React from "react";
import Dashboard from "./Dashboard";
import Loan from "./Loan";
import Options from "./Options";
import Transfer from "./Transfer";

const Viewer = () => {
  return (
    <main>
      <Dashboard />
      <Transfer />
      <Loan />
      <Options />
    </main>
  );
};

export default Viewer;
