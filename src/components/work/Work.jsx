import Divheader from "../shared/divHeader";
import work from "../../../public/work.png";
export default function Work() {
  return (
    <>
      <Divheader
        heading={"How it Works?"}
        paraghrap={
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
        }
      />
      <div className=" md:mt-20 container px-5 grid lg:grid-cols-7 lg:gap-20">
        <div className=" col-start-2  hidden lg:block">
          <img src={work} alt="work image" />
        </div>
        <div className=" col-span-5 ">
          <h1 className=" text-[26px] font-semibold text-navColor">
            How to create account?
          </h1>
          <p className=" text-textColor text-[17px] pb-4 pt-5 leading-[26px]">
            And produce say the ten moments parties. Simple innate summer fat
            appear basket his desire joy. Outward clothes promise at gravity do
            excited. Sufficient particular impossible by reasonable oh
            expression is. Yet preference connection unpleasant yet melancholy
            but end appearance. And excellence partiality estimating terminated
            day everything.
          </p>
          <p className="text-textColor text-[17px] pb-4 pt-5 leading-[26px]">
            ‍Warmly little before cousin sussex entire men set. Blessing it
            ladyship on sensible judgment settling outweigh. Worse linen an of
            civil jokes leave offer. Parties all clothes removal cheered calling
            prudent her. And residence for met the estimable disposing. Mean if
            he they been no hold mr. Is at much do made took held help. Latter
            person am secure of estate genius at.
          </p>

          <div className=" md:mt-16 mt-12 lg:mt-20 flex flex-1 items-center gap-3">
            <button className=" bg-themeColor md:px-6 px-4   md:py-3   py-4 rounded-full text-white uppercase text-[14px] font-medium">
              Create account
            </button>
            <button className=" border-2 md:px-6 px-4   md:py-3   py-4 rounded-full  text-navColor uppercase text-[14px] font-medium">
              Create account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
