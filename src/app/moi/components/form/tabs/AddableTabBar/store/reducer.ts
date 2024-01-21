import { AddableTabsAction } from "./action.enum";

export type StoreAction = {
  type: string;
  payload: any; // @todo: maybe, define a type
};

type AddableTabsState = {
  tabs: any[];
  currentIndex: string;
};

export const initialState: AddableTabsState = {
  tabs: [],
  currentIndex: "",
};

export const reducer = (state = initialState, action: StoreAction) => {
  switch (action.type) {
    case AddableTabsAction.SET_CURRENT:
      return {
        ...state,
        currentIndex: action.payload.key,
      };
    case AddableTabsAction.SET_TABS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
