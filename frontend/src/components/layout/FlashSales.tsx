import RedHeader from "../ui/RedHeader";
import { products } from "../../data/products";
import RatingStars from "../ui/RatingStars";
import heartIcon from "../../assets/icon-heart.svg";
import eyeIcon from "../../assets/icon-eye.svg";

const productsWithDiscount = products.filter((product) => product.discount > 0);

export default function FlashSales() {
  return (
    <div>
      <RedHeader>Today's</RedHeader>
      <div className="flex justify-center mb-20">
        <div className="container border-b border-[#B3B3B3]">
          <div className="font-semibold text-4xl font-[Inter] tracking-wider mb-6">Flash Sales</div>
          <div className="flex gap-6 w-full overflow-x-auto mb-10 snap-mandatory pb-3">
            {productsWithDiscount.map((product) => {
              return (
                <div className="flex flex-col gap-2 w-[270px] relative snap-start">
                  <div className="bg-[#F5F5F5] w-[270px] h-[250px] shrink-0 p-12 relative group">
                    <img src={product.image} className="w-full h-full object-contain" />
                    <div className="bg-[#DB4444] w-12 h-6 rounded-sm absolute text-[12px] top-3 left-3 text-white flex justify-center items-center">
                      -{Math.round((product.discount / product.price) * 100)}%
                    </div>
                    <div className="absolute top-3 right-3 grid gap-2">
                      <button className="w-8 h-8 p-0.5 rounded-full flex justify-center items-center bg-white cursor-pointer">
                        <img src={heartIcon} />
                      </button>
                      <button className="w-8 h-8 p-0.5 rounded-full flex justify-center items-center bg-white cursor-pointer">
                        <img src={eyeIcon} />
                      </button>
                    </div>
                    <button className="absolute bottom-0 left-0 right-0 bg-black text-white justify-center py-2 font-medium hidden cursor-pointer group-hover:flex">
                      Add To Cart
                    </button>
                  </div>
                  <p className="font-semibold truncate w-full">{product.name}</p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#DB4444] font-semibold">${(product.price - product.discount).toFixed(2)}</p>
                    <p className="text-[#808080] font-semibold line-through">${product.price}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <RatingStars />
                    <p className="text-[#808080] font-semibold text-sm">({product.ratingCount})</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mb-15">
            <button className="text-white bg-[#DB4444] px-10 py-4 font-medium text-lg rounded-sm cursor-pointer hover:opacity-90">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
