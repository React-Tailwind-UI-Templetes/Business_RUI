/* eslint-disable react/prop-types */

export default function Card({ image, heading, title, active }) {
  return (
    <div
      className={` md:w-[360px] space-y-3 ${
        active ? active : "shadow-sm"
      }  rounded-lg bg-white px-5 py-10`}
    >
      <img src={image} alt="image" className=" size-10 container" />
      <h1 className=" pt-3 text-[#2C3847] font-semibold uppercase text-center leading-[17.71px] md:text-[20px] sm:text-[18px] text-[15px]">
        {heading}
      </h1>
      <p className=" pt-3 text-textColor md:leading-[20.71px] leading-[15.71px] text-center md:text-[14px] sm:text-[12px] text-[10px]">
        {title}
      </p>
    </div>
  );
}
