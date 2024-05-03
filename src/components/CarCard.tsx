import Link from "next/link";
import { Car } from "@prisma/client";
import Image from "next/image";

import Capacity from "@/components/Icons/Capacity";
import Favourite from "@/components/Icons/Favourite";
import Gas from "@/components/Icons/Gas";
import Transmission from "@/components/Icons/Transmission";

interface IProps extends Car {
  brand?: {
    name?: string;
  } | null;
}

export const Card = ({
  name,
  brand,
  coverImageUrl,
  transmission,
  gasoline,
  capacity,
  priceInCents,
  discountPercentage,
  id,
}: IProps) => {
  return (
    <div className="flex min-w-max max-w-sm flex-1 flex-col justify-between gap-3 rounded-lg bg-white p-3 text-xs text-custom-grey md:text-sm xl:p-6">
      <div className="flex justify-between gap-2">
        <div>
          <h4 className="text-sm font-bold text-custom-black md:text-base">
            {name}
          </h4>
          <p>{brand?.name}</p>
        </div>
        <div>
          <Favourite />
        </div>
      </div>
      <div className="flex justify-between gap-2 md:flex-col">
        <div className="aspect-video flex-shrink-0 flex-1 relative p-1">
          <Image
            src={coverImageUrl}
            fill
            alt={name}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-wrap justify-between gap-1 md:flex-row">
          <div className="flex items-center justify-between gap-1">
            <Gas />
            <p className="flex-1">{gasoline}L</p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <Transmission />
            <p className="flex-1 capitalize">{transmission}</p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <Capacity />
            <p className="flex-1">{capacity} people</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <p>
            <span className="text-sm font-bold text-custom-black md:text-base">
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
          <Link href={`/cars/${id}`}>Rent Now</Link>
        </div>
      </div>
    </div>
  );
};
