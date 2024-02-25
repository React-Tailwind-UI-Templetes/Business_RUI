import group from "../../../public/group.png";
import group1 from "../../../public/business/comment.png";
import group2 from "../../../public/business/lady.png";
import group3 from "../../../public/business/s.png";
import Divheader from "../shared/divHeader";

export default function Business() {
  return (
    <>
      <Divheader
        heading={"We Make your Business"}
        paraghrap={
          "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
        }
      />

      <div className=" gap-5 px-5  container   place-items-center my-20 grid lg:grid-cols-2 grid-cols-1  ">
        <div>
          <img src={group} alt="" />
        </div>
        <div className=" relative ">
          <img
            className=" h-[500px] object-cover relative md:-left-16  z-50"
            src={group2}
            alt=""
          />
          <img
            className=" w-full shadow-md  z-50 lg:-left-52 -bottom-14 absolute"
            src={group1}
            alt=""
          />
          <img
            className=" object-cover hidden lg:block rounded-md z-10 -bottom-10 h-[400px] absolute"
            src={group3}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
