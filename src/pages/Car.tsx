import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Details from "sections/Car/Details/Details";
import Reviews from "sections/Car/Reviews/Reviews";

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
    <div className="flex-[4]">
      <Details {...(data as ICar)} />
      <Reviews {...(data as ICar)} />
    </div>
  );
};

export default Car;
