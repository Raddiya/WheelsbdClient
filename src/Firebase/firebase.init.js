// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1oK2baBvL7MuGRWiTFYAWKV8vmzUv-XY",
  authDomain: "final-project12.firebaseapp.com",
  projectId: "final-project12",
  storageBucket: "final-project12.appspot.com",
  messagingSenderId: "148219567800",
  appId: "1:148219567800:web:e48fa8c9a5d70a81d19e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;