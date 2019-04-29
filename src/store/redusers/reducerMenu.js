import {
  SORT_BY,
  SET_RUS_LANG,
  SET_ENG_LANG,
  CHANGE_FAVORITE,
  FILTER_BY_INPUT,
  SET_DATA_TO_STATE,
  SET_ORDER,
  CHANGE_LOADING
} from "../actions/actionTypes";

const initialState = {
  listData: {},
  loading: true,
  showCards: true,
  dataConverter: {
    filterWord: "",
    sortValue: "id",
    sortOrder: 1
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
      view: "Вид: ",
      placeholder:
        "Для поиска по фамилии, необходимо начинать ввод с символа ' : '"
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
      view: "View: ",
      placeholder:
        "To search by last name, you need to start typing with the character ' : "
    }
  }
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA_TO_STATE:
      return {
        ...state,
        listData: action.data
      };
    case SORT_BY:
      return {
        ...state,
        dataConverter: {
          ...state.dataConverter,
          sortValue: action.fieldValue
        }
      };
    case SET_ORDER:
      return {
        ...state,
        dataConverter: {
          ...state.dataConverter,
          sortOrder: action.num
        }
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
        listData: {
          ...state.listData,
          [action.id]: {...state.listData[action.id], favourite: !state.listData[action.id].favourite}
        }
      };
    case FILTER_BY_INPUT:
      return {
        ...state, 
        dataConverter: {
          ...state.dataConverter,
          filterWord: action.filterWord
        }
      };
      case CHANGE_LOADING:
      return {
        ...state, 
        loading: false
      };
    default:
      return state;
  }
}
