import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <HeroSection />  
      <Promotions />
      <Products /> 
      <Features />
      <Newsletter />
      <Footer />
    </div> 
  );
}