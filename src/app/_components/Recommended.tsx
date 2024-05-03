import Link from "next/link";

import { Card } from "@/components/CarCard";
import { Car } from "@prisma/client";

interface ICar extends Car {
  brand?: {
    name?: string;
  } | null;
}

const Recommended = ({ cars, count }: { cars: ICar[], count: number }) => {
  return (
    <section className="my-4">
      <div className="my-4">
        <h4 className="text-sm text-custom-grey md:text-base">
          Recommended cars
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {cars.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
      <div className="sm:max-w-full relative my-8 flex max-w-sm items-center justify-center">
        <div className="flex max-w-fit items-center justify-center rounded bg-primary-blue px-4 py-2 text-xs text-white md:text-sm">
          <Link href="/cars">Show more cars</Link>
        </div>
        <div className="absolute right-0 bottom-0 text-xs text-custom-grey md:text-sm">
          {count} {count === 1 ? "car" : "cars"}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
