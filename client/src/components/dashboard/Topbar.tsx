import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="mb-10 flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500">
          Continue your internship journey.
        </p>
      </div>

      <button className="rounded-xl bg-white p-3 shadow">
        <Bell />
      </button>

    </header>
  );
}