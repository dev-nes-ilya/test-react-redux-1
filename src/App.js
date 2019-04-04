import React, { Component } from "react";
import "./App.css";
import data from "../src/data/data.json";
import PeopleCards from "./components/peopleCard/peopleCard";
import PeopleView from "./components/peopleView/peopleView";

class App extends Component {
  state = {
    listData: data,
    shoeCards: !true
  };

  render() {
    const isCards = this.state.shoeCards
    let cls = '';
    let peoples;
    if (isCards) {
      cls = 'App';
      peoples = this.state.listData.map((item, index) => {
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
      cls = 'App_flex';
      peoples = this.state.listData.map((item, index) => {
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
    return <div className='Main'>
      <div className={cls}>{peoples}</div>
      </div>
    
  }
}

export default App;
