"use client"
import withAuth from "@/component/auth/withAuth";
import SurveillanceList from "@/component/dashboard/Services/surveillance/surveillance";
function Surveillance() {
  return (
    <div>
      <SurveillanceList />
    </div>
  );
}

export default withAuth(Surveillance);