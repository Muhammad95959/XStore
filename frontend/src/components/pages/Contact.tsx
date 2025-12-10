import Footer from "../layout/Footer";
import Header from "../layout/Header";
import phoneIcon from "../../assets/icon-phone.svg";
import mailIcon from "../../assets/icon-mail.svg";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showIcons={true} />
      <div className="flex justify-center items-center flex-1 my-20">
        <div className="container flex gap-4 justify-between items-start">
          <div>
            <div className="border-b border-[#B3B3B3] pb-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DB4444]">
                  <img className="invert" src={phoneIcon} />
                </div>
                <h3 className="font-medium">Call To Us</h3>
              </div>
              <p className="pt-5 text-sm opacity-80">We are available 24/7, 7 days a week.</p>
              <p className="pt-5 text-sm opacity-80">Phone: unavailable for now</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DB4444]">
                  <img className="invert" src={mailIcon} />
                </div>
                <h3 className="font-medium">Write To Us</h3>
              </div>
              <p className="pt-5 text-sm max-w-65 opacity-80">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="pt-5 text-sm opacity-80">Emails: unavailable for now</p>
              <p className="pt-5 text-sm opacity-80">Emails: unavailable for now</p>
            </div>
          </div>
          <form className="flex flex-col">
            <div className="flex gap-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-60 bg-[#F5F5F5] p-3 mt-3 rounded-sm"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                name="email"
                className="w-60 bg-[#F5F5F5] p-3 mt-3 rounded-sm"
              />
              <input
                required
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="w-60 bg-[#F5F5F5] p-3 mt-3 rounded-sm"
              />
            </div>
            <textarea
              required
              name="message"
              rows={7}
              placeholder="Your Message"
              className="w-full bg-[#F5F5F5] p-3 mt-6 rounded-sm resize-none"
            />
            <button
              type="submit"
              className="mt-6 py-3 px-10 text-sm font-medium bg-[#DB4444] text-white rounded-sm cursor-pointer hover:opacity-90 self-end"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
