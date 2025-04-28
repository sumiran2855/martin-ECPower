"use client"
import withAuth from "@/component/auth/withAuth";
import ServiceReport from "@/component/dashboard/Services/regular-services";
function ServiceReports() {
  return (
    <div>
      <ServiceReport />
    </div>
  );
}

export default withAuth(ServiceReports);