import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const Ratting = ({ ratting }) => {
  let StarList = [];
  const star = Math.floor(ratting);

  const Half = ratting - parseInt(ratting) >= 0.5;

  const emptyStar = ratting + (Half ? 1 : 0) - 5;
  for (let index = 0; index < star; index++) {
    StarList.push(<StarFill key={`star-fill${index}`}></StarFill>);
  }
  if (Half) {
    StarList.push(<StarHalf key={`star-Half`}></StarHalf>);
  }
  for (let index = 0; index < emptyStar; index++) {
    StarList.push(<StarEmpty key={`star-empty${index}`}></StarEmpty>);
  }

  return <div>{StarList}</div>;
};

export default Ratting;
