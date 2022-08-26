import { useQuery } from "@tanstack/react-query";
import Card from "sections/HomePage/Popular/Card/Card";
import { findPopularCars } from "services/CarService";

const Recent = () => {
  const { isLoading, error, data } = useQuery(["popularCars"], findPopularCars);

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;
  
  return (
    <section className="my-4">
      <div className="my-4 flex justify-between gap-2">
        <h4 className="text-sm text-custom-grey md:text-base">Recent Car</h4>
        <p className="text-xs text-primary-blue md:text-sm">View All</p>
      </div>
      <div className="flex grid-cols-3 gap-4 overflow-x-auto lg:grid lg:gap-6">
        {data?.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Recent;
