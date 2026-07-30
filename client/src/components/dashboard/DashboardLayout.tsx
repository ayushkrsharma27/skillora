import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar />

      <main className="ml-72 p-10">
        {children}
      </main>

    </div>
  );
}