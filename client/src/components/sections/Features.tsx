import {
    Award,
    Briefcase,
    GraduationCap,
    Laptop
} from "lucide-react";

const features = [
    {
        title: "Assessment Based",
        icon: Laptop,
        desc: "Practical skill evaluation."
    },
    {
        title: "Virtual Internships",
        icon: Briefcase,
        desc: "Remote industry experience."
    },
    {
        title: "Verified Certificates",
        icon: Award,
        desc: "Shareable certificates."
    },
    {
        title: "Career Ready",
        icon: GraduationCap,
        desc: "Prepare for placements."
    }
];

export default function Features() {
    return (
        <section className="bg-slate-50 py-24">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-center text-4xl font-bold">
                    Why Choose Skillora?
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl"
                            >

                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                                    <Icon className="text-blue-600" />

                                </div>

                                <h3 className="text-xl font-bold">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 text-slate-600">

                                    {feature.desc}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}