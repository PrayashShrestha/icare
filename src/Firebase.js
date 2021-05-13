import firebase from "firebase"; //Core Firebase SDK, always import it
import "firebase/auth"; //Firebase authentication service
import "firebase/firestore";

//firebase Configuration and its initialization
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBKZb13bH7Bcs6zcP4coaem201e34LoGsU",
  authDomain: "icare-56df4.firebaseapp.com",
  projectId: "icare-56df4",
  storageBucket: "icare-56df4.appspot.com",
  messagingSenderId: "612104031165",
  appId: "1:612104031165:web:9a5b4624e26cca9689a0d4",
});

//references to cloud firestore and authentication service
export const firestore = firebase.firestore();
export const auth = firebaseConfig.auth();

//exporting the firebase config
export default firebaseConfig;
