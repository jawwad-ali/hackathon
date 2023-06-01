import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavigationBar />
      <HeroSection />
    </div>
  );
}