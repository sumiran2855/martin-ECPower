"use client"
import withAuth from "@/component/auth/withAuth";
import UnVerifiedUsers from "@/component/dashboard/user/unVerified-users";
function NotVerifiedUsers() {
  return (
    <div>
      <UnVerifiedUsers />
    </div>
  );
}

export default withAuth(NotVerifiedUsers);