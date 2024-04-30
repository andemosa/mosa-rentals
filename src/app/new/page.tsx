import { db } from "@/lib/prisma";

import { CarForm } from "./_components/Form";

const NewCar = async () => {
  const brands = await db.brand.findMany({
    orderBy: {
      name: "asc",
    },
  });
  
  return (
    <main className="mx-auto flex w-[95%] md:w-[90%] flex-col items-center px-2 md:px-6 py-3 xl:px-16 xl:py-8">
      <section className="flex w-full flex-col rounded-lg bg-white px-4 py-6 dark:bg-primary-gray-850">
        <div className="flex flex-col justify-start gap-2">
          <h1 className="text-base font-bold text-custom-dark-grey dark:text-white md:text-xl">
            Add a Car for Rent
          </h1>
          <p className="text-xs font-medium text-custom-black md:text-sm">
            Please enter your car info
          </p>
        </div>
        <CarForm brands={brands} />
      </section>
    </main>
  );
};

export default NewCar;
