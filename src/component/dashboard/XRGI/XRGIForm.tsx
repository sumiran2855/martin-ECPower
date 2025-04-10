"use client";

// pages/index.tsx
import { useState } from "react";
import { useTheme } from "@/app/dashboard/layout";
import { NotebookPen } from "lucide-react";
import CHPTab from "./tabs/CHPTab";
import ContactTab from "./tabs/ContactTab";

export default function XRGIForm() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("chp");

  const [formData, setFormData] = useState({
    // CHP form data
    xrgiId: "1000001098",
    xrgiType: "XRGI® - 15BIO",
    objectType: "Others",
    installationName: "EC- POWER-UDVIKLING",
    description: "",
    // Contact form data
    name: "Test Testerson1",
    telephone: "22552255",
    mobile: "61656507",
    email: "test@test.dk",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrevious = () => {
    if (activeTab === "contact") {
      setActiveTab("chp");
    }
  };

  const handleNext = () => {
    if (activeTab === "chp") {
      setActiveTab("contact");
    } else {
      alert("Form submitted successfully!");
    }
  };

  const handleSave = () => {
    alert("Contact information saved!");
  };

  return (
    <>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg shadow`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className={`${darkMode ? 'text-gray-200' : 'text-blue-900'} mb-6 flex items-center`}>
            <div className=" mr-2">
              <NotebookPen />
            </div>
            <h1 className="text-2xl font-bold">Edit XRGI®</h1>
          </div>

          <div className="flex ml-5">
            <div
              className={`py-3 px-8 font-semibold rounded-t-lg cursor-pointer mr-2 ${
                activeTab === "chp" ? "bg-yellow-400" : "bg-gray-200"
              } text-blue-900`}
              onClick={() => setActiveTab("chp")}
            >
              XRGI® - CHP
            </div>
            <div
              className={`py-3 px-8 font-semibold rounded-t-lg cursor-pointer ${
                activeTab === "contact" ? "bg-yellow-400" : "bg-gray-200"
              } text-blue-900`}
              onClick={() => setActiveTab("contact")}
            >
              CONTACT ON SITE
            </div>
          </div>

          {/* CHP Form Card */}
          {activeTab === "chp" && (
            <CHPTab
              formData={formData}
              handleInputChange={handleInputChange}
              handleNext={handleNext}
            />
          )}

          {/* Contact Form Card */}
          {activeTab === "contact" && (
            <ContactTab
              formData={formData}
              handleInputChange={handleInputChange}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              handleSave={handleSave}
            />
          )}
        </div>
      </div>
    </>
  );
}
