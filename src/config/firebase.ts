import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBuo8xOHhsFxNkjcMDFYXzTwZB8vG96RcU",
  authDomain: "pipo-5778b.firebaseapp.com",
  projectId: "pipo-5778b",
  storageBucket: "pipo-5778b.appspot.com",
  messagingSenderId: "726163727852",
  appId: "1:726163727852:web:2008a703d2da34476d4cc9",
  measurementId: "G-ET1W0KPCXS",
};
export function initializeFirebase() {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}
export const { firestore, auth } = firebase;
