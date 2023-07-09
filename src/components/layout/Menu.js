import { Link, useLocation } from "react-router-dom";
import { Navbar, Stack, Tooltip } from "@mantine/core";
import { useMemo } from "react";
import { sections } from "src/routes/sections";

const Menu = () => {
  const renderSections = useMemo(() => {
    return (
      <>
        <Navbar.Section className="mt-5">
          <Stack justify="center" align="center" spacing={10}>
            {sections.map(
              (item) =>
                item.placement === "top" && (
                  <Navbar.Item key={item.id} item={item} />
                )
            )}
          </Stack>
        </Navbar.Section>
        <Navbar.Section className="mt-auto mb-2">
          <Stack justify="center" align="center" spacing={10}>
            {sections.map(
              (item) =>
                item.placement === "bottom" && (
                  <Navbar.Item key={item.id} item={item} />
                )
            )}
          </Stack>
        </Navbar.Section>
      </>
    );
  }, []);

  return (
    <Navbar height={"87vh"} className="bg-slate-100">
      {renderSections}
    </Navbar>
  );
};

const Item = ({ item }) => {
  const location = useLocation();

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

Navbar.Item = Item;

export default Menu;
