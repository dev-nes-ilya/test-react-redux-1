import { SORT_BY, SET_VIEW_CARDS, SET_VIEW_PREVIEW } from "./actionTypes";

export function sortBy(fieldValue = "id", num = 1, arr) {
  console.log("fieldValue: ", fieldValue, "num: ", num, "arr: ", arr);
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
