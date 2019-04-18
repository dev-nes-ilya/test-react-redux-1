import {
  SORT_BY,
  SET_RUS_LANG,
  SET_ENG_LANG,
  CHANGE_FAVORITE,
  FILTER_BY_INPUT,
  SET_DATA_TO_STATE,
  SET_ORDER
} from "./actionTypes";


export function setDataToState(data) {
  return {
    type: SET_DATA_TO_STATE,
    data
  }
}

export function sortBy(fieldValue) {
   return {
    type: SORT_BY,
    fieldValue
  };
}

export function setSortOrder(num) {
  return {
    type: SET_ORDER,
    num
  }
}

export function setLanguage(currentLang) {
  if (currentLang === "rus") {
    return {
      type: SET_ENG_LANG
    };
  } else {
    return {
      type: SET_RUS_LANG
    };
  }
}

export function handlerchangeFavorite(id) {
  return {
    type: CHANGE_FAVORITE,
    id
  };
}

export function filterByInput(filterWord) {
  return {
    type: FILTER_BY_INPUT,
    filterWord
  };
}
