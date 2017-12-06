import {createStore} from "redux";

export const SOMEONE_LOGIN = 'SOMEONE_LOGIN';

export function action_SomeoneLogin(user) {
  return {
    type: SOMEONE_LOGIN,
    User: user
  };
}
export function reducer(state = {}, action) {
  switch (action.type) {
    case SOMEONE_LOGIN:
      state.User = action.User;
      break;
  }
  return state;
}

const store = createStore(reducer);

export default store;