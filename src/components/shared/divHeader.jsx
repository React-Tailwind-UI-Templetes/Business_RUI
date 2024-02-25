/* eslint-disable react/prop-types */
import Container from "../layout/Container";

export default function Divheader({paraghrap, heading}) {
  return (
    <Container>
      <div className=" mt-10 flex items-center justify-center flex-col  max-w-[860px] mx-auto">
        <h1 className=" text-[30px] sm:text-[41px] md:text-[65px] text-center font-medium text-navColor">{heading}</h1>
        <div className=" bg-themeColor text-center container max-w-[166px] h-1"></div>
        <p className=" pt-4 text-[16px] md:leading-[20.24px] text-center text-textColor">
          {paraghrap}
        </p>
      </div>
    </Container>
  );
}