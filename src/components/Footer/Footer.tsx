import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.logoCon}>
          <h3 className={s.logo}>MOSA-RENT</h3>
          <p className={s.text}>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className={s.listCon}>
          <div>
            <h4 className={s.titles}>About</h4>
            <ul className={s.list}>
              <li className={s.listItems}>
                <a>How it works</a>
              </li>
              <li className={s.listItems}>
                <a>Featured</a>
              </li>
              <li className={s.listItems}>
                <a>Partnership</a>
              </li>
              <li className={s.listItems}>
                <a>Business Relation</a>
              </li>
            </ul>
          </div>
          <div className={s.social}>
            <h4 className={s.titles}>Socials</h4>
            <ul className={s.list}>
              <li className={s.listItems}>
                <a>Discord</a>
              </li>
              <li className={s.listItems}>
                <a>Instagram</a>
              </li>
              <li className={s.listItems}>
                <a>Twitter</a>
              </li>
              <li className={s.listItems}>
                <a>Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={s.titles}>Community</h4>
            <ul className={s.list}>
              <li className={s.listItems}>
                <a>Events</a>
              </li>
              <li className={s.listItems}>
                <a>Blog</a>
              </li>
              <li className={s.listItems}>
                <a>Podcast</a>
              </li>
              <li className={s.listItems}>
                <a>Invite a Friend</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.termsCon}>
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className={s.copyRight}>
          <p>©{new Date().getFullYear()} MOSA-RENT. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
