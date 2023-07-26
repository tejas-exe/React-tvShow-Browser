import React, { useState, useEffect } from "react";
import style from "./Layout.module.css";
import { fechMovieData } from "../Api/tvShows";
import { BACKDROP_BASE_URL } from "../Api/config";
import TvShowDetail from "./TvShowDetail";
import Logo from "./Logo";
import TvShowLit from "./TvShowLit";
import SearchBar from "./Search";

const Layout = () => {
  const [currentShow, SetCurrentShow] = useState();
  const [tvShowRecommendation, setTvShowRecommendation] = useState([]);

  useEffect(() => {
    const dataFecher = async () => {
      const res = await fechMovieData.fechPopular();
      if (res.length) {
        SetCurrentShow(res[0]);
      }
    };
    dataFecher();
  }, []);

  useEffect(() => {
    const dataFecher = async () => {
      if (currentShow) {
        const recomendationList = await fechMovieData.fechRecommendations(
          currentShow.id
        );
        setTvShowRecommendation(recomendationList);
      }
    };
    dataFecher();
    if (currentShow) {
      setTvShowRecommendation();
    }
  }, [currentShow]);

  const dataFecherSearch = async (e) => {
    const searchResult = await fechMovieData.searchQuery(e);
 if (searchResult){
  SetCurrentShow(searchResult[0])
 }
  };
  

  return (
    <div
      className={style.mainContainer}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url(${BACKDROP_BASE_URL}${
          currentShow
            ? currentShow.backdrop_path
            : "/d1ujVe5yWPJ6mtepghxidUYIJa5.jpg "
        })`,
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo tittle="Watowatch" sub="Find a show you may like" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={(e) => {dataFecherSearch(e)}} />
          </div>
        </div>
      </div>
      <div className={style.tvShowDetails}>
        <TvShowDetail
          tvShowDisctiption={currentShow ? currentShow : "Feching ...."}
        />
      </div>

      <div className={style.recomendedtvShow}>
        {tvShowRecommendation && (
          <TvShowLit
            tvShowList={tvShowRecommendation}
            onClick={(e) => {
              SetCurrentShow(e);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
