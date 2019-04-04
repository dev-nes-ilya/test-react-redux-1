import React from "react";
import "./peopleView.css";

const PeopleCards = props => {
  let ageLabel = "";

  if (props.age > 4 && props.age < 20) {
    ageLabel = "лет";
  } else {
    const rest = props.age % 10;
    switch (rest) {
      case 1:
      ageLabel = "год";
        break;
      case 2:
      ageLabel = "года";
        break;
      case 3:
      ageLabel = "года";
        break;
      case 4:
      ageLabel = "года";
        break;
      default:
      ageLabel = "лет";
    }
  }

  let cls1 = "";
  let cls2 = ['video']
  if (!props.favourite) {
    cls1 = "notFavorite";
  }
  if (props.video) {
    cls2.push(props.video)
  }
 
  return (
    <div className="Main_block">
      <div className="PeopleView">
        <div className="First_block">
          <div>
            <div className={"Avatars " + props.image} />
          </div>
          <div>{props.name}</div>
          <div className={cls1}>
            <div className="fav" />
          </div>
        </div>
        <div className="child">{props.age + " " + ageLabel}</div>
        <div className="child">{props.phone}</div>
        <div className="child">{props.phrase}</div>
      </div>
      {props.video 
        ? (<div className={cls2.join(' ')}>
          <video controls  preload="none" src="../media/videos/boy.mp4">
          </video>
        </div>) 
        : null}
    </div>
  );
};

export default PeopleCards;
