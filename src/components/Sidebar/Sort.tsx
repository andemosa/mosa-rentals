import s from "./Sort.module.css";

const Sort = () => {
  return (
    <div className={s.container}>
      <div>
        <p className={s.headings}>TYPE</p>
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <div className={s.inputCon} key={idx}>
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className={s.checkbox}
              />
              <label htmlFor="checked-checkbox" className={s.label}>
                MPV <span className={s.numberSpan}>({idx})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={s.headings}>CAPACITY</p>
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <div className={s.inputCon} key={idx}>
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className={s.checkbox}
              />
              <label htmlFor="checked-checkbox" className={s.label}>
                2 Person <span className={s.numberSpan}>({idx})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className={s.headings}>PRICE</p>
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
            // value="50"
            className={s.range}
          />
          <label htmlFor="default-range" className={s.label}>
            Max. $100.00
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sort;
