import {
  SORT_BY,
  SET_VIEW_CARDS,
  SET_VIEW_PREVIEW,
  SET_RUS_LANG,
  SET_ENG_LANG,
  CHANGE_FAVORITE
} from "./actionTypes";

export function sortBy(fieldValue = "id", num = 1, arr) {
  arr.sort((a, b) => {
    if (a[fieldValue] > b[fieldValue]) return num;
    if (b[fieldValue] > a[fieldValue]) return -num;
  });
  return {
    type: SORT_BY,
    listData: arr,
    sort: {
      fieldValue: fieldValue,
      num: num
    }
  };
}

export function setViewCard() {
  return {
    type: SET_VIEW_CARDS
  };
}

export function setViewPreview() {
  return {
    type: SET_VIEW_PREVIEW
  };
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

export function handlerchangeFavorite(arr, id, card) {
  const newListData = arr.concat()
  newListData[id] = card
  return {
    type: CHANGE_FAVORITE,
    newListData
  };
}
