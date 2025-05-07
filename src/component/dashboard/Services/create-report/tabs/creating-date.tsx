import { useTheme } from "@/app/dashboard/layout";
import { useAlerts } from "@/component/alert";
import DatePicker from "@/component/DatePicker";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";


interface CreatingDateTabProps {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function CreatingDateTab({
  data,
  setData,
  onNext,
  onPrevious,
}: CreatingDateTabProps) {
  const { addAlert, AlertList } = useAlerts();
  const today = new Date();
  const fiveDaysLater = new Date();
  fiveDaysLater.setDate(today.getDate() + 5);

  const { darkMode } = useTheme();
  const [serviceType, setServiceType] = useState(data.creatingDate?.serviceType || "");
  const [creationDate, setCreationDate] = useState(data.creatingDate?.creationDate || new Date().toISOString().slice(0, 16).replace("T", " "));
  const [deliveryDate, setDeliveryDate] = useState(data.creatingDate?.deliveryDate || fiveDaysLater.toISOString().slice(0, 16).replace("T", " "));
  const [servicesRendered, setServicesRendered] = useState(data.creatingDate?.serviceDescription || "");

  useEffect(() => {
    if (data.creatingDate) {
      setServiceType(data.creatingDate.serviceType || "");
      setCreationDate(data.creatingDate.creationDate || "08-02-25 00:00");
      setDeliveryDate(data.creatingDate.deliveryDate || "18-02-25 00:00");
      setServicesRendered(data.creatingDate.serviceDescription || "");
    }
  }, []);

  const handleNext = () => {
    if (!servicesRendered.trim()) {
      addAlert({
        type: "warning",
        message: "Please provide a description of the service rendered before continuing.",
        showIcon:true
      });
      return;
    }
    setData({
      ...data,
      creatingDate: {
        creationDate,
        deliveryDate,
        serviceType,
        serviceDescription: servicesRendered,
      },
    });
    onNext();
  };

  return (
    <div
      className={`${ darkMode
          ? "bg-gray-800 border-1 border-white rounded-lg shadow-sm"
          : "bg-white rounded-lg shadow-sm" } p-6 mb-6`}>
      <AlertList/>
      <div className="mb-6">
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}>
          Enter the dates for workmanship, service type and optionally the
          reason for the visit.
        </p>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } m-1`}
          >
            Creation date
          </label>
          <div className="relative">
            <DatePicker
              selectedDate={creationDate}
              onDateChange={setCreationDate}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } m-1`}
          >
            Date of delivery
          </label>
          <div className="relative">
            <DatePicker
              selectedDate={deliveryDate}
              onDateChange={setDeliveryDate}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } m-1`}
          >
            Service Type
          </label>
          <div className="relative">
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className={`w-full p-2 border ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } rounded-md appearance-none pr-10`}
            >
              <option value="">Select service type</option>
              <option value="maintenance">Regular service</option>
              <option value="repair">Repair</option>
              <option value="installation">commissioning</option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown
                className={`w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label
            className={`block text-xs ${
              darkMode ? "text-gray-300" : "text-gray-400"
            } m-1`}
          >
            Services Rendered <span className="text-red-500">*</span>
          </label>
          <textarea
            value={servicesRendered}
            onChange={(e) => setServicesRendered(e.target.value)}
            className={`w-full p-2 border ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            } rounded-md h-32`}
            placeholder="description..."
          ></textarea>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="border border-gray-300 rounded-md px-6 py-2 text-gray-300 font-medium hover:bg-gray cursor-pointer"
            disabled
          >
            Previous Step
          </button>
          <button
            onClick={handleNext}
            className={`${
              darkMode
                ? "text-gray-200 hover:bg-gray-700"
                : "text-blue-900 hover:bg-gray-100"
            } border border-gray-300 rounded-md px-6 py-2  font-medium  cursor-pointer`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}