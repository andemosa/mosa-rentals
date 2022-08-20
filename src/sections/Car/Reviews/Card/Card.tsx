import s from "./Card.module.css";
import user from "../../../../user.png";

const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.imageCon}>
        <img src={user} alt="" className={s.img} />
      </div>
      <div className={s.body}>
        <div className={s.flexed}>
          <div>
            <h4 className={s.name}>Alex Stanton</h4>
            <p>CEO at Amazon</p>
          </div>
          <div>
            <p>21 July 2022</p>
          </div>
        </div>
        <div className={s.desc}>
          We are very happy with the service from the MOSA-RENT App. Mosa-rent
          has a low price and also a large variety of cars with good and
          comfortable facilities. In addition, the service provided by the
          officers is also very friendly and very polite.
        </div>
      </div>
    </div>
  );
};

export default Card;
