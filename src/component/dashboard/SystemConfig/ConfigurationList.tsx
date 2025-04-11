import { BadgeInfo, ChevronDown } from "lucide-react";
import DetailRow from "./DetailRow";
import { useTheme } from "@/app/dashboard/layout";
interface ConfigItem {
  id: string;
  date: string;
  isExpanded?: boolean;
  details?: any;
}

interface Props {
  currentConfigs: ConfigItem[];
  toggleExpand: (id: string) => void;
}

export default function ConfigurationList({
  currentConfigs,
  toggleExpand,
}: Props) {
  const { darkMode } = useTheme();
  return (
    <div className="mb-6">
      {currentConfigs.map((config: any) => (
        <div
          key={config.id}
          className="border-b border-gray-200 last:border-b-0"
        >
          <div
            className={`py-3 px-4 flex justify-between items-center cursor-pointer ${
              config.isExpanded
                ? darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
                : darkMode
                ? "hover:bg-gray-800"
                : "hover:bg-gray-50"
            }`}
            onClick={() => toggleExpand(config.id)}
          >
            <span className={`${darkMode ? "text-gray-200" : "text-gray-800"} font-medium`}>{config.date}</span>
            <div className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              {config.isExpanded ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
          </div>

          {config.isExpanded && config.details && (
            <div className={`${darkMode ? "bg-gray-800" : "bg-blue-50"} p-4 md:p-6`}>
              <div className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"} rounded-md shadow-sm p-4`}>
                <h4 className="text-lg font-medium mb-4">
                  Control Panel
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3">
                  {/* Column 1 */}
                  <div className="space-y-3">
                    <DetailRow label="Date:" value={config.details.date} />
                    <DetailRow
                      label="Display PCB, Serial no.:"
                      value={config.details.displayPCB}
                    />
                    <DetailRow
                      label="Software version:"
                      value={config.details.softwareVersion}
                      icon={
                        <BadgeInfo className="mx-1 text-blue-500 w-5 h-5 cursor-pointer" />
                      }
                    />
                    <DetailRow
                      label="HW version:"
                      value={config.details.hwVersion}
                    />
                    <DetailRow
                      label="Supplier:"
                      value={config.details.supplier}
                    />
                    <DetailRow label="Size:" value={config.details.size} />
                    <DetailRow
                      label="Propellant:"
                      value={config.details.propellant}
                    />
                    <DetailRow
                      label="PU number:"
                      value={config.details.puNumber}
                    />
                    <DetailRow
                      label="Technology:"
                      value={config.details.technology}
                    />
                    <DetailRow
                      label="Electricity sales:"
                      value={config.details.electricitySales}
                    />
                    <DetailRow
                      label="Sale weekdays:"
                      value={config.details.saleWeekdays}
                    />
                    <DetailRow
                      label="Sale Saturday:"
                      value={config.details.saleSaturday}
                    />
                    <DetailRow
                      label="Sale Sunday:"
                      value={config.details.saleSunday}
                    />
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-3">
                    <DetailRow
                      label="Type of communication:"
                      value={config.details.communicationType}
                    />
                    <DetailRow
                      label="Heat pump 2 efficiency:"
                      value={config.details.heatPump2Efficiency.toString()}
                    />
                    <DetailRow
                      label="Sender (country):"
                      value={config.details.sender}
                    />
                    <DetailRow
                      label="Terminal serial no.:"
                      value={config.details.terminalSerialNo}
                    />
                    <DetailRow
                      label="SIM card no.:"
                      value={config.details.simCardNo}
                    />
                    <DetailRow
                      label="Operator:"
                      value={config.details.operator}
                    />
                    <DetailRow
                      label="High load Weekdays:"
                      value={config.details.highLoadWeekdays}
                    />
                    <DetailRow
                      label="High load Saturday:"
                      value={config.details.highLoadSaturday}
                    />
                    <DetailRow
                      label="High load Sunday:"
                      value={config.details.highLoadSunday}
                    />
                    <DetailRow
                      label="Load weekdays:"
                      value={config.details.loadWeekdays}
                    />
                    <DetailRow
                      label="Load Sunday:"
                      value={config.details.loadSunday}
                    />
                    <DetailRow
                      label="High load Sunday:"
                      value={config.details.highLoadSundayDuplicate}
                    />
                    <DetailRow
                      label="Power Unit efficiency limit:"
                      value={config.details.powerUnitEfficiencyLimit}
                    />
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-3">
                    <DetailRow
                      label="Heat pump 1 efficiency:"
                      value={config.details.heatPump1Efficiency.toString()}
                    />
                    <DetailRow
                      label="Heat back up:"
                      value={config.details.heatBackUp}
                    />
                    <DetailRow
                      label="System module:"
                      value={config.details.systemModule}
                    />
                    <DetailRow label="" />
                    <DetailRow label="" />
                    <DetailRow label="" />
                    <DetailRow
                      label="Consumption in high load:"
                      value={config.details.consumptionHighLoad}
                    />
                    <DetailRow
                      label="Consumption in low load:"
                      value={config.details.consumptionLowLoad}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
