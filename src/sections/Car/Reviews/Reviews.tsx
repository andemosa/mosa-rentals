import ArrowDown from "components/Icons/ArrowDown";
import Card from "./Card/Card";

const Reviews = () => {
  return (
    <div className="my-4 rounded bg-white p-3 md:p-4">
      <div className="mb-1 flex gap-1">
        <p className="text-sm text-custom-black md:text-base">Reviews</p>
        <div className="flex items-center justify-center rounded bg-primary-blue px-1 text-xs text-white">
          13
        </div>
      </div>
      <div>
        <Card />
        <Card />
      </div>
      <button className="flex w-full items-center justify-center gap-1 text-[11px] text-custom-grey outline-none lg:text-sm">
        Show All <ArrowDown />
      </button>
    </div>
  );
};

export default Reviews;
