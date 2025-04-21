'use client'
import withAuth from "@/component/auth/withAuth";
import SystemConfig from "@/component/dashboard/SystemConfig/systemConfig";
function SystemCongigration() {
  return (
    <div>
      <SystemConfig />
    </div>
  );
}

export default withAuth(SystemCongigration);