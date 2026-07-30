import { Award, BookOpen, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl"
    >

      <h3 className="text-xl font-bold text-slate-900">
        Student Dashboard
      </h3>

      <div className="mt-8">

        <div className="flex justify-between">
          <span>Python Internship</span>
          <span className="font-semibold text-blue-600">
            82%
          </span>
        </div>

        <div className="mt-2 h-3 rounded-full bg-slate-200">
          <div className="h-3 w-4/5 rounded-full bg-blue-600"></div>
        </div>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" />
            <span>Assessment</span>
          </div>

          <strong>92 / 100</strong>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Award className="text-yellow-500" />
            <span>Certificate</span>
          </div>

          <CheckCircle className="text-green-500" />
        </div>

      </div>
    </motion.div>
  );
}