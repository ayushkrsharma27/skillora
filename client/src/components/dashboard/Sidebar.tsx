import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  ClipboardList,
  Award,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Briefcase, label: "Internships", path: "#" },
  { icon: ClipboardList, label: "Assessments", path: "#" },
  { icon: Award, label: "Certificates", path: "#" },
  { icon: User, label: "Profile", path: "#" },
  { icon: Settings, label: "Settings", path: "#" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-slate-900 p-6 text-white">

      <h1 className="mb-10 text-3xl font-bold">
        🎓 Skillora
      </h1>

      <nav className="flex-1 space-y-2">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />

              {item.label}
            </NavLink>
          );
        })}

      </nav>

      <button className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-red-500">
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
}