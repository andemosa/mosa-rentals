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
      </div>
    </div>
  );
};

export default Cars;
