import firebase from "firebase"; //Core Firebase SDK, always import it
// import "firebase/auth"; //Firebase authentication service

//firebase Configuration and its initialization
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig); //didnot support the direct string values so used function in this way

//exporting the firebase config
export default firebaseConfig;
