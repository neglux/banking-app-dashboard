import React from "react";
import Dashboard from "../modules/Dashboard";
import Transfer from "../modules/Transfer";
import Loan from "../modules/Loan";
import Options from "../modules/Options";

const Viewer = () => {
  return (
    <main className="px-10 py-5">
      <Dashboard />
      {/* <Transfer /> */}
      {/* <Loan /> */}
      {/* <Options /> */}
    </main>
  );
};

export default Viewer;
