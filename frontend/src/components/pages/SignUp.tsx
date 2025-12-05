import { Link } from "react-router-dom";
import googleIcon from "../../assets/icon-google.svg";
import signupImage from "../../assets/signup-image.jpg";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header showIcons={false} />
      <div className="flex my-12">
        <div className="image">
          <img src={signupImage} />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form className="flex flex-col gap-10 items-center justify-center">
            <div>
              <h1 className="font-medium text-4xl">Create an account</h1>
              <h3 className="text-lg mt-4">Enter your details below</h3>
            </div>
            <div className="flex flex-col gap-12 items-center w-full">
              <input className="border-b border-[#B3B3B3] py-2 w-full" type="text" placeholder="Name" />
              <input
                className="border-b border-[#B3B3B3] py-2 w-full"
                type="text"
                placeholder="Email or Phone Number"
              />
              <input className="border-b border-[#B3B3B3] py-2 w-full" type="password" placeholder="Password" />
            </div>
            <div className="w-full">
              <button
                className="bg-[#DB4444] rounded-sm w-full py-4 text-white cursor-pointer hover:opacity-90"
                type="submit"
              >
                Create Account
              </button>
              <button
                type="button"
                className="flex gap-4 justify-center border border-[#B3B3B3] rounded-sm p-4 w-full mt-4 cursor-pointer hover:bg-[#DB444411]"
              >
                <img className="w-5" src={googleIcon} />
                <p>Sign up with Google</p>
              </button>
            </div>
            <div className="flex gap-2 text-lg">
              <p className="opacity-75">Already have account?</p>
              <Link to="/login" className="text-[#DB4444] hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
