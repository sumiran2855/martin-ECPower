"use client";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/app/dashboard/layout"; 

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { darkMode } = useTheme(); 
  const changeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    localStorage.setItem("language", newLocale);
  };

  return (
    <div className={`flex gap-2 text-sm py-2 mr-10 transition-colors duration-300 
      ${darkMode ? "text-gray-400" : "text-gray-500"}`} 
    >
      {[
        { code: "da", label: "Dansk" },
        { code: "de", label: "Deutsch" },
        { code: "en", label: "English" },
      ].map(({ code, label }, index) => (
        <div key={code} className="flex items-center">
          {index > 0 && <span className={`${darkMode ? "text-gray-600" : "text-gray-400"} mr-2`}>|</span>}
          <button
            onClick={() => changeLanguage(code)}
            className={`cursor-pointer transition-colors duration-200 
              ${i18n.language === code 
                ? darkMode 
                  ? "font-semibold text-white" 
                  : "font-semibold text-gray-900" 
                : darkMode 
                  ? "hover:text-gray-300" 
                  : "hover:text-gray-700"}`}
          >
            {label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
