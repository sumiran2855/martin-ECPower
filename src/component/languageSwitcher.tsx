"use client";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    localStorage.setItem("language", newLocale);
  };
  return (
    <div className="flex gap-2 text-gray-500 text-sm py-2 mr-10">
      {[
        { code: "da", label: "Dansk" },
        { code: "de", label: "Deutsch" },
        { code: "en", label: "English" },
      ].map(({ code, label }, index) => (
        <div key={code} className="flex items-center">
          {index > 0 && <span className="text-gray-400 mr-2">|</span>}
          <button
            onClick={() => changeLanguage(code)}
            className={`cursor-pointer ${
              i18n.language === code ? "font-semibold text-gray-900" : ""
            }`}
          >
            {label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
