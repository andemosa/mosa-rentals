import Hero from "sections/HomePage/Hero/Hero";
import Navbar from "components/Navbar/Navbar";

import Selection from "sections/HomePage/Selection/Selection";
import Popular from "sections/HomePage/Popular/Popular";
import Recommendation from "sections/HomePage/Recommendation/Recommendation";
import Footer from "components/Footer/Footer";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-2xl bg-[#F6F7F9]">
      <Navbar />
      <div className="flex flex-col gap-4 px-4 md:px-6 xl:px-20">
        <Hero />
        <Selection />
        <Popular />
        <Recommendation />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
