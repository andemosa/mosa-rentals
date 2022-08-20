import s from "./Details.module.css";
import car from "../../../car.png";
import carView from "../../../car-view.png";
import Favourite from "components/Icons/Favourite";

const Details = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.card}>
          <div className={s.title}>
            <h2 className={s.headerPri}>
              Sports car with the best design and acceleration.
            </h2>
            <h3 className={s.headerSec}>
              Safety and comfort while driving a futuristic and elegant sports
              car.
            </h3>
          </div>
          <div className={s.image}>
            <img src={car} alt="" />
          </div>
        </div>
        <div className={s.imagesCon}>
          <div className={s.imageCon}>
            <img src={car} alt="" className={s.fitImg} />
          </div>
          <div className={s.imageCon}>
            <img src={car} alt="" className={s.fitImg} />
          </div>
          <div className={s.imageCon}>
            <img src={carView} alt="" className={s.fitImg} />
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.nameCon}>
          <div>
            <h4 className={s.name}>Nissan GT - R</h4>
            <p className={s.reviewNum}>440+ Reviewer</p>
          </div>
          <div>
            <Favourite />
          </div>
        </div>
        <p className={s.desc}>
          NISMO has become the embodiment of Nissan's outstanding performance,
          inspired by the most unforgiving proving ground, the "race track".
        </p>
        <div className={s.specs}>
          <div className={s.specsDiv}>
            <div className={s.flexed}>
              <p className={s.key}>Type Car</p>
              <p className={s.value}>Sport</p>
            </div>
            <div className={s.flexed}>
              <p className={s.key}>Type Car</p>
              <p className={s.value}>Sport</p>
            </div>
          </div>
          <div className={s.specsDiv}>
            <div className={s.flexed}>
              <p className={s.key}>Type Car</p>
              <p className={s.value}>Sport</p>
            </div>
            <div className={s.flexed}>
              <p className={s.key}>Type Car</p>
              <p className={s.value}>Sport</p>
            </div>
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
    </div>
  );
};

export default Details;
