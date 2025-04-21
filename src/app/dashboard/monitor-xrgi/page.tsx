"use client"
import withAuth from '@/component/auth/withAuth';
import MonitorXRGI from '@/component/dashboard/MonitorXRGI/MonitorXRGI';
import type { NextPage } from 'next';

const Monitor_XRGI: NextPage = () => {
  return (
    <div>
        <MonitorXRGI />
    </div>
  );
};

export default withAuth(Monitor_XRGI);