import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition hover:bg-slate-100"
      aria-label="Toggle theme"
    >
      <Moon size={18} />
    </button>
  );
}