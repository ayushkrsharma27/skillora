export default function InternshipPaths() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Explore Internship Paths
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Web Development",
            "Python",
            "Java",
            "Artificial Intelligence",
            "Data Science",
            "UI / UX Design",
          ].map((path) => (
            <div
              key={path}
              className="rounded-2xl border p-6 shadow-sm"
            >
              {path}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}