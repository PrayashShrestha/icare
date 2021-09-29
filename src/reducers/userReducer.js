import { SET_USER, SET_USER_CATEGORY } from "../actions/actionTypes";

const initialState = {
  user: "",
  uid: "",
  email: "",
  emailVerified: "",
  category: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload.user,
        uid: action.payload.uid,
        email: action.payload.email,
        emailVerified: action.payload.emailVerified
      };
    }
    case SET_USER_CATEGORY: {
      return {
        ...state,
        category: action.payload,
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
