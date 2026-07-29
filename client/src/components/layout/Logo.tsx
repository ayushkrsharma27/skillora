import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
        <GraduationCap size={22} />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Skillora
        </h1>

        <p className="text-xs text-slate-500">
          Learn • Prove • Achieve
        </p>
      </div>
    </Link>
  );
}