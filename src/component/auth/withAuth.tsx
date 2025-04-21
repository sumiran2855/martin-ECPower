"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decodeAccessToken } from "@/utils/encryption";

export default function withAuth(Component: React.FC) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const [isVerifying, setIsVerifying] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login?reason=unauthorized");
        return;
      }

      const decodedToken = decodeAccessToken(token);
      if (!decodedToken) {
        localStorage.clear();
        router.replace("/login?reason=invalidToken");
        return;
      }

      const loginTime = localStorage.getItem("loginTime");
      if (!loginTime) {
        localStorage.setItem("loginTime", Date.now().toString());
      } else {
        const elapsedTime = Date.now() - parseInt(loginTime, 10);
        if (elapsedTime >= 60 * 60 * 1000) {
          localStorage.clear();
          router.replace("/login?reason=sessionExpired");
          return;
        }
      }

      setIsAuthenticated(true);
      setIsVerifying(false);

      const timeout = setTimeout(() => {
        localStorage.clear();
        router.replace("/login?reason=sessionExpired");
      }, 60 * 60 * 1000);

      return () => clearTimeout(timeout);
    }, [router]);

    if (isVerifying || !isAuthenticated) return null;

    return <Component {...props} />;
  };
}

