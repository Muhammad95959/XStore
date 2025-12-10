import signupImage from "../../assets/image-signup.jpg";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header showIcons={false} />
      <div className="flex my-12">
        <div className="image">
          <img src={signupImage} />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form className="flex flex-col gap-10 items-center justify-center">
            <div className="w-full">
              <h1 className="font-medium text-4xl">Log in to XStore</h1>
              <h3 className="text-lg mt-4">Enter your details below</h3>
            </div>
            <div className="flex flex-col gap-12 items-center w-full">
              <input
                className="border-b border-[#B3B3B3] py-2 w-full"
                type="text"
                placeholder="Email or Phone Number"
              />
              <input className="border-b border-[#B3B3B3] py-2 w-full" type="password" placeholder="Password" />
            </div>
            <div className="w-full flex items-center justify-between">
              <button
                className="bg-[#DB4444] py-4 px-10 rounded-sm text-white cursor-pointer hover:opacity-90"
                type="submit"
              >
                Log in
              </button>
              <button type="button" className="flex gap-4 justify-center cursor-pointer text-[#DB4444]">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
