import { useTheme } from "@/app/dashboard/layout";
import { InstallationData } from "@/helper/facilityHelper";

interface CreateTestFormProps {
  Installation: InstallationData | null;
  onNext: () => void;
  onPrevious: () => void;
}

const Preview: React.FC<CreateTestFormProps> = ({
  Installation,
  onPrevious
})=> {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
         <div className="flex items-center mb-6">
        <svg className="w-6 h-6 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4C5.22 4 5 4.22 5 4.5v15c0 0.28 0.22 0.5 0.5 0.5h13c0.28 0 0.5-0.22 0.5-0.5v-15c0-0.28-0.22-0.5-0.5-0.5h-13z" />
          <path d="M16 8H8V6h8v2zm0 4H8v-2h8v2zm-3 4H8v-2h5v2z" />
        </svg>
        <h2 className={`text-lg font-semibold ${darkMode ? "text-gray-200" : "text-blue-900"}`}>PREVIEW SERVICE REPORT</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-4 mx-6">
          <div>
            <div className="flex justify-between my-2">
              <span className="font-medium">XRGI® :</span>
              <span>{Installation?.xrgiID}</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Creation date:</span>
              <span>03-03-2025</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Service type:</span>
              <span>Repair</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Description:</span>
              <span>-</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mx-6">
          <div>
            <div className="flex justify-between my-2">
              <span className="font-medium">XRGI® type :</span>
              <span>{Installation?.name}</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Date of delivery:</span>
              <span>03-03-2025</span>
            </div>
            <div className="flex justify-between my-2">
              <span className="font-medium">Service technician:</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>

        <div className="mb-6">
        <div className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-t border-b`}>
            <div className="py-4 px-6">
            <span className="text-blue-600 font-medium">Item usage</span>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full">
            <thead>
                <tr className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-b`}>
                <th className="py-4 px-6 text-left font-medium">Part number</th>
                <th className="py-4 px-6 text-left font-medium">Description</th>
                <th className="py-4 px-6 text-left font-medium">Serial no.</th>
                <th className="py-4 px-6 text-left font-medium">Number</th>
                <th className="py-4 px-6 text-left font-medium">Unit</th>
                </tr>
            </thead>
            <tbody>
                {/* Empty table content */}
            </tbody>
            </table>
        </div>
        </div>

      <div className="mb-6">
        <div className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-t border-b`}>
            <div className="py-4 px-6">
            <span className="text-blue-600 font-medium">Resources</span>
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className={`${darkMode ? "border-gray-700" : "border-gray-200"} border-b`}>
                <th className="py-4 px-6 text-left font-medium">Date</th>
                <th className="py-4 px-6 text-left font-medium">Service technician</th>
                <th className="py-4 px-6 text-left font-medium">Work type</th>
                <th className="py-4 px-6 text-left font-medium">Number</th>
                <th className="py-4 px-6 text-left font-medium">Unit</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty table content */}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${darkMode ? "bg-blue-900/20" : "bg-blue-50"} rounded-lg p-4 mb-6`}>
        <p>Your service log report will be sent to your email address.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onPrevious}
          className={`${darkMode ? "text-gray-200 hover:bg-gray-700" : "text-blue-900 hover:bg-gray-100" } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}>
          Previous Step
        </button>
        <button className={`${darkMode ? "text-gray-100 bg-blue-800 hover:bg-blue-700" : "text-gray-100 bg-blue-900 hover:bg-blue-800" } border border-gray-300 rounded-md px-6 py-2 font-medium cursor-pointer`}>
          Create a report and close the service log.
        </button>
      </div>
    </div>
  );
}

export default Preview;