import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';




  const firebaseConfig = {
    apiKey: "AIzaSyB0YtHfY91qenJ6nRYkCdjOuOCW0jwWmsg",
    authDomain: "nba-react-9befd.firebaseapp.com",
    databaseURL: "https://nba-react-9befd-default-rtdb.firebaseio.com",
    projectId: "nba-react-9befd",
    storageBucket: "nba-react-9befd.appspot.com",
    messagingSenderId: "224074957018",
    appId: "1:224074957018:web:62d039fa290a59670f25e3",
    measurementId: "G-56REHEG4SW"
  
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}