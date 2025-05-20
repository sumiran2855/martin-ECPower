import { useState } from "react";
import { X } from "lucide-react";
import { useTheme } from "@/app/dashboard/layout";
import { CreateDealer } from "@/controller/dealer-controller";
import { getAuthTokens } from "@/helper/authHelper";
import ECPowerLoader from "@/component/loader";
import { useAlerts } from "@/component/alert";
import { countries } from "./type";

interface AddDealerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDealerModal({
  isOpen,
  onClose,
}: AddDealerModalProps) {
  const { token, idToken } = getAuthTokens();
  const { addAlert, AlertList } = useAlerts();
  const { darkMode } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    postalCode: "",
    city: "",
    country: "United States",
    mobile: "",
    customer_id:"-",
    parent_id:"-"
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        dealer_name: formData.name.toUpperCase(),
        Address: formData.address,
        postCode: formData.postalCode,
        city: formData.city,
        country: formData.country,
        mobile: formData.mobile,
        customer_id: formData.customer_id ?? "-",
        parent_id: formData.parent_id ?? "-"
      };
      const result = await CreateDealer(token, idToken, payload);
      addAlert({
        type: "success",
        message: "dealer created successfully..!",
        showIcon: true,
      });
      console.log("Dealer created successfully:", result);
      onClose();
    } catch (error) {
      console.error("Error creating dealer:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ECPowerLoader size="md" isVisible={true} />;
  }

  return (
    <div className="flex flex-col items-center">
      <AlertList />
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
              <h3 className="text-lg font-medium">Add New Dealer</h3>
              <button
                onClick={onClose}
                className={`rounded-full p-1 cursor-pointer ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors`}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="col-span-full">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
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
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
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
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
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
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
                  </div>

                  <div className="col-span-1">
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
                      {countries.map((country:string) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1">
                    <label
                      className={`block text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } mb-1`}
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={`w-full rounded-md ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      } border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      required
                    />
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
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center cursor-pointer ${
                    isSubmitting ? "opacity-70" : ""
                  }`}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
