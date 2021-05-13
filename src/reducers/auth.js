import { SIGN_IN } from "../actions/actionTypes";

const initialState = {
  user: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducers;
