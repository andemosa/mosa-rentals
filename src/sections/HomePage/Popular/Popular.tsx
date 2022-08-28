import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import Card from "./Card/Card";

import { findPopularCars } from "services/CarService";


const Popular = () => {
  const { isLoading, error, data } = useQuery(["popularCars"], findPopularCars);

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  return (
    <section className="my-4">
      <div className="my-4 flex justify-between gap-2">
        <h4 className="text-sm text-custom-grey md:text-base">Popular Car</h4>
        <p className="text-xs text-primary-blue md:text-sm">
          <Link to="/cars">View All</Link>
        </p>
      </div>
      <div className="flex grid-cols-4 gap-4 overflow-x-auto lg:grid lg:gap-6">
        {data?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
