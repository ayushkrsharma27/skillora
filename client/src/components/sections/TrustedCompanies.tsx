export default function TrustedCompanies() {
    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Infosys",
        "TCS",
        "Accenture",
        "IBM",
        "Oracle"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">

            <h2 className="text-center text-3xl font-bold">
                Trusted by Leading Companies
            </h2>

            <div className="mt-14 flex animate-pulse justify-center gap-8 flex-wrap">

                {companies.map(company => (

                    <div
                        key={company}
                        className="rounded-2xl border bg-white px-8 py-5 shadow-md hover:-translate-y-2 transition"
                    >
                        <span className="font-semibold">
                            {company}
                        </span>
                    </div>

                ))}

            </div>

        </section>
    );
}