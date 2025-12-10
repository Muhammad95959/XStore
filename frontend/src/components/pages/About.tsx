import Footer from "../layout/Footer";
import Header from "../layout/Header";
import aboutImage from "../../assets/image-about.jpg";
import deliveryIcon from "../../assets/icon-delivery.svg";
import customerServiceIcon from "../../assets/icon-customer-service.svg";
import shieldIcon from "../../assets/icon-shield.svg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showIcons={true} />
      <div className="flex-1 my-20">
        <div className="flex w-full gap-4">
          <div className="flex flex-col flex-1 justify-center items-center">
            <div>
              <h1 className="font-semibold text-6xl tracking-widest font-[Inter]">Our Story</h1>
              <p className="mt-10 max-w-[600px]">
                Founded in 2025, Exclusive Store has grown into one of the leading online shopping platforms in the
                region. With a strong and active presence in South Asia, the platform connects customers with a wide
                network of trusted sellers and well-known brands. Supported by flexible marketing tools, data-driven
                insights, and reliable service solutions, Exclusive Store continues to expand its community of merchants
                and shoppers year after year.
                <br />
                <br />
                The marketplace offers a broad and ever-growing range of products across multiple categories—spanning
                from everyday essentials to specialized consumer goods. Exclusive Store remains committed to providing a
                smooth, secure, and convenient shopping experience for customers while empowering sellers with the right
                tools to succeed.
              </p>
            </div>
          </div>
          <div>
            <img src={aboutImage} />
          </div>
        </div>
        <div className="container flex justify-center justify-self-center mt-20">
          <div className="flex jusitfy-between gap-25">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-17 h-17 rounded-full bg-black border-8 border-[#C1C0C1]">
                <img className="invert relative left-px w-10" src={deliveryIcon} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">FREE AND FAST DELIVERY</h3>
              <p className="text-sm opacity-80">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-17 h-17 rounded-full bg-black border-8 border-[#C1C0C1]">
                <img className="invert relative bottom-px w-9" src={customerServiceIcon} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm opacity-80">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-17 h-17 rounded-full bg-black border-8 border-[#C1C0C1]">
                <img className="invert w-9" src={shieldIcon} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">MONEY BACK GUARANTEE</h3>
              <p className="text-sm opacity-80">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
