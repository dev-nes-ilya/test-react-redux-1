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

  let cls1 = ["fav"];
  let cls2 = ["video"];
  if (!props.favourite) {
    cls1.push("notFavorite");
  }
  if (props.video) {
    cls2.push(props.video);
  }
  let srcimg = `/images/img/${props.image}.svg`;
  let srcvid = `/videos/${props.video}.mp4`;

  return (
    <div className="Main_block">
      <div className="PeopleView">
        <div className="First_block">
          <img className='Avatar' src={srcimg} alt={props.image} />
          <div>{props.name}</div>
          <img
            className={cls1.join(" ")}
            src="/images/icon/glyphicons_fit_content_width.png"
            alt="fav"
          />
        </div>
        <div className="child">{props.age + " " + ageLabel}</div>
        <div className="child">{props.phone}</div>
        <div className="child">{props.phrase}</div>
      </div>
      {props.video ? (
        <div className={cls2.join(" ")}>
          <video controls preload="none" width="100%" height="100%" src={srcvid} />
        </div>
      ) : null}
    </div>
  );
};

export default PeopleCards;
