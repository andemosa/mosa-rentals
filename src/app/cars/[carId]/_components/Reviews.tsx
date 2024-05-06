import ArrowDown from "@/components/Icons/ArrowDown";

const Card = () => {
  return (
    <div className="my-3 flex justify-between gap-1 text-[11px] xs:text-xs">
      <div className="flex max-h-8 flex-1 items-center justify-center">
        <img
          src={"user"}
          alt=""
          className="h-full w-full rounded-full  object-contain"
        />
      </div>
      <div className="flex flex-[8] flex-col gap-2 sm:flex-[10] md:flex-[15] lg:flex-[18] xl:flex-[20]">
        <div className="flex justify-between text-custom-grey">
          <div>
            <h4 className="text-sm font-semibold text-custom-black">
              Alex Stanton
            </h4>
            <p>CEO at Amazon</p>
          </div>
          <div>
            <p>21 July 2022</p>
          </div>
        </div>
        <div className="text-custom-dark-grey lg:text-sm">
          We are very happy with the service from the MOSA-RENT App. Mosa-rent
          has a low price and also a large variety of cars with good and
          comfortable facilities. In addition, the service provided by the
          officers is also very friendly and very polite.
        </div>
      </div>
    </div>
  );
};

const Reviews = ({ reviews }: any) => {
  if (!reviews || !reviews?.length)
    return (
      <div className="my-4 rounded bg-white p-3 md:p-4">
        <div className="mb-1 flex gap-1">
          <p className="text-sm text-custom-black md:text-base">Reviews</p>
          <div className="flex items-center justify-center rounded bg-primary-blue px-1 text-xs text-white">
            {0}
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
