import strings from "../../../../data/strings";
import { useAuthContext } from "../../../../context/auth.context";

const MovementBox = ({ sender, receiver, amount, currency, type, date }) => {
  const { dateFormat } = strings.dashboard.containerMovement;

  const { activeUser } = useAuthContext();

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const daysPassed = Math.round(
      Math.abs((new Date() - date) / (1000 * 60 * 60 * 24))
    );

    if (daysPassed < 1) return dateFormat.today;
    if (daysPassed === 1) return dateFormat.yesterday;
    if (daysPassed < 7) return `${daysPassed} ${dateFormat.day}`;
    if (daysPassed === 7) return dateFormat.week;
    return Intl.DateTimeFormat(activeUser.language, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }
  return (
    <li className="w-full h-fit px-8 py-2 bg-gray-50 mt-1 border-l-4 border-gray-800 text-sm">
      <div className="flex justify-between">
        <div>
          <h5
            className={`font-bold text-xl ${
              type === "withdrawal" ? "text-red-500" : "text-green-600"
            }`}
          >
            {amount}&nbsp;
            {currency}
          </h5>
          <span className="text-sm">{type}</span>
        </div>
        <span>{formatDate(date)}</span>
      </div>
      <p className="mt-3">
        <span className="text-gray-400">{sender}</span>
        &nbsp;to&nbsp;
        <span className="text-gray-400">{receiver}</span>
      </p>
    </li>
  );
};

export default MovementBox;
