import React from "react";
import "./peopleCard.css";

const PeopleCards = props => {
  let cls = "";
  if (!props.favourite) {
    cls = "notFavorite";
  }
  let srcimg = `/images/img/${props.image}.svg`;

  return (
    <ul className="PeopleCards">
      <li>
        <img src={srcimg} alt={props.image} />
      </li>
      <li>{props.name}</li>
      <li>{props.age} лет</li>
      <li>{props.phone}</li>
      <li className={cls}>
        <img src="/images/icon/glyphicons_fit_content_width.png" alt="fav" />
      </li>
    </ul>
  );
};

export default PeopleCards;
