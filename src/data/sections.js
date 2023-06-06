import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TbZoomMoney } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

export const sections = [
  { id: "dashboard", icon: <MdSpaceDashboard />, text: "Dashboard", to: "/" },
  {
    id: "transfer",
    icon: <FaMoneyCheckAlt />,
    text: "Transfer",
    to: "/transfer",
  },
  { id: "loan", icon: <TbZoomMoney />, text: "Loan", to: "/loan" },
  { id: "log-out", icon: <FiLogOut />, text: "Log out", to: "/auth" },
];
