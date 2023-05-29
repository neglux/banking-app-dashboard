import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Modal from "../../components/dialogs/modal/Modal";
import Navbar from "../../components/Navbar";
import CookieDialog from "../../components/dialogs/CookieDialog";
import Menu from "../../components/Menu";
import Viewer from "../../components/containers/Viewer";
import Dialog from "../../components/dialogs/Dialog";
import LogInForm from "../../components/forms/LogInForm";
import { useAuthContext } from "../../context/auth.context";

const Root = () => {
  const { dialog, isCookieDialogVisible } = useGlobalContext();
  const { activeUser } = useAuthContext();

  console.log(activeUser);
  if (!activeUser) return <Modal form={<LogInForm />} />;
  return (
    <>
      {isCookieDialogVisible && <CookieDialog />}
      <Navbar />
      <Menu />
      <Viewer>
        <Outlet />
      </Viewer>
      {dialog?.isShown && <Dialog {...dialog} />}
    </>
  );
};

export default Root;
