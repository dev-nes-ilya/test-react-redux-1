import React, { Component } from "react";
import { connect } from "react-redux";
import PeopleCard from "../peopleCard/peopleCard";
import PeopleView from "../peopleView/peopleView";
import { withRouter } from "react-router-dom";

class ConvertedData extends Component {
  dataConverter(data, filterWord, sortValue, order) {
    let arr = Object.values(data);
    let filterValue = filterWord.match(/[a-zA-Zа-яА-Я0-9]+/gi);

    let filteredArr1;
    let filteredArr2;
    let currentFilter = arr;

    if (filterWord[0] === ":") {
      if (filterValue && filterValue !== null && filterValue !== null) {
        let num = filterValue[0].length;
        filteredArr1 = arr.filter(item => {
          return (
            item.name
              .split(" ")[1]
              .substr(0, num)
              .toLowerCase() === filterValue[0].substr(0, num).toLowerCase()
          );
        });
        if (filterValue.length === 2) {
          num = filterValue[1].length;
          filteredArr2 = filteredArr1.filter(item => {
            return (
              item.name
                .split(" ")[0]
                .substr(0, num)
                .toLowerCase() === filterValue[1].substr(0, num).toLowerCase()
            );
          });
        }
      }
    } else {
      if (filterWord && filterWord !== null && filterValue !== null) {
        let num = filterValue[0].length;
        filteredArr1 = arr.filter(item => {
          return (
            item.name
              .split(" ")[0]
              .substr(0, num)
              .toLowerCase() === filterValue[0].substr(0, num).toLowerCase()
          );
        });
        if (filterValue.length === 2) {
          num = filterValue[1].length;
          filteredArr2 = filteredArr1.filter(item => {
            return (
              item.name
                .split(" ")[1]
                .substr(0, num)
                .toLowerCase() === filterValue[1].substr(0, num).toLowerCase()
            );
          });
        }
      }
    }
    if (filterWord && filterWord !== null && filterValue !== null) {
      switch (filterValue.length) {
        case 1:
          currentFilter = filteredArr1;
          break;
        case 2:
          currentFilter = filteredArr2;
          break;
        default:
          currentFilter = arr;
      }
    }

    let currentFilterSorted = currentFilter.sort((a, b) =>
      a[sortValue] > b[sortValue] ? order : -order
    );
    return currentFilterSorted;
  }

  render() {
    let params = new URLSearchParams(window.location.search);

    let preview = params.get("preview");
    let filterWord = params.get("filterWord");
    let sortValue = params.get("sortValue");
    let sortOrder = params.get("sortOrder");

    let table;
    let cards;
    table = this.dataConverter(
      this.props.listData,
      filterWord,
      sortValue,
      sortOrder
    ).map((item, index) => {
      return (
        <PeopleCard
          key={index}
          idCard={item.id}
          name={item.name}
          age={item.age}
          phone={item.phone}
          favourite={item.favourite}
          image={item.image}
        />
      );
    });

    cards = this.dataConverter(
      this.props.listData,
      filterWord,
      sortValue,
      sortOrder
    ).map((item, index) => {
      return (
        <PeopleView
          key={index}
          idCard={item.id}
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
    return (
      <div>
        <div style={{
            position: "fixed",
            background: "rgb(224, 224, 224)",
            height: "100%",
            width: "100%",
            zIndex: '-1'
          }}></div>
        <div
          style={{
            top: "65px",
            display: "flex",
            alignContent: "flex-start",
            flexWrap: "wrap",
            maxWidth: "784px",
            margin: "auto",
            background: "rgb(224, 224, 224)"
          }}
        >
          {preview === "table" ? table : cards}
        </div>
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
    preview: state.app.preview,
    currentLang: state.app.currentLang,
    language: state.app.language
  };
}

export default connect(mapStateToProps)(withRouter(ConvertedData));
