import { Award, BookOpen, CheckCircle2 } from "lucide-react";

export default function DashboardCard() {
  return (
    <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

      <h2 className="mb-8 text-2xl font-bold">
        Student Dashboard
      </h2>

      <div className="space-y-6">

        <div>
          <div className="mb-2 flex justify-between">
            <span>Internship Progress</span>
            <span>82%</span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div className="h-3 w-[82%] rounded-full bg-blue-600"></div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" />
            Assessment
          </div>

          <strong>92 / 100</strong>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <Award className="text-indigo-600" />
            Certificate
          </div>

          <CheckCircle2 className="text-green-600" />
        </div>

      </div>
    </div>
  );
}