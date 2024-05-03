import { ReactNode } from "react";

import Dropoff from "@/components/Icons/Dropoff";
import Pickup from "@/components/Icons/Pickup";
import Switch from "@/components/Icons/Switch";

interface ICardProps {
  displayed: ReactNode;
  title: string;
  direction: string;
}

const Card = ({ displayed, title }: ICardProps) => {
  return (
    <div className="md:max-w-full mx-auto flex max-w-sm flex-col gap-6 rounded-lg bg-white p-4 md:mx-0">
      <div className="flex items-center gap-2 font-bold">
        {displayed}
        <h4>{title}</h4>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-1 flex-col gap-1">
          <h4 className="text-sm font-bold sm:text-base">Locations</h4>
          <p className="text-xs sm:text-sm">Semarang</p>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h4 className="text-sm font-bold sm:text-base">Date</h4>
          <p className="text-xs sm:text-sm">20 July 2022</p>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h4 className="text-sm font-bold sm:text-base">Time</h4>
          <p className="text-xs sm:text-sm">07.00</p>
        </div>
      </div>
    </div>
  );
};

const Selection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center my-4 md:py-2 lg:py-8">
      <div className="md:flex-1">
        <Card displayed={<Pickup />} title="Pick up" direction="right" />
      </div>
      <div className="m-auto w-min">
        <Switch />
      </div>
      <div className="md:flex-1">
        <Card displayed={<Dropoff />} title="Drop off" direction="left" />
      </div>
    </div>
  );
};

export default Selection;
