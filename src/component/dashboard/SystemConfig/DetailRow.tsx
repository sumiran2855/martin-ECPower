import { useTheme } from "@/app/dashboard/layout";

export default function DetailRow({
    label,
    value,
    icon,
  }: {
    label: string;
    value?: string;
    icon?: React.ReactNode;
  }) {
    const {darkMode} = useTheme();
    return (
      <div className="flex justify-between items-start">
      <div className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {label}
      </div>
      <div className={`text-sm flex items-center ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
        {icon} {value}
      </div>
    </div>
    );
  }