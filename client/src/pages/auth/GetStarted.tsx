import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-center text-4xl font-bold">
          Welcome to Skillora 🚀
        </h1>

        <p className="mt-3 text-center text-slate-600">
          Choose how you'd like to join Skillora.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <Link
            to="/student-register"
            className="rounded-2xl border p-8 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="text-5xl">🎓</div>

            <h2 className="mt-4 text-2xl font-bold">
              Student
            </h2>

            <p className="mt-2 text-slate-500">
              Learn skills, complete internships and earn certificates.
            </p>
          </Link>

          <Link
            to="/company-register"
            className="rounded-2xl border p-8 text-center transition hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl"
          >
            <div className="text-5xl">🏢</div>

            <h2 className="mt-4 text-2xl font-bold">
              Company
            </h2>

            <p className="mt-2 text-slate-500">
              Post internships and discover talented students.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}