import React from "react";
import style from "./Logo.module.css";

const Logo = ({ tittle, sub }) => {
  return (
    <>
      <div className={style.logoContainer}>
        <img
          src="https://raw.githubusercontent.com/codiku/react-tv-show-adviser/master/src/assets/images/logo.png"
          alt="LOGO"
          className={style.imge}
        />
        <div className={style.tittle}>{tittle}</div>
      </div>
      <div className={`${style.logoContainer} ${style.sub}`}>{sub}</div>
    </>
  );
};

export default Logo;
