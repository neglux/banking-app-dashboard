import React, { useEffect } from "react";
import Navbar from "./ui/templates/Navbar";
import Menu from "./ui/templates/Menu";
import Viewer from "./ui/templates/Viewer";
import { useGlobalContext } from "./context/context";
import Modal from "./ui/templates/Modal";
import SignUpForm from "./ui/components/SignUpForm";

function App() {
  const { modules, activeModuleIx, activeUser } = useGlobalContext();

  if (!activeUser) return <Modal form={<SignUpForm />} />;
  return (
    <>
      <Navbar />
      <Menu />
      <Viewer activeModule={modules[activeModuleIx]} />
    </>
  );
}

export default App;
