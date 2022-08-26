import Favourite from "components/Icons/Favourite";
import s from "./Card.module.css";
import car from "../../../../car.png";
import Gas from "components/Icons/Gas";
import Transmission from "components/Icons/Transmission";
import Capacity from "components/Icons/Capacity";
import { ICar } from "types/Car";

const Card = ({
  name,
  brand,
  images,
  transmission,
  gasoline,
  capacity,
  price,
  discount,
}: ICar) => {
  return (
    <div className={s.card}>
      <div className={s.title}>
        <div>
          <h4 className={s.titleName}>{name}</h4>
          <p>{brand}</p>
        </div>
        <div>
          <Favourite />
        </div>
      </div>
      <div className={s.imgCon}>
        <img src={images![0]} alt={name} />
      </div>
      <div className={s.detailsCon}>
        <div className={s.detail}>
          <Gas />
          <p>{gasoline}L</p>
        </div>
        <div className={s.detail}>
          <Transmission />
          <p>{transmission}</p>
        </div>
        <div className={s.detail}>
          <Capacity />
          <p>{capacity} people</p>
        </div>
      </div>
      <div className={s.cta}>
        <div>
          <p>
            <span className={s.priceSpan}>
              ${discount! > 0 ? (((100 - discount!) / 100) * price).toFixed(2) : price}/
            </span>
            &nbsp; day
          </p>
          <p className={s.discount}>{discount! > 0 && <>${price}</>}</p>
        </div>
        <div className={s.button}>Rent Now</div>
      </div>
    </div>
  );
};

export default Card;
