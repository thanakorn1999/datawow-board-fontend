import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-green-500 h-screen w-screen">
      <Outlet />
    </div>
  );
}
