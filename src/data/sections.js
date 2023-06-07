import { FiBriefcase, FiDollarSign, FiGrid, FiLogOut } from "react-icons/fi";

export const sections = [
  { id: "dashboard", icon: <FiGrid />, text: "Dashboard", to: "/" },
  {
    id: "transfer",
    icon: <FiDollarSign />,
    text: "Transfer",
    to: "/transfer",
  },
  { id: "loan", icon: <FiBriefcase />, text: "Loan", to: "/loan" },
  { id: "log-out", icon: <FiLogOut />, text: "Log out", to: "/auth" },
];
