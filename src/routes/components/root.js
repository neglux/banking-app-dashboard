import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import Navbar from "../../components/Navbar";
import CookieDialog from "../../components/dialogs/CookieDialog";
import Menu from "../../components/Menu";
import Viewer from "../../components/containers/Viewer";
import { useAuthContext } from "../../context/auth.context";
import { Grid } from "@mantine/core";

const Root = () => {
  const { showCookieDialog } = useGlobalContext();
  const { activeUser } = useAuthContext();
  if (!activeUser) return <Navigate to="/auth" />;
  return (
    <>
      {showCookieDialog && <CookieDialog />}
      <Grid gutter={0}>
        <Grid.Col xs={12}>
          <Navbar />
        </Grid.Col>
        <Grid.Col xs={0.5}>
          <Menu />
        </Grid.Col>
        <Grid.Col xs={11.5}>
          <Viewer>
            <Outlet />
          </Viewer>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Root;
