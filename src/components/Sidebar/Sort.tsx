import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { findCarOptions } from "services/CarService";
import s from "./Sort.module.css";

const Sort = () => {
  const { isLoading, error, data } = useQuery(["carOptions"], findCarOptions);
  const [value, setValue] = useState("");

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred: </>;

  return (
    <div className={s.container}>
      <div>
        <p className={s.headings}>TYPE</p>
        <div>
          {data?.brands?.map((brand) => (
            <div className={s.inputCon} key={brand?._id}>
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className={s.checkbox}
              />
              <label htmlFor="checked-checkbox" className={s.label}>
                {brand?._id}{" "}
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
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className={s.checkbox}
              />
              <label htmlFor="checked-checkbox" className={s.label}>
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
          {/* <label
            htmlFor="default-range"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Default range
          </label> */}
          <input
            id="default-range"
            type="range"
            value={value}
            className={s.range}
            max={data?.maxPrice[0].price}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="default-range" className={s.label}>
            Max. ${data?.maxPrice[0].price}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sort;
