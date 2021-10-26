import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBn6-0VL8lDfXyrS33Y8Y6k4LNb6m0-NZk",
    authDomain: "react-auth-b3d46.firebaseapp.com",
    projectId: "react-auth-b3d46",
    storageBucket: "react-auth-b3d46.appspot.com",
    messagingSenderId: "16947065298",
    appId: "1:16947065298:web:9d45c606f6405f0073180b"
  };

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth()
var provider = new firebase.auth.GoogleAuthProvider()
export {auth , provider};