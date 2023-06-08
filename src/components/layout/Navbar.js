import { useMemo } from "react";
import { useAuthContext } from "src/context/auth.context";
import { getCurrentTime } from "src/utils/date.utils";

const Navbar = () => {
  const { activeUser } = useAuthContext();

  const time = useMemo(() => getCurrentTime("ddd, MMM D, YYYY"), []);

  return (
    <nav className="flex w-full items-center justify-between px-10 h-[12vh] bg-gray-900 text-gray-100">
      <div className="flex flex-col">
        <span>Welcome back, {activeUser.firstName}</span>
        <span className="text-xs text-slate-200 font-semibold mt-1">
          {time}
        </span>
      </div>
      <span></span>
    </nav>
  );
};

export default Navbar;
