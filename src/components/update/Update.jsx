import Container from "../layout/Container";

export default function Update() {
  return (
    <Container>
      <div className=" rounded-md bg-themeColor grid md:place-content-center mx-auto text-white py-5 space-y-5">
        <h1 className=" md:text-[48px] sm:text-[30px] text-center text-[25px]">
          Get your updated news
        </h1>

        <h2 className=" text-center text-[12px]">
          If you are going to use a passage of Lorem Ipsum, you need to <br />{" "}
          be sure there is not anything embarrassing.
        </h2>

        <div className=" grid place-content-center">
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
      </div>
    </Container>
  );
}
