import Image from "next/image";
import Link from "next/link";
import { Car } from "@prisma/client";

import Capacity from "@/components/Icons/Capacity";
import Favourite from "@/components/Icons/Favourite";
import Gas from "@/components/Icons/Gas";
import Transmission from "@/components/Icons/Transmission";

interface ICar extends Car {
  brand?: {
    name?: string;
  } | null;
}

const Card = ({
  name,
  brand,
  coverImageUrl,
  transmission,
  gasoline,
  capacity,
  priceInCents,
  discountPercentage,
  id,
}: ICar) => {
  return (
    <div className="flex min-w-max flex-1 flex-col justify-between gap-3 rounded-lg bg-white p-4 text-xs text-custom-grey md:text-sm">
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
      <div className="aspect-video flex-shrink-0 flex-1 relative p-1">
        <Image
          src={coverImageUrl}
          fill
          alt={name}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex items-center justify-between gap-1">
          <Gas />
          <p>{gasoline}L</p>
        </div>
        <div className="flex items-center justify-between gap-1">
          <Transmission />
          <p>{transmission}</p>
        </div>
        <div className="flex items-center justify-between gap-1">
          <Capacity />
          <p>{capacity} people</p>
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

const Popular = ({ cars }: { cars: ICar[] }) => {
  return (
    <section className="my-4 pr-4 xl:pr-0">
      <div className="my-4 flex justify-between gap-2">
        <h4 className="text-sm text-custom-grey md:text-base">Popular Car</h4>
        <p className="text-xs text-primary-blue md:text-sm">
          <Link href="/cars">View All</Link>
        </p>
      </div>
      <div className="relative">
        <div className="flex grid-cols-4 gap-4 overflow-x-auto xl:grid xl:gap-6 no-scrollbar">
          {cars?.slice(0,4).map((car) => (
            <Card {...car} key={car.id} />
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 shadow-leftShadow xl:hidden"></div>
      </div>
    </section>
  );
};

export default Popular;
