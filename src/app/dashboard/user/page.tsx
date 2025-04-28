"use client"
import withAuth from "@/component/auth/withAuth";
import UserList from "@/component/dashboard/user/userList";
function Users() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default withAuth(Users);