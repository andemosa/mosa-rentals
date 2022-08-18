import { useParams, useNavigate } from "react-router-dom";

const Car = () => {
  let params = useParams() as { carId: string };
  let carNo = parseInt(params.carId, 10);

  return <div>Car {carNo}</div>;
};

export default Car;
