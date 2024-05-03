import { db } from "@/lib/prisma";

import Hero from "./_components/Hero";
import Popular from "./_components/Popular";
import Recommended from "./_components/Recommended";
import Selection from "./_components/Selection";

export default async function Home() {
  const [cars, count] = await db.$transaction([
    db.car.findMany({
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
    }),
    db.car.count(),
  ]);

  return (
    <main className="flex flex-col gap-4 px-4 md:px-6 xl:px-14 bg-home-background">
      <Hero />
      <Selection />
      {!cars || cars.length === 0 ? (
        <div className="text-xl font-bold text-center">No cars available !! </div>
      ) : (
        <>
          <Popular cars={cars} />
          <Recommended cars={cars} count={count} />
        </>
      )}
    </main>
  );
}
