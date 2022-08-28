import ArrowDown from "components/Icons/ArrowDown";
import Card from "./Card/Card";

import { ICar } from "types/Car";

const Reviews = ({ reviews }: ICar) => {
  if (!Array.isArray(reviews)) return null;

  if (Array.isArray(reviews) && reviews?.length === 0)
    return (
      <div className="my-4 rounded bg-white p-3 md:p-4">
        <div className="mb-1 flex gap-1">
          <p className="text-sm text-custom-black md:text-base">Reviews</p>
          <div className="flex items-center justify-center rounded bg-primary-blue px-1 text-xs text-white">
            {reviews?.length}
          </div>
        </div>
        <h3 className="text-center">
          There is currently no reviews for this car
        </h3>
      </div>
    );

  return (
    <div className="my-4 rounded bg-white p-3 md:p-4">
      <div className="mb-1 flex gap-1">
        <p className="text-sm text-custom-black md:text-base">Reviews</p>
        <div className="flex items-center justify-center rounded bg-primary-blue px-1 text-xs text-white">
          {reviews?.length}
        </div>
      </div>
      <div>
        <Card />
        <Card />
      </div>
      {reviews?.length > 2 && (
        <button className="flex w-full items-center justify-center gap-1 text-[11px] text-custom-grey outline-none lg:text-sm">
          Show All <ArrowDown />
        </button>
      )}
    </div>
  );
};

export default Reviews;
