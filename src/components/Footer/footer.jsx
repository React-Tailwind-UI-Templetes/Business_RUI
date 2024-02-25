/* eslint-disable react/jsx-key */
import Container from "../layout/Container";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

export default function Footer() {
  const icons = [
    <BiLogoFacebook />,
    <BiLogoInstagram />,
    <BiLogoTwitter />,
    <BiLogoLinkedin />,
  ];
  return (
    <Container>
      <div className=" container grid  lg:grid-cols-12 gap-10">
        <div className="space-y-6 col-span-4 place-content-start">
          <h1 className=" text-[26px]">Digi.Business</h1>
          <p className=" text-textColor">
            We use multi-mic and echo cancellation <br /> technology so that
            everyone can use device.
          </p>
          <div className=" flex items-center space-x-5">
            {icons.map((icon, i) => (
              <div
                className=" border p-2 rounded-full text-white bg-themeColor"
                key={i}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-8 place-items-end">
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 text-[14px] ">
            <div className="flex flex-col gap-3">
              <h2 className="text-[21px] ">Company</h2>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Features
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Carear
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Blog
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[21px] ">Resources</h2>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Terms of Use
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Privace Policy{" "}
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Legal Notice
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[21px] ">Links</h2>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Feedback
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Privace Policy
              </p>
              <p className="  text-navColor cursor-pointer transition-all duration-300">
                Legal Notice
              </p>
            </div>
          </div>
        </div>
      </div>
 
    </Container>
  );
}
