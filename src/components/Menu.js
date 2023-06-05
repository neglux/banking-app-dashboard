import React from "react";
import strings from "../data/strings";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Stack, Tooltip } from "@mantine/core";
import { useAuthContext } from "../context/auth.context";
import { FiLogOut } from "react-icons/fi";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuthContext();
  const { sections } = strings.menu;

  const handleLogout = () => {
    navigate("/auth");
    logout();
  };

  return (
    <Navbar height={"87vh"} className="bg-slate-100">
      <Navbar.Section>
        <Stack className="mt-5" justify="center" align="center" spacing={10}>
          {sections.map((item, index) => {
            return (
              <Tooltip label={item.text} position="right">
                <Link
                  to={item.to}
                  key={index}
                  className={`flex p-2 rounded-md hover:bg-slate-200 text-slate-500 ${
                    location.pathname === item.to &&
                    "bg-slate-300 hover:bg-slate-300"
                  }`}
                >
                  <i className="text-lg">{item.icon}</i>
                </Link>
              </Tooltip>
            );
          })}
        </Stack>
      </Navbar.Section>
      <Navbar.Section className="mt-auto">
        <Stack className="mb-5" justify="center" align="center" spacing={10}>
          <Tooltip label="Log out" position="right">
            <button
              className="flex p-2 rounded-md hover:bg-slate-100 text-slate-500"
              onClick={handleLogout}
            >
              <FiLogOut />
            </button>
          </Tooltip>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default Menu;
