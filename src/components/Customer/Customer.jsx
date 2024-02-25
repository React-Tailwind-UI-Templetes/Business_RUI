import Divheader from "../shared/divHeader";
import image1 from "../../../public/why/image1.png";
import image2 from "../../../public/why/image2.png";
export default function Customer() {
    
  return (
    <>
      <Divheader
        heading={"What Customers say"}
        paraghrap={
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
        }
      />
      <div className=" px-10 grid place-content-center">
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <img src={image1} alt="why we imag" />
          </div>
          <div>
            <img src={image2} alt="why we imag" />
          </div>
        </div>
      </div>
    </>
  );
}
