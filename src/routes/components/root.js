import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Navbar from "../../components/Navbar";
import CookieDialog from "../../components/dialogs/CookieDialog";
import Menu from "../../components/Menu";
import Viewer from "../../components/containers/Viewer";
import Dialog from "../../components/dialogs/Dialog";
import { useAuthContext } from "../../context/auth.context";

const Root = () => {
  const { dialog, isCookieDialogVisible } = useGlobalContext();
  const { activeUser } = useAuthContext();

  if (!activeUser) return <Navigate to="/auth" />;
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
