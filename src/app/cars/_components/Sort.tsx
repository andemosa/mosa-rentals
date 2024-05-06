"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface IProps {
  brand: {
    _count: {
      cars: number;
    };
    name: string;
    id: string;
  }[];
  capacity: {
    _count: {
      id: number;
    };
    capacity: number;
  }[];
  maxPrice: {
    _max: {
      priceInCents: number | null;
    };
  };
}

interface IDisplayProps extends IProps {
  brandsArr?: string[];
  capacitiesArr?: string[];
  priceVal: string | null;
}

const updateArr = (arr: string[], value: string, checked: boolean) => {
  let updatedList = [...arr];
  if (checked) {
    updatedList = [...arr, value];
  } else {
    updatedList.splice(arr.indexOf(value), 1);
  }
  return updatedList;
};

const createQueryStr = (arr: string[]) =>
  arr.length
    ? arr.reduce((total, item) => {
        return total + "," + item;
      })
    : "";

const Sort = ({ results }: { results: IProps }) => {
  const searchParams = useSearchParams();

  const brandsArr = searchParams.get("brand")?.split(",");
  const capacitiesArr = searchParams.get("capacity")?.split(",");
  const priceVal = searchParams.get("price");

  return (
    <SortDisplay results={{ ...results, brandsArr, capacitiesArr, priceVal }} />
  );
};

const SortDisplay = ({ results }: { results: IDisplayProps }) => {
  const router = useRouter();
  const { brandsArr, capacitiesArr, priceVal } = results;
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    brandsArr ?? []
  );
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>(
    capacitiesArr ?? []
  );
  const [selectedPrice, setSelectedPrice] = useState(
    priceVal ?? results.maxPrice._max.priceInCents! / 100 / 2
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      if (name === "brand") {
        setSelectedBrands(updateArr(selectedBrands, value, checked));
      }
      if (name === "capacity") {
        setSelectedCapacities(updateArr(selectedCapacities, value, checked));
      }
    } else {
      setSelectedPrice(value);
    }
  };

  const searchCars = () => {
   
  };

  return (
    <div className="hidden flex-[1] flex-col gap-12 border border-[#F3F5F7] bg-white p-8 lg:flex">
      <div>
        <p className="mb-2 text-xs text-custom-grey">TYPE</p>
        <div>
          {results?.brand?.map(({ _count, name }) => (
            <div className="flex items-center" key={name}>
              <input
                checked={selectedBrands?.includes(name)}
                id={name}
                type="checkbox"
                className="my-1 h-4 w-4 rounded border-custom-grey accent-primary-blue"
                name="brand"
                onChange={handleChange}
                value={name}
              />
              <label
                htmlFor={name}
                className="ml-2 text-sm font-medium text-custom-dark-grey"
              >
                {name}&nbsp;
                <span className="text-custom-grey">({_count.cars})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-custom-grey">CAPACITY</p>
        <div>
          {results.capacity?.map(({ _count, capacity }) => (
            <div className="flex items-center" key={capacity}>
              <input
                checked={selectedCapacities?.includes(capacity.toString())}
                id={capacity.toString()}
                value={capacity.toString()}
                name="capacity"
                type="checkbox"
                className="my-1 h-4 w-4 rounded border-custom-grey accent-primary-blue"
                onChange={handleChange}
              />
              <label
                htmlFor={capacity.toString()}
                className="ml-2 text-sm font-medium text-custom-dark-grey"
              >
                {capacity} {capacity === 1 ? "Person" : "Persons"}
                &nbsp;
                <span className="text-custom-grey">({_count.id})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-custom-grey">PRICE - {selectedPrice}</p>
        <div>
          <input
            id="price"
            type="range"
            className="w-full cursor-pointer rounded-lg"
            max={results.maxPrice._max.priceInCents! / 100}
            name="price"
            value={selectedPrice}
            onChange={handleChange}
          />
          <label
            htmlFor="price"
            className="ml-2 text-sm font-medium text-custom-dark-grey"
          >
            Max. ${results.maxPrice._max.priceInCents! / 100}
          </label>
        </div>
      </div>
      <div className="my-2 flex items-center justify-center">
        <div
          className="flex max-w-fit items-center justify-center rounded bg-primary-blue px-4 py-2 text-white"
          onClick={searchCars}
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default Sort;
