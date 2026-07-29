const stats = [
  { value: "25K+", label: "Students" },
  { value: "300+", label: "Companies" },
  { value: "12K+", label: "Certificates" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-3">

        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-5xl font-extrabold text-blue-600">
              {stat.value}
            </h2>

            <p className="mt-2 text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}