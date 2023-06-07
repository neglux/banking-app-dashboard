import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Viewer from "../../components/containers/Viewer";
import { useAuthContext } from "../../context/auth.context";
import { Grid } from "@mantine/core";
import { Suspense } from "react";

const Root = () => {
  const { activeUser } = useAuthContext();
  if (!activeUser) return <Navigate to="/auth" />;
  return (
    <>
      <Grid gutter={0}>
        <Grid.Col xs={12}>
          <Navbar />
        </Grid.Col>
        <Grid.Col xs={0.5}>
          <Menu />
        </Grid.Col>
        <Grid.Col xs={11.5}>
          <Viewer>
            <Suspense fallback={<>loading..</>}>
              <Outlet />
            </Suspense>
          </Viewer>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Root;
