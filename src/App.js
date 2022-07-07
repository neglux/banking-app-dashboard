import React from "react";
import Navbar from "./ui/templates/Navbar";
import Menu from "./ui/templates/Menu";
import Viewer from "./ui/templates/Viewer";
import { useGlobalContext } from "./context/context";
import Modal from "./ui/templates/Modal";
import SignUpForm from "./ui/components/SignUpForm";
import Dialog from "./ui/components/Dialog";

function App() {
  const { modules, activeModuleIx, activeUser, dialog } = useGlobalContext();

  if (!activeUser) return <Modal form={<SignUpForm />} />;
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
