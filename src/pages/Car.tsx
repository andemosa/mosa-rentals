import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Details from "sections/Car/Details/Details";
import Recent from "sections/Car/Recent/Recent";
import Recommendation from "sections/Car/Recommendation/Recommendation";
import Reviews from "sections/Car/Reviews/Reviews";

import Sort from "components/Sidebar/Sort";

import { findCar } from "services/CarService";

import { ICar } from "types/Car";

const Car = () => {
  let params = useParams() as { carId: string };
  const { isLoading, error, data } = useQuery(["findCar", params?.carId], () =>
    findCar(params?.carId)
  );

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  return (
    <div className="flex-[4] overflow-x-auto">
      <Details {...(data as ICar)} />
      <Reviews {...(data as ICar)} />
      <Recent />
      <Recommendation />
    </div>
  );
};

export default Car;
