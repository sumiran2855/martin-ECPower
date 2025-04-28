
import { useState } from 'react';
import { useTheme } from "@/app/dashboard/layout";
import { FileText, SearchIcon, XIcon } from 'lucide-react';

interface ServiceReportData {
  deliveryDate: string;
  creationDate: string;
  reportNumber: string;
  serviceType: string;
}
export default function UploadServiceReport({}) {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for the table
  const serviceReports: ServiceReportData[] = Array(9).fill({
    deliveryDate: '14-08-13 00:00',
    creationDate: '16-08-22 00:00',
    reportNumber: 'SA-1000001098-150',
    serviceType: 'SERVICE'
  });
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm"
      } p-6 mb-6`}
    >
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className={`${darkMode ? 'text-gray-200' : 'text-blue-900'} text-xl font-bold mb-4`}>Uploaded Service Report</h2>
          
          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full p-2 pr-10 border rounded-lg ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white" 
                  : "bg-gray-50 border-gray-300"
              }`}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <SearchIcon size={20} className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`text-left ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 px-4 font-medium text-sm">Date of Delivery</th>
                <th className="py-3 px-4 font-medium text-sm">Creation date</th>
                <th className="py-3 px-4 font-medium text-sm">Service Report Number</th>
                <th className="py-3 px-4 font-medium text-sm">Service Type</th>
                <th className="py-3 px-4 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {serviceReports.map((report, index) => (
                <tr 
                  key={index} 
                  className={`border-b ${
                    darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"}`}>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}>{report.deliveryDate}</td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}>{report.creationDate}</td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}>{report.reportNumber}</td>
                  <td className={`px-4 py-4 whitespace-nowrap text-sm ${darkMode ? "text-gray-200" : "text-gray-600"}`}>{report.serviceType}</td>
                  <td className="py-4 px-4 flex justify-between">
                    <FileText size={20} className="text-blue-500 cursor-pointer" />
                    <XIcon size={20} className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}
