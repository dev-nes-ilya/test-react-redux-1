import React from "react";
import "./peopleView.css";
import { connect } from "react-redux";
import { handlerchangeFavorite } from "../../store/actions/actionsMenu";
import { Link } from "react-router-dom";
import Radium from "radium";

const peopleView = props => {
  function handlerchangeFavorite() {
    props.changeFavorite(props.idCard);
  }

  let params = new URLSearchParams(window.location.search);
  let preview = params.get("preview");
  let filterWord = params.get("filterWord");
  let sortValue = params.get("sortValue");
  let sortOrder = params.get("sortOrder");

  let ageLabel = props.language[props.currentLang].age.label;
  if (props.age > 4 && props.age <= 20) {
    ageLabel = ageLabel[2];
  } else {
    const rest = props.age % 10;
    switch (rest) {
      case 1:
        ageLabel = ageLabel[0];
        break;
      case 2:
        ageLabel = ageLabel[1];
        break;
      case 3:
        ageLabel = ageLabel[1];
        break;
      case 4:
        ageLabel = ageLabel[1];
        break;
      default:
        ageLabel = ageLabel[2];
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

  const style = {
    backgroundImage: "url(/images/icon/favorites-cheked.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%",
    backgroundPosition: "55%",
    transition: "0.1s ease-in-out",
    ":hover": {
      cursor: "pointer",
      backgroundSize: "65%"
    }
  };
  document.body.scrollTop = document.documentElement.scrollTop = 0


  return (
    <div
      style={{
        opacity: "0",
        animationName: "cards",
        animationDuration: "0.3s",
        animationDelay: `${props.index < 10 ? props.index * 0.5: props.index * 0.01}s`,
        animationTimingFunction: "easi-in-out",
        Zindex: `${1000 / props.index}`,
        animationFillMode: "forwards"
      }}
      className="Main_block"
    >
      <div className="PeopleView">
        <div className="First_block">
          <img className="Avatar" src={srcimg} alt={props.image} />
          <div>{props.name}</div>
          <div
            style={style}
            onClick={() => handlerchangeFavorite()}
            className={cls1.join(" ")}
          />
        </div>
        <div className="child">{props.age + " " + ageLabel}</div>
        <div className="child">{props.phone}</div>
        <div className="child">{props.phrase}</div>
      </div>
      {props.video ? (
        <div className={cls2.join(" ")}>
          <Link
            to={{
              pathname: "/",
              search: `?auto=off&preview=${preview}&filterWord=${filterWord}&sortValue=${sortValue}&sortOrder=${sortOrder}`
            }}
          >
            <video
              className={"videoContent"}
              muted
              controls
              preload='metadata'
              width="100%"
              height="100%"
              src={srcvid}
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    listData: state.app.listData,
    currentLang: state.app.currentLang,
    language: state.app.language
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeFavorite: id => dispatch(handlerchangeFavorite(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(peopleView));
