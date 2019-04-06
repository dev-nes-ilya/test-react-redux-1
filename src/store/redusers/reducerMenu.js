import data from "../../data/data.json";
import {
  SORT_BY,
  SET_VIEW_CARDS,
  SET_VIEW_PREVIEW
} from "../actions/actionTypes";

const initialState = {
  listData: data,
  showCards: true,
  sort: {
    fieldValue: "id",
    num: 1
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
    default:
      return state;
  }
}
