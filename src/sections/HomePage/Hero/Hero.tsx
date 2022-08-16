import cn from "classnames";

import car from "../../../car.png";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.heroCard}>
        <div className={s.heroTitle}>
          <h2>The Best Platform for Car Rental</h2>
          <h3>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </h3>
        </div>
        <div className={s.heroButton}>Rental Car</div>
        <div className={s.heroImage}>
          <img src={car} alt="" />
        </div>
      </div>
      <div className={s.secondCard}>
        <div className={s.heroTitle}>
          <h2>Easy way to rent a car at a low price</h2>
          <h3>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </h3>
        </div>
        <div className={s.secondButton}>Rental Car</div>
        <div className={s.heroImage}>
          <img src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
