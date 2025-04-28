"use client"
import withAuth from "@/component/auth/withAuth";
import InactiveUserList from "@/component/dashboard/user/Inactive-user";
function InactiveUsers() {
  return (
    <div>
      <InactiveUserList />
    </div>
  );
}

export default withAuth(InactiveUsers);