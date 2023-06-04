import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavigationBar />
      <HeroSection />
      <Promotions />
      <Products />
    </div>
  );
}
