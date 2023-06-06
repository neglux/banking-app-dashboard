import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { useAuthContext } from "../context/auth.context";
import { sections } from "../data/sections";

const Menu = () => {
  const location = useLocation();
  const { logout } = useAuthContext();

  return (
    <Navbar height={"87vh"} className="bg-slate-100">
      <Navbar.Section>
        <Stack className="mt-5" justify="center" align="center" spacing={10}>
          {sections.map((item) => {
            if (item.id === "log-out")
              return <Navbar.BottomItem item={item} handler={logout} />;
            return <Navbar.Item item={item} location={location} />;
          })}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

Navbar.Item = ({ item, location }) => {
  return (
    <Tooltip label={item.text} position="right">
      <Link
        to={item.to}
        key={item.id}
        className={`flex p-2 rounded-md hover:bg-slate-200 text-slate-500 ${
          location.pathname === item.to && "bg-slate-300 hover:bg-slate-300"
        }`}
      >
        <i className="text-lg">{item.icon}</i>
      </Link>
    </Tooltip>
  );
};

Navbar.BottomItem = ({ item, handler }) => {
  return (
    <UnstyledButton>
      <Tooltip label={item.text} position="right">
        <Link
          to={item.to}
          key={item.id}
          className={`flex p-2 rounded-md hover:bg-slate-200 text-slate-500`}
          onClick={handler}
        >
          <i className="text-lg">{item.icon}</i>
        </Link>
      </Tooltip>
    </UnstyledButton>
  );
};

export default Menu;
