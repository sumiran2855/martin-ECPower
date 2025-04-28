"use client"
import withAuth from "@/component/auth/withAuth";
import CreateUser from "@/component/dashboard/user/create-user/create-user";
function Create_User() {
  return (
    <div>
      <CreateUser />
    </div>
  );
}

export default withAuth(Create_User);