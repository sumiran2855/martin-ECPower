import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '@/app/dashboard/layout';
import { CustomerData } from './type';
import { getAllDealer } from '@/controller/dealer-controller';
import { getAuthTokens } from '@/helper/authHelper';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    installation: CustomerData | null;
  }

  interface Dealer {
  id: string;
  dealer_name: string;
  [key: string]: any; 
}

export default function EditModal({ isOpen, onClose, installation }:EditModalProps) {
  const { darkMode} = useTheme();
  const { token, idToken } = getAuthTokens();
  const [dealers, setDealers] = useState<Dealer[] | null>([]);
  const [formData, setFormData] = useState({
    number: '12345',
    partner: 'Partner A',
    installationName: 'Main Office Installation',
    address: '123 Business Street',
    postal: '10001',
    city: 'New York',
    country: 'United States'
  });

  const partners = ['Partner A', 'Partner B', 'Partner C', 'Partner D'];
  const countries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia'];

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
  };

   const fetchDealers = async () => {
     try {
       // setLoading(true);

       if (!token || !idToken) {
         console.error("Auth tokens not available");
         return;
       }

       const dealerData = await getAllDealer(token, idToken);
       console.log("🚀 ~ fetchDealers ~ dealerData:", dealerData);

       if (dealerData && Array.isArray(dealerData)) {
         setDealers(dealerData as any);

         if (dealerData.length > 0 && installation) {
           setFormData((prev) => ({
             ...prev,
             partner: dealerData[0].id || "",
           }));
         }
       }
     } catch (error) {
       console.error("Failed to fetch dealers:", error);
     } finally {
       // setLoading(false);
     }
   };

    useEffect(() => {
      if (isOpen) {
        fetchDealers();
      }
    }, [isOpen]);

    useEffect(() => {
      if (installation) {
        setFormData((prev) => ({
          ...prev,
          number: installation.companyInfo.cvrNumber || "",
          installationName: installation.companyInfo.companyName || "",
          address: installation.companyInfo.address || "",
          postal: installation.companyInfo.postal_code || "",
          city: installation.companyInfo.city || "",
        }));
      }
    }, [installation]);

  return (
    <div className="flex flex-col items-center">
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-40 flex items-center justify-center z-50">
          <div
            className={`w-full max-w-lg rounded-lg shadow-xl p-4 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } overflow-hidden transition-all transform`}
          >
            <div
              className={`px-6 py-4 border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } flex justify-between items-center`}
            >
              <h3 className="text-lg font-medium">
                Edit Installation item - {installation?.companyInfo.cvrNumber}
              </h3>
              <button
                onClick={onClose}
                className={`rounded-full p-1 ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={installation?.companyInfo.cvrNumber}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Dealer
                    </label>
                    <select
                      name="partner"
                      value={formData.partner}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {dealers!.map((dealer) => (
                        <option key={dealer.id} value={dealer.id}>
                          {dealer.dealer_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-full">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Installation Name
                    </label>
                    <input
                      type="text"
                      name="installationName"
                      value={`${installation?.companyInfo.companyName}`}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div className="col-span-full">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={installation?.companyInfo.address}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postal"
                      value={installation?.companyInfo.postal_code}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div className="col-span-1">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={installation?.companyInfo.city}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>

                  <div className="col-span-full">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div
                className={`px-6 py-4 border-t ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } flex justify-end space-x-2`}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-4 py-2 rounded-md cursor-pointer ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  } transition-colors`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}