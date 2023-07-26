import React from "react";
import RecomendedTv from "./RecomendedTv";
import style from "./TvShowLit.module.css";

const TvShowLit = ({ tvShowList, onClick }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.recText}>You Will Probebly Like :</div>
      <div className={style.recList}>
        {tvShowList.map((item) => (
          <span className={style.tv_show_item}>
            <RecomendedTv
              key={item.id}
              tvShow={item}
              onClick={(e) => {
                onClick(e);
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TvShowLit;
