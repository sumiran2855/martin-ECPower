"use client"
import withAuth from "@/component/auth/withAuth";
import EditUser from "@/component/dashboard/properties/properties";
function Properties() {
  return (
    <div>
      <EditUser />
    </div>
  );
}

export default withAuth(Properties);