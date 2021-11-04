import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDr6FMeyqwcGZqF_l-Y_caLLczg1Y3R71w",
  authDomain: "crwn-clothing-db-70aa6.firebaseapp.com",
  projectId: "crwn-clothing-db-70aa6",
  storageBucket: "crwn-clothing-db-70aa6.appspot.com",
  messagingSenderId: "591756551019",
  appId: "1:591756551019:web:041c379d3ced0b3fcca22e",
  measurementId: "G-2P8WB908Q5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
