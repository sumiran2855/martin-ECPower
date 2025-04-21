"use client"
import withAuth from "@/component/auth/withAuth";
import Services from "@/component/dashboard/Services/regular-services";
function RegularServices() {
  return (
    <div>
      <Services />
    </div>
  );
}

export default withAuth(RegularServices);