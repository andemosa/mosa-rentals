import Dropoff from "components/Icons/Dropoff";
import Pickup from "components/Icons/Pickup";
import Switch from "components/Icons/Switch";
import Card from "./Card/Card";

const Selection = () => {
  return (
    <div className="my-4 gap-2 md:flex md:py-2 lg:py-8">
      <div className="md:flex-1 lg:px-4">
        <Card displayed={<Pickup />} title="Pick up" direction="right" />
      </div>
      <div className="m-auto w-min">
        <Switch />
      </div>
      <div className="md:flex-1 lg:px-4">
        <Card displayed={<Dropoff />} title="Drop off" direction="left" />
      </div>
    </div>
  );
};

export default Selection;
