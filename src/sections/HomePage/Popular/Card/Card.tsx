import Favourite from "components/Icons/Favourite";
import s from "./Card.module.css";
import car from "../../../../car.png";
import Gas from "components/Icons/Gas";
import Transmission from "components/Icons/Transmission";
import Capacity from "components/Icons/Capacity";

const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.title}>
        <div>
          <h4 className={s.titleName}>Koenigsegg</h4>
          <p>Sport</p>
        </div>
        <div>
          <Favourite />
        </div>
      </div>
      <div className={s.imgCon}>
        <img src={car} alt="" />
      </div>
      <div className={s.detailsCon}>
        <div className={s.detail}>
          <Gas />
          <p>90L</p>
        </div>
        <div className={s.detail}>
          <Transmission />
          <p>Manual</p>
        </div>
        <div className={s.detail}>
          <Capacity />
          <p>2 people</p>
        </div>
      </div>
      <div className={s.cta}>
        <div>
          <p>
            <span className={s.priceSpan}>$99.00 /</span> day
          </p>
          <p className={s.discount}>$100.00</p>
        </div>
        <div className={s.button}>Rent Now</div>
      </div>
    </div>
  );
};

export default Card;
