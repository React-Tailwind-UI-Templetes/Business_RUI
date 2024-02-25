import Card from "../shared/Card";
import image from "../../../public/Card/analyse.png";
import image1 from "../../../public/Card/globe.png";
import image2 from "../../../public/Card/image.png";
import image3 from "../../../public/Card/Vector.png";

import Divheader from "../shared/divHeader";

export default function Service() {
  const paragraph = `Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.`;
  return (
    <>
      <Divheader heading={"Our Service"} paraghrap={paragraph} />
      <div className=" grid place-content-center px-3">
        <div className=" grid gap-5 md:gap-10 place-content-center place-items-center grid-cols-2 mx-auto ">
          <Card
            active={"   shadow-md"}
            image={image}
            heading={"Branding Idendity"}
            title={"Our support team will get assistance from AI-powered."}
          />
          <Card
            image={image1}
            heading={"Branding consult"}
            title={"Our support team will get assistance from AI-powered."}
          />
          <Card
            image={image2}
            heading={"web development"}
            title={"Our support team will get assistance from AI-powered."}
          />
          <Card
            image={image3}
            heading={"market anlysis"}
            title={"Our support team will get assistance from AI-powered."}
          />
        </div>
      </div>
    </>
  );
}
