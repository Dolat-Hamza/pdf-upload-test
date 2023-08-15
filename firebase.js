// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "firebase/compat/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}

export default firebase;
