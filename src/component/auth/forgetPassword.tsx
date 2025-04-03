import { useTranslation } from "react-i18next";

export default function ForgetPassword({ setForgotPassword }: any) {
  const { t } = useTranslation("login");
  return (
    <>
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-800 p-6 relative mt-9 h-full">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-4">
            <img
              src="/ecpower2 2.jpg"
              alt="EC Power Logo"
              className="h-16 w-16"
            />
          </div>
          <h1 className="text-xl text-center font-semibold text-blue-900">
            {t("forgotPasswordTitle")}
          </h1>
          <p className="text-center text-sm text-gray-600 mb-6">
            {t("forgotPasswordDescription")}
            <br /> {t("forgotPasswordDescription2")}
          </p>
          <form className="flex flex-col h-full justify-center">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                {t("emailLabel")}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition mt-1 cursor-pointer"
            >
              {t("sendButton")}
            </button>
          </form>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setForgotPassword(false)}
              className="text-sm text-blue-600 cursor-pointer"
            >
              {t("forgotUsername")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
