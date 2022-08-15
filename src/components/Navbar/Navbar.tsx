import Like from "components/Icons/Like";
import Notification from "components/Icons/Notification";
import Settings from "components/Icons/Settings";
import s from "./Navbar.module.css";
import user from "../../user.png";
import Search from "components/Icons/Search";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.logo}>MOSA-RENT</div>
      <div className={s.iconCon}>
        <div className={s.iconsCon}>
          <Like />
          <Notification />
          <Settings />
        </div>
        <div className={s.imgCon}>
          <img src={user} alt="" />
        </div>
      </div>
      <div className={s.searchCon}>
        <Search />
        <input type="text" placeholder="Search something here" />
      </div>
    </nav>
  );
};

export default Navbar;
