import { db } from "@/lib/prisma";
import Sort from "./_components/Sort";

const CarsLayout = async ({ children }: { children: React.ReactNode }) => {
  const capacityQuery = db.car.groupBy({
    by: ["capacity"],
    _count: {
      id: true,
    },
    orderBy: {
      capacity: "asc"
    }
  });
  const maxPriceQuery = db.car.aggregate({
    _max: {
      priceInCents: true,
    },
  });
  const brandQuery = db.brand.findMany({
    distinct: ["name"],
    select: {
      _count: true,
      name: true,
      id: true
    },
  });
  const [brand, capacity, maxPrice] = await Promise.all([
    brandQuery,
    capacityQuery,
    maxPriceQuery,
  ]);

  return (
    <section className="flex h-full flex-1">
      <Sort results={{ brand, capacity, maxPrice }} />
      <div className="flex-[4] p-4 lg:p-8">{children}</div>
    </section>
  );
};

export default CarsLayout;
