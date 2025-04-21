"use client"
import withAuth from '@/component/auth/withAuth';
import AdminSystem from '@/component/dashboard/admin-system/admin-system';
import type { NextPage } from 'next';

const Admin_system: NextPage = () => {
  return (
    <div>
        <AdminSystem />
    </div>
  );
};

export default withAuth(Admin_system);