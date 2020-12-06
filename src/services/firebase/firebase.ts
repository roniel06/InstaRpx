import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgQC-FVmtfw7BZI3sjzsB_FFyDVPyBgIA",
  authDomain: "instarpx.firebaseapp.com",
  databaseURL: "https://instarpx.firebaseio.com",
  projectId: "instarpx",
  storageBucket: "instarpx.appspot.com",
  messagingSenderId: "398380520538",
  appId: "1:398380520538:web:879a28e0a4415290e6f463",
  measurementId: "G-GBV7GEWKMT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();