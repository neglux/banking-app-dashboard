import React from "react";
import Modal from "./components/dialogs/modal/Modal";
import LogInForm from "./components/forms/LogInForm";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Viewer from "./components/containers/Viewer";
import Dialog from "./components/dialogs/Dialog";

import { useGlobalContext } from "./context/context";

const App = () => {
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
};

export default App;
