import Card from "./Card/Card";

const Popular = () => {
  return (
    <section className="my-4">
      <div className="my-4 flex justify-between gap-2">
        <h4 className="text-sm text-custom-grey md:text-base">Popular Car</h4>
        <p className="text-xs text-primary-blue md:text-sm">View All</p>
      </div>
      <div className="flex grid-cols-4 gap-4 overflow-x-auto lg:grid lg:gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Popular;
