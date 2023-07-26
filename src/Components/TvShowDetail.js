import React from "react";
import style from "./TvShowDetail.module.css";
import Ratting from "./Ratting";

const TvShowDetail = ({ tvShowDisctiption }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.title}>{tvShowDisctiption.name}</div>
      <div className={style.ratingContainer}>
        <Ratting ratting={tvShowDisctiption.vote_average / 2} />
        <div>{tvShowDisctiption.vote_average / 2}/5</div>
      </div>
      <div className={style.overview}>{tvShowDisctiption.overview}</div>
    </div>
  );
};

export default TvShowDetail;
