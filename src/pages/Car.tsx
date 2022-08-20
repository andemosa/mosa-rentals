import Sort from "components/Sidebar/Sort";
import { useParams, useNavigate } from "react-router-dom";
import Details from "sections/Car/Details/Details";
import Recent from "sections/Car/Recent/Recent";
import Recommendation from "sections/Car/Recommendation/Recommendation";
import Reviews from "sections/Car/Reviews/Reviews";

const Car = () => {
  let params = useParams() as { carId: string };
  let carNo = parseInt(params.carId, 10);

  return (
    <div className="flex h-full flex-1">
      <Sort />
      <div className="flex-[4] overflow-x-auto p-4 lg:p-8">
        <Details />
        <Reviews />
        <Recent />
        <Recommendation />
      </div>
    </div>
  );
};

export default Car;
