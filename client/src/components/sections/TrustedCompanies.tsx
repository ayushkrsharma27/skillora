export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold">Trusted by Companies</h2>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Accenture"].map(
            (company) => (
              <div
                key={company}
                className="rounded-xl border p-6 shadow-sm hover:shadow-md"
              >
                {company}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}