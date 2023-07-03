import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <Promotions />
      <Products />
      <Features /> 
      <Newsletter /> 
    </div>
  );
}
