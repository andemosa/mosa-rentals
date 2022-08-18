import Hero from "sections/HomePage/Hero/Hero";

import Selection from "sections/HomePage/Selection/Selection";
import Popular from "sections/HomePage/Popular/Popular";
import Recommendation from "sections/HomePage/Recommendation/Recommendation";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 px-4 md:px-6 xl:px-20">
      <Hero />
      <Selection />
      <Popular />
      <Recommendation />
    </div>
  );
};

export default Home;
