import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  sortBy,
  setLanguage,
  filterByInput,
  setSortOrder
} from "../../store/actions/actionsMenu";
import { withRouter } from "react-router-dom";

class Menu extends Component {
  handlerSort = fieldValue => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    this.props.sortBy(fieldValue);
  };
  handlerOrder = num => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    this.props.setOrder(num);
  };

  handlerChangeLanguage = currentLang => {
    this.props.setLanguage(currentLang);
  };

  handlerInputFilter(e, preview, sortValue, sortOrder, autoPlay) {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    let path = `/?auto=${autoPlay}&preview=${preview}&filterWord=${e.target.value !== null ? e.target.value : ''}&sortValue=${sortValue}&sortOrder=${sortOrder}`
    this.props.history.replace(path);
  }

  render() {

    let params = new URLSearchParams(window.location.search);

    let preview = params.get("preview");
    let filterWord = params.get("filterWord");
    let sortValue = params.get("sortValue");
    let sortOrder = params.get("sortOrder");
    let autoPlay = params.get("auto");

    let lang = this.props.language[this.props.currentLang];
    return (
      <div className="Menu">
        <div>
          <div className="Left_side">
            <div>
              <p>{lang.sort}</p>
            </div>
            <div className="Buttons">
              <div>
                <Link
                  to={{
                    pathname: "/",
                    search: `?auto=${autoPlay}&preview=${preview}&filterWord=${filterWord}&sortValue=id&sortOrder=${sortOrder}`
                  }}
                >
                  <button className={sortValue === "id" ? "selected" : ""}>
                    {lang.id}
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    search: `?auto=${autoPlay}&preview=${preview}&filterWord=${filterWord}&sortValue=name&sortOrder=${sortOrder}`
                  }}
                >
                  <button className={sortValue === "name" ? "selected" : ""}>
                    {lang.name}
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/",
                    search: `?auto=${autoPlay}&preview=${preview}&filterWord=${filterWord}&sortValue=age&sortOrder=${sortOrder}`
                  }}
                >
                  <button className={sortValue === "age" ? "selected" : ""}>
                    {lang.age.age}
                  </button>
                </Link>
              </div>
              <div>
                <Link
                  to={{
                    pathname: "/",
                    search: `?auto=${autoPlay}&preview=${preview}&filterWord=${filterWord}&sortValue=${sortValue}&sortOrder=1`
                  }}
                >
                  <button className={sortOrder === "1" ? "selected" : ""}>
                    {lang.ascending}
                  </button>
                </Link>

                <Link
                  to={{
                    pathname: "/",
                    search: `?auto=${autoPlay}&preview=${preview}&filterWord=${filterWord}&sortValue=${sortValue}&sortOrder=-1`
                  }}
                >
                  <button className={sortOrder === "-1" ? "selected" : ""}>
                    {lang.descending}
                  </button>
                </Link>
              </div>
              <input
                type="text"
                id="filter"
                onChange={e =>
                  this.handlerInputFilter(
                    e,
                    preview,
                    sortValue,
                    sortOrder,
                    autoPlay
                  )
                }
                placeholder={lang.placeholder}
              />
            </div>
          </div>
          <div className="Right_side">
            <div className="Buttons">
              <button
                onClick={() =>
                  this.handlerChangeLanguage(this.props.currentLang)
                }
              >
                {lang.interface}
                {lang.language}
              </button>
            </div>
            <div>
              <p>{lang.view}</p>
            </div>
            <div className="Buttons">
              <Link
                to={{
                  pathname: "/",
                  search: `?auto=${autoPlay}&preview=table&filterWord=${filterWord}&sortValue=${sortValue}&sortOrder=${sortOrder}`
                }}
              >
                <button className={preview === "table" ? "selected" : ""}>
                  {lang.table}
                </button>
              </Link>
              <Link
                to={{
                  pathname: "/",
                  search: `?auto=${autoPlay}&preview=cards&filterWord=${filterWord}&sortValue=${sortValue}&sortOrder=${sortOrder}`
                }}
              >
                <button className={preview === "cards" ? "selected" : ""}>
                  {lang.preview}
                </button>
              </Link>
            </div>
          </div>
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
function mapDispatchToProps(dispatch) {
  return {
    sortBy: (fieldValue, num, filteredArr, arr) =>
      dispatch(sortBy(fieldValue, num, filteredArr, arr)),
    setOrder: num => dispatch(setSortOrder(num)),
    setLanguage: currentLang => dispatch(setLanguage(currentLang)),
    filterByInput: e => dispatch(filterByInput(e))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Menu));
