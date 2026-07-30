import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
// import TrustedCompanies from "../components/sections/TrustedCompanies";
// import Features from "../components/sections/Features";
// import InternshipPaths from "../components/sections/InternshipPaths";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        {/* <TrustedCompanies /> */}
        {/* <Features /> */}
        {/* <InternshipPaths /> */}
      </main>

      <Footer />
    </>
  );
}