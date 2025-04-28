"use client"
import withAuth from "@/component/auth/withAuth";
import ServiceOverview from "@/component/dashboard/Services/service-overview";
function Service_Overview() {
  return (
    <div>
      <ServiceOverview />
    </div>
  );
}

export default withAuth(Service_Overview);