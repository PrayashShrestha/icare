import { SET_USER } from "../actions/actionTypes";

const initialState = {
  user: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

// export const generateUserDocument = async (
//   email,
//   firstName,
//   lastName,
//   password
// ) => {
//   firestore.collection("users").add({
//     email,
//     firstName,
//     lastName,
//     password,
//   });
// };
