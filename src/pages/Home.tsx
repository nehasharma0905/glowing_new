import AfterBestSeller from "../components/AfterBestSeller";
import AfterNewArrival from "../components/AfterNewArrival";
import BestsellerSection from "../components/Bestseller_section";
import Hero from "../components/Hero-section";
import NewArrivalSection from "../components/NewArrivalSection";
import ShopSection from "../components/Shop_section";
import SignUpSection from "../components/SignUpSection";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <ShopSection />
      <BestsellerSection />
      <AfterBestSeller />
      <NewArrivalSection />
      <AfterNewArrival />
      <SignUpSection />
    </div>
  );
}

export default Home;
