import Favourite from "components/Icons/Favourite";

import { ICar } from "types/Car";

import s from "./Details.module.css";

const Details = ({
  headline,
  tagline,
  images,
  name,
  reviews,
  description,
  brand,
  capacity,
  transmission,
  gasoline,
  price,
  discount,
}: ICar) => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.card}>
          <div className={s.title}>
            <h2 className={s.headerPri}>{headline}</h2>
            <h3 className={s.headerSec}>{tagline}</h3>
          </div>
          <div className={s.image}>
            <img src={images![0]} alt={name} />
          </div>
        </div>
        <div className={s.imagesCon}>
          <div className={s.imageCon}>
            <img src={images![0]} alt={name} className={s.fitImg} />
          </div>
          <div className={s.imageCon}>
            <img src={images![0]} alt={name} className={s.fitImg} />
          </div>
          <div className={s.imageCon}>
            <img src={images![0]} alt={name} className={s.fitImg} />
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.nameCon}>
          <div>
            <h4 className={s.name}>{name}</h4>
            <p className={s.reviewNum}>{reviews?.length} Reviewer</p>
          </div>
          <div>
            <Favourite />
          </div>
        </div>
        <p className={s.desc}>{description}</p>
        <div className={s.specs}>
          <div className={s.specsDiv}>
            <div className={s.flexed}>
              <p className={s.key}>Type Car</p>
              <p className={s.value}>{brand}</p>
            </div>
            <div className={s.flexed}>
              <p className={s.key}>Capacity</p>
              <p className={s.value}>{capacity}</p>
            </div>
          </div>
          <div className={s.specsDiv}>
            <div className={s.flexed}>
              <p className={s.key}>Steering</p>
              <p className={s.value}>{transmission}</p>
            </div>
            <div className={s.flexed}>
              <p className={s.key}>Gasoline</p>
              <p className={s.value}>{gasoline}</p>
            </div>
          </div>
        </div>
        <div className={s.cta}>
          <div>
            <p>
              <span className={s.priceSpan}>
                $
                {discount! > 0
                  ? (((100 - discount!) / 100) * price).toFixed(2)
                  : price}
                /
              </span>{" "}
              day
            </p>
            <p className={s.discount}>{discount! > 0 && <>${price}</>}</p>
          </div>
          <div className={s.button}>Rent Now</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
