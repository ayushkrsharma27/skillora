import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import DashboardCard from "../ui/DashboardCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:px-8">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="flex-1"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Assessment-Based Virtual Internships
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Learn.
            <br />
            Build.
            <br />
            Get Certified.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Skillora helps students learn practical skills through
            assessments, real-world projects and verified certificates trusted
            by companies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/internships">
              <Button>
                Explore Internships
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="/company-register">
              <Button variant="outline">
                Register Company
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex-1"
        >
          <DashboardCard />
        </motion.div>

      </div>
    </section>
  );
}