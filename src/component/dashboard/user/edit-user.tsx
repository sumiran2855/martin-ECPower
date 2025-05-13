import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, LockKeyhole, User } from "lucide-react";
import { useState } from "react";
interface Props {
  onCancel: (event: React.MouseEvent<any>) => void;
}
const EditUsers: React.FC<Props> = ({ onCancel }) => {
  const { darkMode } = useTheme();
  const [displayOnPlanningBoard, setDisplayOnPlanningBoard] = useState(true);
  const [systemKey, setSystemKey] = useState("209912");
  const [company, setCompany] = useState("CARB TEST");
  const [name, setName] = useState("Kristin");
  const [lastName, setLastName] = useState("Fox");
  const [userLevel, setUserLevel] = useState("Standard");
  const [connectedCompany, setConnectedCompany] = useState("CARB TEST");
  const [email, setEmail] = useState("test@test.org");
  const [mobileNo, setMobileNo] = useState("0015309029471");

  return (
    <div
      className={`${ darkMode ? "bg-gray-800 text-white" : "bg-gray-50"} rounded-lg shadow-sm transition-colors w-full`}
    >
      <div className="p-4 pb-2">
        <div className="flex items-center gap-1 mb-4">
          <User className="w-7 h-7 text-blue-500" />
          <h2 className="text-xl font-bold">User</h2>
        </div>

        <p className="text-sm mb-6 text-gray-500 dark:text-gray-400 ml-8">
          Here you can change information connected to the profile of this user
        </p>

        <div className="mb-8 p-4">
          <h3 className={`text-sm font-semibold mb-4 ${ darkMode ? "text-gray-300" : "text-gray-600" }`}>
            USER INFO SETTINGS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-xs uppercase mb-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`} >
                SYSTEM KEY
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={systemKey}
                  onChange={(e) => setSystemKey(e.target.value)}
                  disabled
                  className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" } pr-10`}
                />
                <span className="absolute right-3 top-2.5">
                  <LockKeyhole className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </div>
            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                COMPANY
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled
                  className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} pr-10`}
                />
                <span className="absolute right-3 top-2.5">
                  <LockKeyhole className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                FIRST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" }`}
              />
            </div>

            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                USER LEVEL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className={`w-full p-2 border rounded-md appearance-none ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <option>Customer</option>
                  <option>EC_POWER_ADMIN</option>
                  <option>Partner</option>
                  <option>ServiceTechnician</option>
                  <option>customerAdmin</option>
                  <option>customerReadOnly</option>
                </select>
                <span className="absolute right-3 top-2.5 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" }`}
              />
            </div>

            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                CONNECT TO COMPANY <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className={`w-full p-2 border rounded-md appearance-none ${ darkMode
                      ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" }`}
                >
                  <option>CARB TEST</option>
                </select>
                <span className="absolute right-3 top-2.5 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </span>
              </div>
            </div>

            <div>
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                E-MAIL ADDRESS <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" }`}
              />
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <label className={`block text-xs uppercase mb-1 ${ darkMode ? "text-gray-400" : "text-gray-500" }`}>
                MOBILE NO. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className={`w-full p-2 border rounded-md ${ darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300" }`}
              />
            </div>
          </div>
        </div>

        <div className="mb-8 p-4">
          <h3 className={`text-sm font-semibold mb-4 ${ darkMode ? "text-gray-300" : "text-gray-600" }`} >
            USER SETTINGS
          </h3>

          <div className="flex items-center justify-start md:gap-60 gap-3">
            <div>
              <label className={`text-sm ${ darkMode ? "text-gray-300" : "text-gray-600" }`} >
                DISPLAY ON PLANNING BOARD:{" "}
                <span className="text-red-500">*</span>
              </label>
            </div>
            <div
              className={`${ darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"
              } border-2 rounded-lg p-4 flex justify-center mx-10 `}
            >
              <button
                onClick={() =>
                  setDisplayOnPlanningBoard(!displayOnPlanningBoard)
                }
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors 
                    ${ displayOnPlanningBoard ? "bg-blue-600 justify-end" : `${ darkMode ? "bg-gray-600" : "bg-gray-300" } justify-start` }`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-start mb-6">
          <button
            onClick={onCancel}
            className={`px-6 py-2 rounded-md border cursor-pointer ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Cancel
          </button>

          <button className="px-6 py-2 rounded-md bg-blue-800 text-white hover:bg-blue-900 cursor-pointer">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;