import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import DashboardCard from "../ui/DashboardCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">

      {/* Background Blobs */}
      <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-32 lg:grid-cols-2 lg:px-8">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            🚀 Assessment-Based Virtual Internships
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Learn.
            <br />
            Build.
            <br />
            <span className="text-blue-600">
              Get Certified.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Skillora empowers students with assessment-driven internships,
            real-world projects, and verified certificates that help them stand
            out to top companies.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
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

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                25K+
              </h3>
              <p className="text-slate-600">
                Students
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                300+
              </h3>
              <p className="text-slate-600">
                Companies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                12K+
              </h3>
              <p className="text-slate-600">
                Certificates
              </p>
            </div>
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <DashboardCard />
        </motion.div>

      </div>

    </section>
  );
}