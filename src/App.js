import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import ConvertedData from "./conteiners/convertedData/convertedData";
import Menu from "./components/menu/menu";
import { setDataToState } from "./store/actions/actionsMenu";
import axios from "axios";

class App extends Component {
  componentWillMount() {
    this.props.history.push(
      "?auto=on&preview=table&filterWord=&sortValue=id&sortOrder=1",
      null
    );
  }

  async componentDidMount() {
    try {
      const response = await axios.get("../../../data/data.json");
      const mainData = response.data.reduce((acc, item) => {
        return { ...acc, [item.id]: item };
      }, {});
      this.props.setData(mainData);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let params = new URLSearchParams(window.location.search);
    let autoPlay = params.get("auto");

    window.onscroll = () => {
      if (autoPlay === "on") {
        let elem = document.getElementsByClassName("videoContent");
        for (let i = 0; i < elem.length; i++) {
          let pos = elem[i].getBoundingClientRect();
          let curCenterY =
            document.documentElement.clientHeight / 2 + window.pageYOffset; // расстояние от центра экрана до верха страницы
          let topEl = pos.top + window.pageYOffset; // расстояние от верха страницы до верха элемента
          let bottomEl = pos.bottom + window.pageYOffset; // расстояние от верха страницы до низа элемента
          if(pos.bottom < document.documentElement.clientHeight / 2) {
            elem[i].play()
          } else {
            if (curCenterY >= topEl && curCenterY <= bottomEl) {
            if (elem[i - 1] !== undefined) {
              elem[i - 1].pause()
            };
            elem[i].play();
          } else {
            elem[i].pause();
          }
          }
          
        }
      }
    };

    return (
      <div className="Main">
        <div className="Menu_container">
          <Route component={Menu} />
        </div>
        <div className="container" />
        <Route component={ConvertedData} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    listData: state.app.listData,
    filterWord: state.app.dataConverter.filterWord,
    sortValue: state.app.dataConverter.sortValue,
    sortOrder: state.app.dataConverter.sortOrder,
    showCards: state.app.showCards,
    preview: state.app.preview
  };
}

function mapDispatchTiProps(dispatch) {
  return {
    setData: data => dispatch(setDataToState(data))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchTiProps
  )(App)
);
