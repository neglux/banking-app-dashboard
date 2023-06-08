import { FiBriefcase, FiDollarSign, FiGrid, FiLogOut } from "react-icons/fi";

export const sections = [
  {
    id: "dashboard",
    icon: <FiGrid />,
    text: "Dashboard",
    to: "/",
    placement: "top",
  },
  {
    id: "transfer",
    icon: <FiDollarSign />,
    text: "Transfer",
    to: "/transfer",
    placement: "top",
  },
  {
    id: "loan",
    icon: <FiBriefcase />,
    text: "Loan",
    to: "/loan",
    placement: "top",
  },
  {
    id: "log-out",
    icon: <FiLogOut />,
    text: "Log out",
    to: "/auth/logout",
    placement: "bottom",
  },
];
