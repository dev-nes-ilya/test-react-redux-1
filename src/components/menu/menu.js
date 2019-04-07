import React, {Component} from "react";
import "./menu.css";
import {connect} from 'react-redux';
import {sortBy, setViewCard, setViewPreview, setLanguage} from '../../store/actions/actionsMenu'

class Menu extends Component {
  handlerSort = (fieldValue, num) => {
    this.props.sortBy(fieldValue, num, this.props.listData)
    }
  
  handlerViewCards = () => {
    this.props.setViewCard()
  }

  handlerViewPreview = () => {
    this.props.setViewPreview()
  }
    
  handlerChangeLanguage = (currentLang) => {
    this.props.setLanguage(currentLang)
  }
    
  render() {
    const idValue = 'id';
    const nameValue = 'name';
    const ageValue = 'age';
    let lang = this.props.language[this.props.currentLang]

    return (
      <div className="Menu">
        <div>
          <div className="Left_side">
            <div>
              <p>{lang.sort}</p>
            </div>
            <div className="Buttons">
              <button onClick={() => this.handlerSort(idValue)}>{lang.id}</button>
              <button onClick={() => this.handlerSort(nameValue)}>{lang.name}</button>
              <button onClick={() => this.handlerSort(ageValue)}>{lang.age.age}</button>
              <button onClick={() => this.handlerSort(this.props.sort.fieldValue, 1)}>{lang.ascending}</button>
              <button onClick={() => this.handlerSort(this.props.sort.fieldValue, -1)}>{lang.descending}</button>
              <button onClick={() => this.handlerChangeLanguage(this.props.currentLang)}>{lang.interface}{lang.language}</button>
            </div>
          </div>
          <div className="Right_side">
            <div>
              <p>{lang.view}</p>
            </div>
            <div className="Buttons">
              <button onClick={() => this.handlerViewCards()}>{lang.table}</button>
              <button onClick={() => this.handlerViewPreview()}>{lang.preview}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listData: state.app.listData,
    showCards: state.app.showCards,
    sort: state.app.sort,
    preview: state.app.preview,
    currentLang: state.app.currentLang,
    language: state.app.language
  } 
}
function mapDispatchToProps(dispatch) {
  return {
    sortBy: (fieldValue, num, arr) => dispatch(sortBy(fieldValue, num, arr)),
    setViewCard: () => dispatch(setViewCard()),
    setViewPreview: () => dispatch(setViewPreview()),
    setLanguage: (currentLang) => dispatch(setLanguage(currentLang))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
