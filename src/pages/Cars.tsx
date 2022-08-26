import Sort from "components/Sidebar/Sort";
import Card from "sections/HomePage/Recommendation/Card/Card";
import Selection from "sections/HomePage/Selection/Selection";

const Cars = () => {
  return (
    <div className="flex h-full flex-1">
      <Sort />
      <div className="flex-[4] p-4 lg:p-8">
        <Selection />
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sm:max-w-unset relative my-8 flex max-w-sm items-center justify-center">
          <div className="flex max-w-fit items-center justify-center rounded bg-primary-blue px-4 py-2 text-xs text-white md:text-sm">
            Show more cars
          </div>
          <div className="absolute right-0 bottom-0 text-xs text-custom-grey md:text-sm">
            120 car
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
