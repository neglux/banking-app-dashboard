import { Navigate, Outlet } from "react-router-dom";
import { Grid } from "@mantine/core";
import { Suspense } from "react";
import { useAuthContext } from "src/context/auth.context";
import Navbar from "src/components/layout/Navbar";
import Menu from "src/components/layout/Menu";
import Viewer from "src/components/layout/Viewer";
import Loading from "src/assets/Loading";

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
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </Viewer>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Root;
