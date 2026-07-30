export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-xl font-bold text-blue-600">Skillora</h2>
            <p className="mt-2 text-sm text-slate-600">
              Learn • Prove • Achieve
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Skillora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}