import React from "react";
import Modal from "./components/dialogs/modal/Modal";
import LogInForm from "./components/forms/LogInForm";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Viewer from "./components/containers/Viewer";
import Dialog from "./components/dialogs/Dialog";
import CookieDialog from "./components/dialogs/CookieDialog";

import { useGlobalContext } from "./context/context";

const App = () => {
  const { modules, activeModuleIx, activeUser, dialog, isCookieDialogVisible } =
    useGlobalContext();

  if (!activeUser) return <Modal form={<LogInForm />} />;
  return (
    <>
      {isCookieDialogVisible && <CookieDialog />}
      <Navbar />
      <Menu />
      <Viewer activeModule={modules[activeModuleIx]} />
      {dialog?.isShown && <Dialog {...dialog} />}
    </>
  );
};

export default App;
