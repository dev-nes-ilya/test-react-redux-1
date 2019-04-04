import React from "react";
import "./peopleCard.css";

const PeopleCards = props => {
  let cls = '';
  if(!props.favourite) {
    cls = 'notFavorite'
  }

  return (
    <ul className='PeopleCards'>
      <li>
      <div className={'Avatar ' + props.image}/>
      </li>
      <li>{props.name}</li>
      <li>{props.age} лет</li>
      <li>{props.phone}</li>
      <li className={cls}>
        <div></div>
      </li>
    </ul>
  );
};

export default PeopleCards;
