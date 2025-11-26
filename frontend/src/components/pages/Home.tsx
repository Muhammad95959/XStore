import Categories from "../layout/Categoires";
import FlashSales from "../layout/FlashSales";
import Header from "../layout/Header";
import Hero from "../layout/Hero";
import OurProducts from "../layout/OurProducts";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FlashSales />
      <Categories />
      <OurProducts />
    </>
  );
}
