"use client"
import withAuth from "@/component/auth/withAuth";
import OnlineManual from "@/component/dashboard/online-manual/manual";
function Online_Manual() {
  return (
    <div>
      <OnlineManual />
    </div>
  );
}

export default withAuth(Online_Manual);