import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { findCarOptions } from "services/CarService";

import s from "./Sort.module.css";

const Sort = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(["carOptions"], findCarOptions);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string>("");

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  const handleBrand = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    let updatedList = [...brands];
    if (event.target.checked) {
      updatedList = [...brands, event.target.value];
    } else {
      updatedList.splice(brands.indexOf(event.target.value), 1);
    }
    setBrands(updatedList);
  };

  const handlePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setCapacity(event.target.value);
  };

  const handleCapacity = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setValue(event.target.value);
  };

  const brandQuery = brands.length
    ? brands.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  const searchCars = () => {
    setMessage("");
    if (!value) {
      setMessage("Please select a price");
      return;
    }
    if (!capacity) {
      setMessage("Please select a capacity");
      return;
    }
    if (brands.length <= 0) {
      setMessage("Please select a brand");
      return;
    }

    navigate(
      `/cars/search?brand=${brandQuery}&capacity=${capacity}&price=${value}`
    );
  };

  return (
    <div className={s.container}>
      <div>
        <p className={s.headings}>TYPE</p>
        <div>
          {data?.brands?.map((brand) => (
            <div className={s.inputCon} key={brand?._id}>
              <input
                // checked
                id={brand?._id}
                type="checkbox"
                value={brand?._id}
                className={s.checkbox}
                onChange={handleBrand}
              />
              <label htmlFor={brand?._id} className={s.label}>
                {brand?._id}&nbsp;
                <span className={s.numberSpan}>({brand?.total})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={s.headings}>CAPACITY</p>
        <div>
          {data?.capacities?.map((cap) => (
            <div className={s.inputCon} key={cap?._id}>
              <input
                id={cap?._id.toString()}
                type="radio"
                value={cap?._id.toString()}
                name="capacity"
                className={s.checkbox}
                onChange={handleCapacity}
              />
              <label htmlFor={cap?._id.toString()} className={s.label}>
                {cap?._id} {cap?._id === 1 ? "Person" : "Persons"}&nbsp;
                <span className={s.numberSpan}>({cap?.total})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={s.headings}>PRICE - {value}</p>
        <div>
          <input
            id="default-range"
            type="range"
            value={value}
            className={s.range}
            max={data?.maxPrice[0].price}
            onChange={handlePrice}
          />
          <label htmlFor="default-range" className={s.label}>
            Max. ${data?.maxPrice[0].price}
          </label>
        </div>
      </div>
      {message}
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
