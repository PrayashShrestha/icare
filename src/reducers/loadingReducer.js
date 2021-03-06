import { SET_LOADING } from "../actions/actionTypes";

const initialState = {
  loading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
