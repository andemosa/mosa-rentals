import { NextResponse } from "next/server";

import { db } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const {
      name,
      description,
      transmission,
      brand,
      capacity,
      gasoline,
      price,
      coverImage,
      images,
    } = await req.json();

    const car = await db.car.create({
      data: {
        capacity,
        coverImageUrl: coverImage,
        description,
        gasoline,
        name,
        priceInCents: price * 100,
        transmission,
        brandId: brand,
        imagesUrl: images,
      },
    });

    return NextResponse.json(car);
  } catch (error) {
    console.log("[CARS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
