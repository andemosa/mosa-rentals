import { redirect } from "next/navigation";

import Details from "./_components/Details";
import Reviews from "./_components/Reviews";
import { db } from "@/lib/prisma";

const CarPage = async ({ params }: { params: { carId: string } }) => {
  const car = await db.car.findUnique({
    where: {
      id: params.carId,
    },
    include: {
      brand: {
        select: {
          name: true,
        },
      },
    },
  });
  
  if (!car) {
    return redirect("/");
  }

  return (
    <div>
      <Details {...car} />
      <Reviews {...car} />
    </div>
  );
};

export default CarPage;
