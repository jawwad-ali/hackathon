import { Sora } from "next/font/google";

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
});

const Newsletter = () => {
  return (
    <div
      className={`${sora.className} mx-4 lg:mx-0 flex flex-col justify-center items-center my-12 mt-[150px]`}
    >
      <h3 className="pb-4 font-bold lg:text-4xl text-3xl text-center -tracking-tight text-[#212121]">
        Subscribe Our Newsletter
      </h3>
      <p className="mb-8 px-5 lg:px-0 font-light text-base text-[#212121]">
        Get the latest information and promo offers directly.
      </p>

      <form className="lg:flex block">
        <input
          type="text"
          placeholder="Input Email address"
          className="pt-[10px] pr-[120px] pb-[10px] pl-[20px] bg-[#fcfcfc] border border-gray-400
           outline-black block lg:inline-block"
        />
        <div className="text-center flex justify-center items-center">
          <button
            className="block lg:inline-block mt-4 lg:mt-0 py-[15px] px-5 flex-shrink-0 bg-black text-white font-semibold 
            text-[0.9rem] ml-3 leading-4"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
