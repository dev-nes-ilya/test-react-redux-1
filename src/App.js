import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import PeopleCards from "./conteiners/peopleCard/peopleCard";
import PeopleView from "./conteiners/peopleView/peopleView";
import Menu from "./components/menu/menu";

class App extends Component {
  render() {
    // const vs = ["id", "name", "age"];
    // const num = 2;
    // const fetchNum = -1;
    // const sorted = this.props.listData.sort((a, b) => {
    //   if (a[vs[num]] > b[vs[num]]) return fetchNum;
    //   if (b[vs[num]] > a[vs[num]]) return -fetchNum;
    // });
    // // console.log(sorted);
    // // const name = 'name';

    // // if(this.props.listData[0][name] > this.props.listData[1][name]) {
    // //   console.log('верно')
    // // } else {
    // //   console.log('не верно')
    // // }

    // // console.log(this.props.listData[0].name)
    console.log('App:', this.props.listData)
    const isCards = this.props.showCards;
    let cls = "";
    let peoples;
    if (isCards) {
      cls = "App";
      peoples = this.props.listData.map((item, index) => {
        return (
          <PeopleCards
            key={index}
            name={item.name}
            age={item.age}
            phone={item.phone}
            favourite={item.favourite}
            image={item.image}
          />
        );
      });
    } else {
      cls = "App_flex";
      peoples = this.props.listData.map((item, index) => {
        return (
          <PeopleView
            key={index}
            name={item.name}
            age={item.age}
            phone={item.phone}
            favourite={item.favourite}
            image={item.image}
            phrase={item.phrase}
            video={item.video}
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
