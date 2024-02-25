import Container from "../layout/Container";
import image from "../../../public/hero_image/hero.png";
import image1 from "../../../public/hero_image/hero1.png";
import Brand from "../shared/brand";
import {
  BiAlarm,
  BiAccessibility,
  BiAddToQueue,
  BiAnalyse,
} from "react-icons/bi";

function Hero() {
  return (
    <Container>
      <div className=" place-items-center place-content-between xl:-mt-16 grid grid-cols-1 px-5 md:grid-cols-2 sm:gap-16 md:gap-20">
        {/* left side */}
        <div className=" xl:-mt-20 sm:space-y-8 space-y-4">
          <h1 className="text-[30px] sm:text-[70px] md:text-[100px] text-black/70 md:leading-[82px] sm:leading-[60px] leading-[30px] font-medium">
            Growing your <br />{" "}
            <span className=" text-themeColor  ">Business</span>
          </h1>
          <p className=" text-textColor max-w-[400px] lg:max-w-[600px] ">
            Relation so in confined smallest children unpacked delicate. Why sir
            end believe uncivil respect. Always get adieus nature day course for
            common. My little garret repair to desire he esteem.
          </p>

          <div className=" grid place-content-start">
          <div className=" gap-1 bg-white shadow-xl md:max-w-[500px]  max-w-[300px] rounded-full md:px-5 px-3 py-2 flex items-center justify-center">
            <input
              type="text"
              className=" text-black outline-none md:ml-2 ml-1 font-medium uppercase"
              placeholder="Enter your email"
            />
            <button className="  text-white bg-themeColor md:px-12 px-4 py-3 font-semibold rounded-full">
              Send
            </button>
          </div>
        </div>
          <div className=" hidden md:flex items-start">
            <div>
              <Brand name={" airbnb"} icon={<BiAlarm />} />
              <Brand name={"Microsoft"} icon={<BiAnalyse />} />
            </div>
            <div>
              <Brand name={"Dropbox"} icon={<BiAccessibility />} />
              <Brand name={"stripe"} icon={<BiAddToQueue />} />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" relative">
          <img src={image} className=" object-cover" alt="" />
          <img
            src={image1}
            className=" absolute md:-right-10  bottom-4"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
