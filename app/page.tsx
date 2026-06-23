import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroBanner />
    </main>
  );
}
