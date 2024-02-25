import Customer from "./components/Customer/Customer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Navbar/Nav";
import Service from "./components/Service/Service";
import Update from "./components/update/Update";
import Work from "./components/work/Work";
import Review from "./components/review/review";
import Business from "./components/Business/Buiness";
import Footer from "./components/Footer/footer";
export default function App() {
  return (
    <div className="bg-[#F6F6F6] min-h-screen   selection:bg-themeColor">
      <Nav />
      <Hero />
      <Service />
      <Work />
      <Business />
      <Review />
      <Customer />
      <Update />
      <Footer />
      
      <div className=" bg-themeColor w-full  py-3 pb-3 text-center text-white">Copyright Soumik.com, All rights reserved.</div>
    </div>
  );
}
