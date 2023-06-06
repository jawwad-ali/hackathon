import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <HeroSection />  
      <Promotions />
      <Products /> 
      <Features />
    </div> 
  );
}