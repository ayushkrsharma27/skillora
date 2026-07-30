const stats = [
  { value: "25K+", label: "Students" },
  { value: "300+", label: "Companies" },
  { value: "12K+", label: "Certificates" },
];

export default function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 text-center md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold text-blue-600">
              {item.value}
            </h2>

            <p className="mt-2 text-lg text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}