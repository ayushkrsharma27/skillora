import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

      </div>

    </section>
  );
}