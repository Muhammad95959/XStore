import eyeIcon from "../../assets/icon-eye.svg";
import heartIcon from "../../assets/icon-heart.svg";
import { products } from "../../data/products";
import RatingStars from "../ui/RatingStars";
import RedHeader from "../ui/RedHeader";

export default function OurProducts() {
  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="container border-b border-[#B3B3B3] pb-20">
          <RedHeader>Our Products</RedHeader>
          <div className="font-semibold text-4xl font-[Inter] tracking-wider mb-15">Explore Our Products</div>
          <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {products.map((product, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 relative snap-start cursor-pointer">
                  <div className="bg-[#F5F5F5] h-[250px] shrink-0 p-12  relative group">
                    <img src={product.image} className="w-full h-full object-contain" />
                    <div className="absolute top-3 right-3 grid gap-2">
                      <button className="w-8 h-8 p-0.5 rounded-full flex justify-center items-center bg-white cursor-pointer hover:invert-10 duration-100">
                        <img src={heartIcon} />
                      </button>
                      <button className="w-8 h-8 p-0.5 rounded-full flex justify-center items-center bg-white cursor-pointer hover:invert-10 duration-100">
                        <img src={eyeIcon} />
                      </button>
                    </div>
                    <button className="absolute bottom-0 left-0 right-0 bg-black text-white justify-center py-2 font-medium hidden cursor-pointer group-hover:flex hover:opacity-80">
                      Add To Cart
                    </button>
                  </div>
                  <p className="font-semibold truncate w-full">{product.name}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#DB4444] font-semibold">${(product.price - product.discount).toFixed(2)}</p>
                    <p
                      className="text-[#808080] font-semibold line-through"
                      style={{ display: product.discount > 0 ? "block" : "none" }}
                    >
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <RatingStars />
                    <p className="text-[#808080] font-semibold text-sm">({product.ratingCount})</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
