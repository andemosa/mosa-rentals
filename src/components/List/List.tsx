import { useQuery } from "@tanstack/react-query";

import { findAllCars } from "services/CarService";

import Card from "sections/HomePage/Recommendation/Card/Card";
import Selection from "sections/HomePage/Selection/Selection";

const List = () => {
  const { isLoading, error, data } = useQuery(["allCars"], findAllCars);

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  return (
    <>
      <Selection />
      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data?.cars?.slice(0, 8).map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
      <div className="sm:max-w-unset relative my-8 flex max-w-sm items-center justify-center">
        <div className="flex max-w-fit items-center justify-center rounded bg-primary-blue px-4 py-2 text-xs text-white md:text-sm">
          Show more cars
        </div>
        <div className="absolute right-0 bottom-0 text-xs text-custom-grey md:text-sm">
          {data?.numCars} {data?.numCars === 1 ? "car" : "cars"}
        </div>
      </div>
    </>
  );
};

export default List;
