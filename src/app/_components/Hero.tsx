import Image from "next/image";

import heroCar1 from "../../../public/images/car_1.webp";
import heroCar2 from "../../../public/images/car_2.webp";

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-8 md:flex-row md:justify-center  md:gap-8 lg:gap-14">
      <div className="flex max-w-sm md:max-w-full flex-1 flex-col gap-3 rounded-lg bg-secondary-blue p-4  text-white md:p-5">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="font-semibold lg:text-xl">
            The Best Platform for Car Rental
          </h2>
          <h3 className="text-xs font-semibold lg:text-sm">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </h3>
        </div>
        <div className="max-w-fit rounded bg-primary-blue px-4 py-2 text-xs md:text-sm">
          Rental Car
        </div>
        <div className="flex items-center justify-center p-1 lg:p-4 h-24">
          <Image src={heroCar2} height={90} alt="hero-image" />
        </div>
      </div>
      <div className="hidden flex-1 flex-col gap-3 rounded-lg bg-primary-blue p-4 text-white md:flex  md:p-5">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="font-semibold lg:text-xl">
            Easy way to rent a car at a low price
          </h2>
          <h3 className="text-xs font-semibold lg:text-sm">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </h3>
        </div>
        <div className="max-w-fit rounded bg-secondary-blue px-4 py-2 text-xs md:text-sm">
          Rental Car
        </div>
        <div className="flex items-center justify-center p-1 lg:p-4 h-24">
          <Image src={heroCar1} height={90} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
