"use client";
import { useTheme } from "@/app/dashboard/layout";
import React from "react";

interface Info {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
}

interface ContactInfoProps {
  systemInfo: Info;
  dealerInfo: Info;
  contactInfo: Info;
}

const getFlagEmoji = (countryCode: string): string => {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  systemInfo,
  dealerInfo,
  contactInfo,
}) => {
    const { darkMode } = useTheme();
  const rows = [
    {
      label: "Name",
      values: [systemInfo.name, dealerInfo.name, contactInfo.name],
    },
    {
      label: "Address",
      values: [systemInfo.address, dealerInfo.address, contactInfo.address],
    },
    {
      label: "City",
      values: [systemInfo.city, dealerInfo.city, contactInfo.city],
    },
    {
      label: "Postal Code",
      values: [
        systemInfo.postalCode,
        dealerInfo.postalCode,
        contactInfo.postalCode,
      ],
    },
    {
      label: "Country",
      values: [systemInfo.country, dealerInfo.country, contactInfo.country].map(
        (c) =>
          c ? (
            <span className="text-xl" title={c}>
              {getFlagEmoji(c)}
            </span>
          ) : (
            ""
          )
      ),
    },
    {
      label: "Cell phone no.",
      values: [systemInfo.phone, dealerInfo.phone, contactInfo.phone],
    },
    {
      label: "E-mail address",
      values: [systemInfo.email, dealerInfo.email, contactInfo.email],
    },
  ];

  return (
    <div
      className={`overflow-x-auto p-4 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr>
            <th className={`p-3 font-semibold ${darkMode ? "bg-blue-900/30 text-blue-100" : "bg-blue-50 text-blue-900"}`}></th>
            <th className={`p-3 font-semibold ${darkMode ? "bg-blue-900/30 text-blue-100" : "bg-blue-50 text-blue-900"}`}>
              XRGI® System Name
            </th>
            <th className={`p-3 font-semibold ${darkMode ? "bg-blue-900/30 text-blue-100" : "bg-blue-50 text-blue-900"}`}>
              Dealer
            </th>
            <th className={`p-3 font-semibold ${darkMode ? "bg-blue-900/30 text-blue-100" : "bg-blue-50 text-blue-900"}`}>
              Contact
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td
                className={`p-3 font-medium ${
                  darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}
              >
                {row.label}
              </td>
              {row.values.map((val, i) => (
                <td
                  key={i}
                  className={`p-3 ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                >
                  {val || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;

