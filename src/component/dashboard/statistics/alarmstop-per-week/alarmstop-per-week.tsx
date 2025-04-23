import { useTheme } from "@/app/dashboard/layout";
import { AlarmClockCheck } from "lucide-react";

const Alarmstop_per_week = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } py-2 px-4 rounded-lg shadow-sm transition-colors duration-300`}
    >
      <div className="flex items-center my-4">
        <AlarmClockCheck className="text-blue-500 mr-2 text-xl w-7 h-7" />
        <h1 className="text-2xl font-medium">Alarmstop per week</h1>
      </div>
      <p
        className={`text-medium font-semibold mb-4 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        Alarmstop from Monday 21-04-25 15:23 up to and including Sunday 27-04-25 15:23
      </p>
      <p
        className={`text-sm mb-4 ml-8 ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        No alarmstop this week
      </p>
    </div>
  );
};

export default Alarmstop_per_week;
