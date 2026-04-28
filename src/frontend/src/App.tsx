import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SchoolInfo from "@/components/SchoolInfo";
import ServiceHighlights from "@/components/ServiceHighlights";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServiceHighlights />
        <SchoolInfo />
      </main>
      <Footer />
    </div>
  );
}
