import Categories from "../layout/Categoires";
import FlashSales from "../layout/FlashSales";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Hero from "../layout/Hero";
import OurProducts from "../layout/OurProducts";

export default function Home() {
  return (
    <>
      <Header showIcons={true} />
      <Hero />
      <FlashSales />
      <Categories />
      <OurProducts />
      <Footer />
    </>
  );
}
