import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Container from "../layout/Container";
export default function Nav() {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <nav className=" flex items-center justify-between md:space-x-6">
        {/* logo */}
        <div className=" text-2xl select-none">Digi.Business</div>

        {/* menu */}
        <ul className=" text-navColor md:flex md:gap-2 gap-5 lg:space-x-5 hidden ">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#business">Testomonial</a>
          
          <a href="#contact">Contact</a>
        </ul>

        {/* sign up option */}
        <div className="hidden md:flex items-center justify-center md:gap-5">
          <button>Login</button>
          <button className=" bg-white px-6 py-2 rounded-3xl shadow-xl">
            Sign up
          </button>
        </div>

        {/* icons */}
        <span href="" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <CiMenuFries /> : <IoMdClose />}
        </span>

        {/* menu */}
      </nav>
      {!open && (
        <ul className=" bg-white absolute pt-10   px-20 text-justify flex rounded-2xl mr-4 overflow-visible right-0 shadow-lg  z-50 ease-in-out duration-300 min-h-[400px] flex-col space-y-5">
          <li>Home</li>
          <li>About</li>
          <li>Testomonial</li>
          <li>Testomonial</li>
          <li>Contact</li>
        </ul>
      )}
    </Container>
  );
}
