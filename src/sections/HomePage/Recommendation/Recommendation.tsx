import Card from "./Card/Card";

const Recommendation = () => {
  return (
    <section className="my-4">
      <div className="my-4">
        <h4 className="text-custom-grey">Recommended cars</h4>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Recommendation;
