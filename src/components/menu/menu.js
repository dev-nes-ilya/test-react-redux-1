import React, {Component} from "react";
import "./menu.css";
import {connect} from 'react-redux';
import {sortBy, setViewCard, setViewPreview} from '../../store/actions/actionsMenu'

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
    
  render() {
    const idValue = 'id';
    const nameValue = 'name';
    const ageValue = 'age';
    return (
      <div className="Menu">
        <div>
          <div className="Left_side">
            <div>
              <p>Сортировка:</p>
            </div>
            <div className="Buttons">
              <button onClick={() => this.handlerSort(idValue)}>ID</button>
              <button onClick={() => this.handlerSort(nameValue)}>Имя</button>
              <button onClick={() => this.handlerSort(ageValue)}>Возраст</button>
              <button onClick={() => this.handlerSort(this.props.sort.fieldValue, 1)}>По возрастанию</button>
              <button onClick={() => this.handlerSort(this.props.sort.fieldValue, -1)}>По убыванию</button>
            </div>
          </div>
          <div className="Right_side">
            <div>
              <p>Вид:</p>
            </div>
            <div className="Buttons">
              <button onClick={() => this.handlerViewCards()}>Таблица</button>
              <button onClick={() => this.handlerViewPreview()}>Превью</button>
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
    preview: state.app.preview
  } 
}
function mapDispatchToProps(dispatch) {
  return {
    sortBy: (fieldValue, num, arr) => dispatch(sortBy(fieldValue, num, arr)),
    setViewCard: () => dispatch(setViewCard()),
    setViewPreview: () => dispatch(setViewPreview())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
