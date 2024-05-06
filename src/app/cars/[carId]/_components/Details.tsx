import Image from "next/image";

import Favourite from "@/components/Icons/Favourite";
import { Car } from "@prisma/client";

interface IProps extends Car {
  brand?: {
    name?: string;
  } | null;
}

const Details = ({
  capacity,
  coverImageUrl,
  description,
  discountPercentage,
  gasoline,
  imagesUrl,
  priceInCents,
  transmission,
  name,
  brand,
}: IProps) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-1 flex-col justify-between gap-3 rounded-lg bg-primary-blue p-1 text-white">
          <div className="aspect-video flex-shrink-0 flex-1 relative p-1">
            <Image
              src={coverImageUrl}
              fill
              alt={name}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5 lg:gap-6">
          {imagesUrl.map((image) => (
            <div
              className="aspect-video flex-shrink-0 flex-1 relative"
              key={image}
            >
              <Image
                src={image}
                fill
                alt={name}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 rounded-lg bg-white p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-custom-black lg:text-3xl">{name}</h4>
            <p className="text-sm text-custom-grey">
              {/* {reviews?.length} Reviewer */}
            </p>
          </div>
          <div>
            <Favourite />
          </div>
        </div>
        <p className="text-sm text-custom-dark-grey lg:text-base">
          {description}
        </p>
        <div className="flex justify-between gap-4 lg:gap-10">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-1 justify-between text-xs lg:text-base">
              <p className="text-custom-grey">Type Car</p>
              <p className="text-custom-dark-grey">{brand?.name}</p>
            </div>
            <div className="flex flex-1 justify-between text-xs lg:text-base">
              <p className="text-custom-grey">Capacity</p>
              <p className="text-custom-dark-grey">{capacity}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-1 justify-between text-xs lg:text-base">
              <p className="text-custom-grey">Steering</p>
              <p className="text-custom-dark-grey capitalize">{transmission}</p>
            </div>
            <div className="flex flex-1 justify-between text-xs lg:text-base">
              <p className="text-custom-grey">Gasoline</p>
              <p className="text-custom-dark-grey">{gasoline}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 text-xs">
          <div>
            <p>
              <span className="text-base font-bold text-custom-black md:text-lg">
                $
                {discountPercentage
                  ? (
                      ((100 - discountPercentage!) / 100) *
                      (priceInCents / 100)
                    ).toFixed(2)
                  : priceInCents / 100}
                /&nbsp;
              </span>
              &nbsp;day
            </p>

            {discountPercentage ? (
              <p className="line-through">${priceInCents / 100}</p>
            ) : null}
          </div>
          <div className="flex max-w-fit items-center justify-center rounded bg-primary-blue px-4 py-2 text-white">
            Rent Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
