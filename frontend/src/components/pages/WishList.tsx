import Footer from "../layout/Footer";
import Header from "../layout/Header";
import WishListForYou from "../layout/WishListForYou";
import WishListProducts from "../layout/WishListProducts";

export default function WishList() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showIcons={true} />
      <div className="flex-1">
        <WishListProducts />
        <WishListForYou />
      </div>
      <Footer />
    </div>
  );
}
