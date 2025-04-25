import { useTheme } from "@/app/dashboard/layout";
import { FilePenLine } from "lucide-react";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const EditServiceCode: React.FC<Props> = ({ onClick }) => {
  const { darkMode } = useTheme();
  const [language, setLanguage] = useState("danish");
  const [group, setGroup] = useState("ec-power");
  const [administrator, setAdministrator] = useState("Standard user");
  const [title, setTitle] = useState("MANUAL STOP IN NORMAL OPERATION");

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } p-4 md:p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div
            className={`flex items-center ${
              darkMode ? "text-blue-400" : "text-blue-900"
            }`}
          >
            <FilePenLine className="w-6 h-6 mr-2 text-xl" />
            <h2 className="text-xl md:text-2xl font-medium">
              Edit Service Code
            </h2>
          </div>
          <p
            className={`text-sm md:text-base font-semibold mt-2 ml-8 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            } uppercase`}
          >
            MANUAL STOP IN NORMAL OPERATION
          </p>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-700" : "bg-white"
          } rounded-lg shadow-md p-4 md:p-6`}
        >
          <div className="mb-6 flex flex-wrap gap-10">
            <label className="block mb-2 text-sm ">Language</label>
            <div className="flex flex-wrap gap-8 mb-1">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="danish"
                  checked={language === "danish"}
                  onChange={() => setLanguage("danish")}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border ${
                    language === "danish"
                      ? "border-4 border-blue-600"
                      : `border-2 ${
                          darkMode ? "border-gray-400" : "border-gray-300"
                        }`
                  } mr-2 flex items-center justify-center`}
                ></span>
                <span className="flag mr-1">🇩🇰</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="german"
                  checked={language === "german"}
                  onChange={() => setLanguage("german")}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border ${
                    language === "german"
                      ? "border-4 border-blue-600"
                      : `border-2 ${
                          darkMode ? "border-gray-400" : "border-gray-300"
                        }`
                  } mr-2 flex items-center justify-center`}
                ></span>
                <span className="flag mr-1">🇩🇪</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="language"
                  value="english"
                  checked={language === "english"}
                  onChange={() => setLanguage("english")}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border ${
                    language === "english"
                      ? "border-4 border-blue-600"
                      : `border-2 ${
                          darkMode ? "border-gray-400" : "border-gray-300"
                        }`
                  } mr-2 flex items-center justify-center`}
                ></span>
                <span className="flag mr-1">🇬🇧</span>
              </label>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-10">
            <label className="block mb-2 text-sm">Group</label>
            <div className="flex flex-wrap gap-8 mb-1">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="group"
                  value="ec-power"
                  checked={group === "ec-power"}
                  onChange={(e) => setGroup(e.target.value)}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border ${
                    group === "ec-power"
                      ? "border-4 border-blue-600"
                      : `border-2 ${
                          darkMode ? "border-gray-400" : "border-gray-300"
                        }`
                  } mr-2 flex items-center justify-center`}
                ></span>
                <span>EC Power AS</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="group"
                  value="alle"
                  checked={group === "alle"}
                  onChange={(e) => setGroup(e.target.value)}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-full border ${
                    group === "alle"
                      ? "border-4 border-blue-600"
                      : `border-2 ${
                          darkMode ? "border-gray-400" : "border-gray-300"
                        }`
                  } mr-2 flex items-center justify-center`}
                ></span>
                <span>AllE</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs text-gray-500 mb-1">
              Administrator
            </label>
            <div
              className={`relative ${darkMode ? "text-white" : "text-black"}`}
            >
              <select
                className={`w-full p-3 border rounded-md appearance-none ${
                  darkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } pr-8`}
                value={administrator}
                onChange={(e) => setAdministrator(e.target.value)}
              >
                <option value="Standard user">Standard user</option>
                <option value="Admin">Admin</option>
                <option value="Super Admin">Super Admin</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs text-gray-500 mb-1">Title</label>
            <input
              type="text"
              className={`w-full p-3 border rounded-md ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-yellow-400"
                  : "bg-white border-gray-300 text-yellow-500"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 my-8">
            <button
              onClick={onClick}
              className={`px-6 py-2 rounded-md border ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              } transition-colors duration-200 cursor-pointer`}
            >
              Cancel
            </button>
            <button className="px-6 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditServiceCode;