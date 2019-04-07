import data from "../../data/data.json";
import {
  SORT_BY,
  SET_VIEW_CARDS,
  SET_VIEW_PREVIEW,
  SET_RUS_LANG,
  SET_ENG_LANG,
  CHANGE_FAVORITE
} from "../actions/actionTypes";

const initialState = {
  listData: data,
  showCards: true,
  sort: {
    fieldValue: "id",
    num: 1
  },
  currentLang: "rus",
  language: {
    rus: {
      language: "Русский",
      id: "ID",
      name: "Имя",
      age: {
        age: "Возраст",
        label: ["год", "года", "лет"]
      },
      ascending: "По возрастанию",
      descending: "По убыванию",
      table: "Таблица",
      preview: "Превью",
      interface: "Язык: ",
      sort: "Сортировка: ",
      view: "Вид: "
    },
    eng: {
      language: "English",
      id: "ID",
      name: "Name",
      age: {
        age: "Age",
        label: ["years old", "years old", "years old"]
      },
      ascending: "Ascending",
      descending: "Descending",
      table: "Table",
      preview: "Preview",
      interface: "Language: ",
      sort: "Sort by: ",
      view: "View: "
    }
  }
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        listData: action.listData,
        sort: action.sort
      };
    case SET_VIEW_CARDS:
      return {
        ...state,
        showCards: true
      };
    case SET_VIEW_PREVIEW:
      return {
        ...state,
        showCards: false
      };
    case SET_ENG_LANG:
      return {
        ...state,
        currentLang: "eng"
      };
    case SET_RUS_LANG:
      return {
        ...state,
        currentLang: "rus"
      };
    case CHANGE_FAVORITE:
      return {
        ...state,
        listData: action.newListData
      };
    default:  
      return state;
  }
}
