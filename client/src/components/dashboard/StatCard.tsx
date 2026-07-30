import type { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="mb-4 flex items-center justify-between">
        {icon}
      </div>

      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold">
        {value}
      </p>

    </div>
  );
}