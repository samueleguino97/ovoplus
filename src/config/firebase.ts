import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAZdx-t7bdEdTwjjbjkzZPUdBK08wlbrQY",
  authDomain: "ovoplus-6d3f0.firebaseapp.com",
  projectId: "ovoplus-6d3f0",
  storageBucket: "ovoplus-6d3f0.appspot.com",
  messagingSenderId: "946121012339",
  appId: "1:946121012339:web:573947d130ef22e6042606",
};
export function initializeFirebase() {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}
export const { firestore, auth } = firebase;
