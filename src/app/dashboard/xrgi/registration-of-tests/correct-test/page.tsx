'use client'
import withAuth from "@/component/auth/withAuth";
import XRGIFrom from "@/component/dashboard/XRGI/XRGIForm";
function XRGI() {
  return (
    <div>
      <XRGIFrom />
    </div>
  );
}

export default withAuth(XRGI);