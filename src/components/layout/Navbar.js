import { useAuthContext } from "src/context/auth.context";

const Navbar = () => {
  const { activeUser } = useAuthContext();

  return (
    <nav className="flex w-full items-center justify-between px-10 h-[12vh] bg-gray-900 text-gray-100">
      <div className="flex flex-col">
        <span>Welcome back, {activeUser.firstName}</span>
        <span className="text-xs text-slate-200 font-semibold mt-1">
          {Intl.DateTimeFormat(activeUser.language, {
            day: "2-digit",
            weekday: "short",
            month: "long",
            year: "numeric",
          }).format(new Date())}
        </span>
      </div>
      <span></span>
    </nav>
  );
};

export default Navbar;
