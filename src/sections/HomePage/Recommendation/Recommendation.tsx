import Card from "./Card/Card";

const Recommendation = () => {
  return (
    <section className="my-4">
      <div className="my-4">
        <h4 className="text-sm text-custom-grey md:text-base">
          Recommended cars
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
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
    </section>
  );
};

export default Recommendation;
