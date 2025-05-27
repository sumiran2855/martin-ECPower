import { roleMap, language, company } from "@/component/dashboard/user/type";
import { useTheme } from "@/app/dashboard/layout";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CreateUser } from "@/controller/user-controller";
import { getAuthTokens } from "@/helper/authHelper";
import { useAlerts } from "@/component/alert";


export default function CreateAccount() {
  const { darkMode } = useTheme();
  const { token, idToken } = getAuthTokens();
  const { addAlert, AlertList } = useAlerts();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get role options from roleMap keys
  const roleOptions = Object.keys(roleMap);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: company[0],
      role: roleOptions[0],
      language: language[0],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: company[0],
      role: roleOptions[0],
      language: language[0],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true);
    
    try{
      const payload = {
        name: formData.name.toUpperCase(),
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        role: roleMap[formData.role],
        language: formData.language,
      };
      const result = await CreateUser(token, idToken, payload);
      addAlert({
        type: "success",
        message: "User created successfully!",
        showIcon: true,
      });
      console.log("User created successfully:", result);
      resetForm();
    } catch (error) {
      console.error("Error creating create user:", error);
      addAlert({
        type: "error",
        message: "Failed to create user. Please try again.",
        showIcon: true,
      });
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };
  
  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-50"} rounded-lg shadow-sm transition-colors w-full p-8`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[35rem] md:h-[35rem]">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100 dark:border-gray-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full overflow-hidden w-5/6 h-5/6 flex items-center justify-center">
                    <img 
                    src="/create_background 1.png" 
                    alt="XRGi equipment" 
                    className="w-full h-full object-contain"
                    />
                    </div>
                </div>
            </div>
        </div>

        
        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col md:px-8">
          <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"} text-center lg:text-left`}>
            Create your Account
          </h1>
          
          <h2 className={`text-lg md:text-xl font-medium mb-2 ${darkMode ? "text-blue-400" : "text-blue-600"} text-center lg:text-left`}>
            Monitor all your XRGi®-units
          </h2>
          
          <p className={`text-sm md:text-base mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"} text-center lg:text-left`}>
            Download statistics, monitor production and usage,<br className="hidden sm:block"/> 
            and receive text/email on error messages.
          </p>
          
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Name
              </label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 mt-1 border rounded-md ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`} 
              />
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 mt-1 border rounded-md ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`} 
              />
            </div>
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Phone
              </label>
              <input 
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full p-3 mt-1 border rounded-md ${
                  darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                }`} 
              />
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Role
              </label>
              <div className="relative mt-1">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  {roleOptions.map((roleLabel: string) => (
                    <option key={roleLabel} value={roleLabel}>
                      {roleLabel}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Language
              </label>
              <div className="relative mt-1">
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  {language.map((language:string) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Company
              </label>
              <div className="relative mt-1">
                <select
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-md appearance-none cursor-pointer ${
                    darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
                  }`}
                >
                  {company.map((company:string) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className={`w-full p-3 text-white font-medium rounded-md ${
                  darkMode ? "bg-blue-700 hover:bg-blue-800" : "bg-blue-800 hover:bg-blue-900"
                } transition-colors`}
              >
                Create new user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}