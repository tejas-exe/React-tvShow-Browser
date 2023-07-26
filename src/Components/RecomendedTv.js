import React from "react";
import style from "./RecomendedTv.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../Api/config";
const MAX_TITLE_CHAR = 20;

const RecomendedTv = ({ tvShow, onClick }) => {
  console.log();
  return (
    <div
      onClick={() => {
        onClick(tvShow);
      }}
      className={style.container}
    >
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={style.img}
      />
      <div className={style.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default RecomendedTv;
