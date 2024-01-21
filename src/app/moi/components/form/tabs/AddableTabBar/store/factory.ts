import { AddableTabsAction } from './action.enum';

export function createSetCurrentTab(key: string) {
  return {
    type: AddableTabsAction.SET_CURRENT,
    payload: {
      key,
    },
  };
}
