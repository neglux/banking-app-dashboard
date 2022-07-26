import React from "react";
import Modal from "./ui/templates/Modal";
import Navbar from "./ui/templates/Navbar";
import Menu from "./ui/templates/Menu";
import Viewer from "./ui/templates/Viewer";
import LogInForm from "./ui/forms/LogInForm";
import Dialog from "./ui/components/Dialog";
import { useGlobalContext } from "./context/context";

function App() {
  const { modules, activeModuleIx, activeUser, dialog } = useGlobalContext();

  if (!activeUser) return <Modal form={<LogInForm />} />;
  return (
    <>
      <Navbar />
      <Menu />
      <Viewer activeModule={modules[activeModuleIx]} />
      {dialog?.isShown && <Dialog {...dialog} />}
    </>
  );
}

export default App;
