import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyAwMQyGcoXeMyJMMFzpxvPKy3VZ434JskM",
    authDomain: "nba-react-c2fef.firebaseapp.com",
    databaseURL: "https://nba-react-c2fef-default-rtdb.firebaseio.com",
    projectId: "nba-react-c2fef",
    storageBucket: "nba-react-c2fef.appspot.com",
    messagingSenderId: "716045653724",
    appId: "1:716045653724:web:9d54e19bc5d7b0ab13c619",
    measurementId: "G-FPY9CXM1LW"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}