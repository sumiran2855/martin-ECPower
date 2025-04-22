"use client"
import withAuth from "@/component/auth/withAuth";
import ServiceReport from "@/component/dashboard/Services/service-report/service-report";
function ServiceReports() {
  return (
    <div>
      <ServiceReport />
    </div>
  );
}

export default withAuth(ServiceReports);