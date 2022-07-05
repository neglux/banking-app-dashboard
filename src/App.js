import React from "react";
import Navbar from "./ui/templates/Navbar";
import Menu from "./ui/templates/Menu";
import Viewer from "./ui/templates/Viewer";
import { useGlobalContext } from "./context/context";

function App() {
  const { modules, activeModuleIx } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Menu />
      <Viewer activeModule={modules[activeModuleIx]} />
    </>
  );
}

export default App;
