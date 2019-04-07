import React from "react";
import Radium from "radium";
import "./peopleCard.css";
import { connect } from "react-redux";
import { handlerchangeFavorite } from "../../store/actions/actionsMenu";

const PeopleCards = props => {
  function handlerchangeFavorite() {
    let currentCard = { ...props.obj };
    if (currentCard.favourite) {
      currentCard.favourite = false;
    } else {
      currentCard.favourite = true;
    }

    props.changeFavorite(props.listData, props.idCard, currentCard);
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
    backgroundImage: 'url(/images/icon/favorites-cheked.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75%',
    backgroundPosition: '50%',
    ':hover': {
      cursor: 'pointer'
    }
  };

  return (
    <ul className="PeopleCards">
      <li>
        <img src={srcimg} alt={props.image} />
      </li>
      <li>{props.name}</li>
      <li>{props.age + " " + ageLabel}</li>
      <li>{props.phone}</li>
      <li className={cls} style={style} onClick={() => handlerchangeFavorite()}>
      </li>
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
    changeFavorite: (arr, id, card) =>
      dispatch(handlerchangeFavorite(arr, id, card))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(PeopleCards));
