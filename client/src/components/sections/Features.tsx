export default function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold">Why Choose Skillora?</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Assessment Based",
            "Virtual Internships",
            "Verified Certificates",
            "Career Ready",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <h3 className="font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}