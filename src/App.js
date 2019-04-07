import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import PeopleCards from "./conteiners/peopleCard/peopleCard";
import PeopleView from "./conteiners/peopleView/peopleView";
import Menu from "./components/menu/menu";

class App extends Component {
  render() {

    const isCards = this.props.showCards;
    let cls = "";
    let peoples;
    if (isCards) {
      cls = "App";
      peoples = this.props.listData.map((item, index) => {
        return (
          <PeopleCards
            key={index}
            idCard={index}
            name={item.name}
            age={item.age}
            phone={item.phone}
            favourite={item.favourite}
            image={item.image}
            obj={item}
          />
        );
      });
    } else {
      cls = "App_flex";
      peoples = this.props.listData.map((item, index) => {
        return (
          <PeopleView
            key={index}
            idCard={index}
            name={item.name}
            age={item.age}
            phone={item.phone}
            favourite={item.favourite}
            image={item.image}
            phrase={item.phrase}
            video={item.video}
            obj={item}
          />
        );
      });
    }

    return (
      <div className="Main">
        <div className="Menu_container">
          <Menu />
        </div>
        <div className={cls}>{peoples}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    listData: state.app.listData,
    showCards: state.app.showCards,
    sort: state.app.sort,
    preview: state.app.preview
  };
}

export default connect(mapStateToProps)(App);
