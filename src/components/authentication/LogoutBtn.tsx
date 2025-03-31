"use client";

import { logout } from "@/app/actions/auth-actions";

const LogoutBtn = () => {
  const handleLogout = async () => {
    await logout();
  };
  return <span onClick={handleLogout} className="inline-block w-full text-destructive cursor-pointer text-red-600">Logout</span>;
};

export default LogoutBtn;
