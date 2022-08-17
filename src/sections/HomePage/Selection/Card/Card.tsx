import cn from "classnames";
import { ReactNode } from "react";
import s from "./Card.module.css";

interface ICardProps {
  displayed: ReactNode;
  title: string;
  direction: string;
}

const Card = ({ displayed, title, direction }: ICardProps) => {
  return (
    <div className={cn(s.card, { [s.flexedRight]: direction === "right" })}>
      <div className={s.title}>
        {displayed}
        <h4>{title}</h4>
      </div>
      <div className={s.flexed}>
        <div className={s.flexCol}>
          <h4 className={s.colTitle}>Locations</h4>
          <p className={s.colPara}>Semarang</p>
        </div>
        <div className={s.flexCol}>
          <h4 className={s.colTitle}>Date</h4>
          <p className={s.colPara}>20 July 2022</p>
        </div>
        <div className={s.flexCol}>
          <h4 className={s.colTitle}>Time</h4>
          <p className={s.colPara}>07.00</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
