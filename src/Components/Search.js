import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import style from "./Search.module.css";

const SearchBar = ({ onSubmit }) => {
  const [ipt, setIpt] = useState("");
  return (
    <>
      <Search size={27} className={style.icon} />
      <input
        onChange={(e) => {
          setIpt(e.target.value);
        }}
        style={{ width: "100%" }}
        type="text"
        placeholder="Search a TV Show you may like"
        className={style.input}
        value={ipt}
        onKeyUp={(e) => {
          console.log("-->", e.target.value);
          if (e.key === "Enter" && e.target.value !== "") {
            onSubmit(e.target.value);
            setIpt("");
          }
        }}
      />
    </>
  );
};

export default SearchBar;
