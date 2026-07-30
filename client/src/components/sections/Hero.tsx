import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import DashboardCard from "../ui/DashboardCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* Background Decoration */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"></div>

        <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl"></div>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Assessment-Based Virtual Internships
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Learn.
            <br />
            Build.
            <br />
            <span className="text-blue-600">Get Certified.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Skillora helps students gain practical experience through
            assessments, real-world projects and industry-recognized
            certificates trusted by companies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/internships">
              <Button>
                Explore Internships
              </Button>
            </Link>

            <Link to="/companies">
              <Button variant="outline">
                Register Company
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <DashboardCard />
        </motion.div>

      </div>
    </section>
  );
}