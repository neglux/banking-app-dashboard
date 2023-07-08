import { Outlet, useNavigate } from "react-router-dom";
import { Grid } from "@mantine/core";
import { Suspense, useEffect } from "react";
import { useAuthContext } from "src/context/auth.context";
import Navbar from "src/components/layout/Navbar";
import Menu from "src/components/layout/Menu";
import Viewer from "src/components/layout/Viewer";
import Loading from "src/assets/Loading";

const Root = () => {
  const navigate = useNavigate();
  const { activeUser } = useAuthContext();

  useEffect(() => {
    if (activeUser) return navigate("/", { replace: true });
  }, [activeUser, navigate]);

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
