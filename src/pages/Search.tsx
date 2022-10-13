import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "sections/HomePage/Recommendation/Card/Card";

import { apiClient } from "services/CarService";

import { ICar } from "types/Car";

const Search = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [searchParams] = useSearchParams();
  const queryObj = Object.fromEntries([...searchParams]);

  const searchFn = async (query: typeof queryObj) => {
    const resp = await apiClient.post(`/cars/search`, query);
    setCars(resp.data);
  };

  const { isLoading, error, mutate } = useMutation(searchFn);

  useEffect(() => {
    mutate(queryObj);
  }, [JSON.stringify(queryObj)]);

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  return (
    <>
      {cars?.length === 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          There is no car matching that query
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {cars?.slice(0, 8).map((item) => (
            <Card {...item} key={item._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
