import Head from "next/head";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      
      <Head>
        <title>Homepage</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Hackathon Project" />
      </Head>

      <NavigationBar />
      <HeroSection />
      <Promotions />
      <Products />
      <Features />
    </div>
  );
}
