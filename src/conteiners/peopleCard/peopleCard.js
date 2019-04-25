import React from "react";
import Radium from "radium";
import "./peopleCard.css";
import { connect } from "react-redux";
import { handlerchangeFavorite } from "../../store/actions/actionsMenu";

const PeopleCard = props => {
  function handlerchangeFavorite() {
    props.changeFavorite(props.idCard);
  }
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
  

  let cls = "";
  if (!props.favourite) {
    cls = "notFavorite";
  }

  let srcimg = `/images/img/${props.image}.svg`;
 
  const style = {
    backgroundImage: "url(/images/icon/favorites-cheked.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "75%",
    backgroundPosition: "50%",
    transition: "0.1s ease-in-out",
    ":hover": {
      cursor: "pointer",
      backgroundSize: "90%"
    }
  };
 
  return (
    <ul style={{
      opacity: '0',
      animationName: 'table',
      animationDuration: '0.3s',
      animationDelay: `${props.index * 0.09}s`,
      animationTimingFunction: 'easi-in-out',
      Zindex: `${1000 / props.index}`,
      animationFillMode: 'forwards'
    }} 
    className='PeopleCards'>
      <li>
        <img src={srcimg} alt={props.image} />
      </li>
      <li>{props.name}</li>
      <li>{props.age + " " + ageLabel}</li>
      <li>{props.phone}</li>
      <li
        className={cls}
        style={style}
        onClick={() => handlerchangeFavorite()}
      />
    </ul>
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
)(Radium(PeopleCard));
