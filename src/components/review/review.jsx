import Divheader from "../shared/divHeader";
export default function Customer() {
  return (
    <>
      <Divheader
        heading={"Customer Review"}
        paraghrap={
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
        }
      />
      <div className=" mt-20  md:px-0 bg-themeColor grid place-content-center ">
        <div className=" max-w-[900px] rounded-2xl shadow-xl mb-16 px-3 md:px-10 bg-white mx-5 lg:mx-20 py-10 space-y-5 -mt-10">
          <h1 className="font-semibold text-[18px] text-center text-navColor">
            Best Design and delivered in time
          </h1>
          <p className=" text-[15px] text-center text-textColor">
            Nay likely her length sooner thrown sex lively income. The expense
            windows adapted sir. Wrong widen drawn ample eat off doors money.
            Offending belonging promotion provision an be oh consulted ourselves
            it. Blessing welcomed ladyship she met humoured sir breeding her.
            Six curiosity day assurance bed necessary.
          </p>
          <h1 className="font-semibold text-center">
            Roni <br />
            CEO @ airbnb
          </h1>
        </div>
      </div>
    </>
  );
}
