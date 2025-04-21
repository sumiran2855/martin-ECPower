import { useTheme } from "@/app/dashboard/layout";
import { ChevronDown, Server } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import ContactInfo from "./contactInfo";
import ServiceContactTable from "./serviceContact";
import Gauge from "./guage";
import StatusCard from "./statusCard";
import BarChart from "./Barchart";
import ConfigRow from "./configRow";
import ServiceLogEntry from "./serviceLog";

const XRGIDashboard = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`max-w-[1440px] mx-auto p-4 rounded-xl shadow ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-md mb-4 flex flex-col md:flex-row items-start md:items-center">
        <Server className="text-blue-900 dark:text-blue-100 mx-2" />{" "}
        <h1 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
          1979599994 XRGI-25 CAR8 test
        </h1>
      </div>

      <CollapsibleSection title="General">
        <ContactInfo
          systemInfo={{
            name: "EC POWER - LCWH LNG / Testanlæg #1",
            address: "testing 7",
            city: "Hinnerup",
            postalCode: "8382",
            country: "US",
            phone: "",
            email: "",
          }}
          dealerInfo={{
            name: "EC POWER - LCWH LNG",
            address: "testing 7",
            city: "Hinnerup",
            postalCode: "8382",
            country: "US",
            phone: "",
            email: "",
          }}
          contactInfo={{
            name: "Test Technician 1",
            address: "",
            city: "",
            postalCode: "",
            country: "",
            phone: "41666307",
            email: "test@test.dk",
          }}
        />
      </CollapsibleSection>

      <CollapsibleSection title="ECP Gold">
        <ServiceContactTable
          systemInfo={{}}
          dealerInfo={{
            name: "Pia Nielsen",
            phone: "00 45 87 43 41 00",
            email: "account@ecpower.de",
          }}
          contactInfo={{
            name: "Test Technician 1",
            phone: "41666307",
            email: "test@test.dk",
          }}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Last Call">
        {/* Header */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-blue-50"
          } flex flex-col md:flex-row justify-between gap-2 text-sm  p-4 rounded-lg mb-4 shadow-sm mx-auto mt-1`}
        >
          <div
            className={`${
              darkMode ? " text-gray-200" : "text-slate-800"
            }  font-medium`}
          >
            Calls - <span className="font-semibold">1979599994</span>
          </div>
          <div
            className={`${
              darkMode ? " text-gray-200" : "text-slate-800"
            }  font-medium`}
          >
            Time of call: <span className="font-semibold">02-11-24 15:14</span>
          </div>
        </div>

        {/* Status Section */}
        <div className={`${darkMode ? "bg-gray-800" : ""} p-4`}>
          <h3
            className={`${
              darkMode ? "text-gray-200" : ""
            } text-sm font-semibold mb-3 text-blue-900 ml-2`}
          >
            Operation status
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StatusCard
              title=""
              values={[
                { label: "Status", value: "0, Full Stop" },
                { label: "Stopped", value: "698 hours, 36 minutes" },
                { label: "Oil pressure", value: "No" },
                { label: "Gas Alarm", value: "NO" },
              ]}
            />
            <div className="grid grid-cols-2 gap-4">
              <StatusCard
                title=""
                values={[
                  { label: "Normal start", value: "0" },
                  { label: "Normal hot", value: "0" },
                  { label: "Normal Limit", value: "0" },
                  { label: "Normal Cool", value: "0" },
                  { label: "Fly Start", value: "0" },
                ]}
              />
              <StatusCard
                title=""
                values={[
                  { label: "Fly Hot", value: "0" },
                  { label: "Fly Trailing Hot", value: "0" },
                  { label: "Fly Cool", value: "0" },
                  { label: "Fly Coefficient", value: "0" },
                ]}
              />
            </div>
          </div>

          {/* Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Gauge
              label="Cold  •  Normal  •  Warm"
              title="Control Panel Temperature"
              value={60}
            />
            <Gauge
              label="Low  •  Medium  •  High"
              title="Control Panel Antenna Signal"
              value={90}
            />
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Customer Login">
        <div
          className={`${
            darkMode ? "bg-gray-800" : ""
          } grid grid-cols-2 gap-2 p-4`}
        >
          <div className="text-sm">Last Login</div>
          <div className="text-sm">25-12-2024</div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Status 2025">
        <div className={`${darkMode ? " bg-gray-800" : ""} mb-4 p-4`}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium">Last 7 days</span>
            <ChevronDown size={16} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Latest update:</div>
                <div className="text-sm">02-11-24 15:14</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Operating hours:</div>
                <div className="text-sm">out of possible hours</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Last service:</div>
                <div className="text-sm">30-08-24 13:40</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">
                  Operational hours to next service:
                </div>
                <div className="text-sm">3629 / Latest 10-08-25 12:00</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Elec. production:</div>
                <div className="text-sm">kWh</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Heat production:</div>
                <div className="text-sm">kWh</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Fuel Consumption:</div>
                <div className="text-sm">kWh</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">First Call:</div>
                <div className="text-sm">23-06-20 14:23:00</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Site elec. consumption:</div>
                <div className="text-sm">0</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Covered by XRGI® system:</div>
                <div className="text-sm">0</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Covered by power purchase:</div>
                <div className="text-sm">0</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm">Sold electricity:</div>
                <div className="text-sm">0</div>
              </div>
            </div>
          </div>

          <BarChart />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Existing Configuration">
        <div
          className={`${
            darkMode ? " bg-gray-800 text-white" : ""
          } grid grid-cols-1 md:grid-cols-4 gap-6 p-4`}
        >
          <div className="space-y-1">
            <ConfigRow label="Configuration changed" value="01-09-24 13:53" />
            <ConfigRow label="Heat pump 1 efficiency" value="0" />
            <ConfigRow label="High load Weekdays" value="00:00-23:59" />
            <ConfigRow label="Load weekdays" value="00:00-23:59" />
            <ConfigRow label="Electricity sales" value="No" />
            <ConfigRow label="Sender (country)" value="England" />
            <ConfigRow label="Serial no." value="08248244" />
          </div>

          <div className="space-y-1">
            <ConfigRow
              label="System/XRGI® type"
              value="Tedom 6.7 GT - Natural gas"
            />
            <ConfigRow label="Heat pump 2 efficiency" value="" />
            <ConfigRow label="High load Saturday" value="00:00-23:59" />
            <ConfigRow label="Load Saturday" value="00:00-23:59" />
            <ConfigRow label="Sale weekdays" value="00:00-23:59" />
            <ConfigRow label="Stop in low load" value="No" />
            <ConfigRow label="Version number" value="1.0.16" />
          </div>

          <div className="space-y-1">
            <ConfigRow label="Generation" value="Unknown" />
            <ConfigRow label="Heat back up" value="" />
            <ConfigRow label="High load Sunday" value="00:00-23:59" />
            <ConfigRow label="Load Sunday" value="00:00-23:59" />
            <ConfigRow label="Sale Saturday" value="00:00-23:59" />
            <ConfigRow label="Consumption in high load" value="224 kW" />
            <ConfigRow label="SIM card no." value="34141523IMSI-M" />
          </div>

          <div className="space-y-1">
            <ConfigRow label="Communication type" value="Ethernet / Unknown" />
            <ConfigRow label="Meter type" value="Unknown" />
            <ConfigRow label="Sale Sunday" value="00:00-23:59" />
            <ConfigRow label="Consumption in low load" value="224 kW" />
            <ConfigRow label="Terminal serial no." value="PT003000847435" />
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Last Service log">
        <div className={`${darkMode ? "bg-gray-800" : ""} p-4`}>
          <ServiceLogEntry
            date="01-05-23 00:00"
            createdBy="Eva Engels"
            establishedDate="01-05-23 15:07"
          />

          <ServiceLogEntry
            date="28-04-23 00:00"
            createdBy="Lone Eismann"
            establishedDate="28-04-23 11:17"
          />
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default XRGIDashboard;
