"use client";
import { useState } from "react";
import { Server } from "lucide-react";
import NotificationToggle from "./NotificationToggle";
import Dropdown from "./Dropdown";
import { useTheme } from "@/app/dashboard/layout";

const NotificationForm: React.FC = () => {
  const { darkMode } = useTheme();
  const [notifications, setNotifications] = useState({
    lowOperatingHours: {
      sms: false,
      email: false,
      value: 4,
    },
    notCalled: {
      sms: false,
      email: false,
    },
    inStandby: {
      sms: false,
      email: false,
    },
    fullStop: {
      sms: false,
      email: false,
    },
    serviceReminder: {
      sms: false,
      email: false,
      value: 500,
    },
    operationalStatus: {
      sms: false,
      email: false,
    },
  });

  const updateNotification = (
    key: keyof typeof notifications,
    field: "sms" | "email" | "value",
    value: boolean | number
  ) => {
    setNotifications({
      ...notifications,
      [key]: {
        ...notifications[key],
        [field]: value,
      },
    });
  };

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-50"} p-4 md:p-8 w-full max-w-7xl mx-auto`}>
      <div className={`flex items-center space-x-2 ${darkMode ? "text-gray-200" : "text-blue-800"} font-bold mb-4`}>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <Server className="mx-1" />
          <span className="text-lg md:text-xl">
            1979599994 XRGI-25 CARB test / OR35041
          </span>
        </div>
      </div>

      <p className={`${darkMode ? "text-gray-200" : "text-gray-700"} mb-6`}>
        In the form below, you can select/deselect in which operating modes you
        want the unit to send you an email respectively a text message.
      </p>

      <div className={`${darkMode ? "bg-gray-900" : "bg-white"} rounded-lg shadow-sm p-4 md:p-6`}>
        <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className={`bg-blue-50 ${darkMode ? "bg-blue-900" : ""} p-3 rounded flex flex-col md:flex-row items-start md:items-center md:space-x-2 w-full justify-between`}>
            <div className={darkMode ? "text-gray-200" : "text-blue-800"}>
              <span className="font-medium min-w-[120px] mr-2">
                E-mail address:
              </span>
              <span>test@test.org</span>
            </div>
            <div className={darkMode ? "text-gray-200" : "text-blue-800"}>
              <span className="font-medium min-w-[60px] mr-2">
                SMS:
              </span>
              <span>004512345678</span>
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'text-gray-200': 'text-gray-700'} grid grid-cols-12 gap-y-6 mb-4`}>
          <div className="col-span-12 md:col-span-2 font-medium md:pl-20">
            SMS
          </div>
          <div className="col-span-12 md:col-span-3 font-medium md:pl-20">
            E-mail address
          </div>
          <div className="col-span-12 md:col-span-7 font-medium md:pl-20">
            WhenXRGI
          </div>
        </div>

        {/* Low Operating Hours */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.lowOperatingHours.sms}
                onChange={(value) =>
                  updateNotification("lowOperatingHours", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.lowOperatingHours.email}
                onChange={(value) =>
                  updateNotification("lowOperatingHours", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            <span className="mr-2">Has less than</span>
            <Dropdown
              value={notifications.lowOperatingHours.value}
              options={[2, 4, 6, 8, 12]}
              onChange={(value) =>
                updateNotification("lowOperatingHours", "value", Number(value))
              }
            />
            <span className="ml-2">operating hours per 24 hours</span>
          </div>
        </div>

        {/* Not Called */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.notCalled.sms}
                onChange={(value) =>
                  updateNotification("notCalled", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.notCalled.email}
                onChange={(value) =>
                  updateNotification("notCalled", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            XRGI* have not called for min. 24 hours
          </div>
        </div>

        {/* In Standby */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.inStandby.sms}
                onChange={(value) =>
                  updateNotification("inStandby", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.inStandby.email}
                onChange={(value) =>
                  updateNotification("inStandby", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            Has been in standby for more than 24 hours
          </div>
        </div>

        {/* Full Stop */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.fullStop.sms}
                onChange={(value) =>
                  updateNotification("fullStop", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.fullStop.email}
                onChange={(value) =>
                  updateNotification("fullStop", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            Has been in full stop for more than 24 hours
          </div>
        </div>

        {/* Service Reminder */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.serviceReminder.sms}
                onChange={(value) =>
                  updateNotification("serviceReminder", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.serviceReminder.email}
                onChange={(value) =>
                  updateNotification("serviceReminder", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            <span className="mr-2">Has</span>
            <Dropdown
              value={notifications.serviceReminder.value}
              options={[100, 250, 500, 750, 1000]}
              onChange={(value) =>
                updateNotification("serviceReminder", "value", Number(value))
              }
            />
            <span className="ml-2">
              Operating hours until next service is less than:
            </span>
          </div>
        </div>

        {/* Operational Status */}
        <div className="grid grid-cols-12 gap-y-4 mb-4 items-center">
          <div className="col-span-6 md:col-span-2">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.operationalStatus.sms}
                onChange={(value) =>
                  updateNotification("operationalStatus", "sms", value)
                }
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className={`${darkMode ? "bg-yellow-900 border-amber-600" : "bg-yellow-50 border-amber-200"} border-2 rounded-lg p-2 flex justify-center mx-10`}>
              <NotificationToggle
                isEnabled={notifications.operationalStatus.email}
                onChange={(value) =>
                  updateNotification("operationalStatus", "email", value)
                }
              />
            </div>
          </div>
          <div className={`col-span-12 md:col-span-7 mt-2 md:mt-0 flex items-center flex-wrap ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
            Operational status
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-blue-800 text-white px-8 py-2 rounded font-medium focus:outline-none hover:bg-blue-900 transition-colors cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
