import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
      </main>
    </>
  );
}