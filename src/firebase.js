import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCKHU22QE2noiTLVdBWyti0sRqYefbcZo",
  authDomain: "ggtrade-a5a68.firebaseapp.com",
  projectId: "ggtrade-a5a68",
  storageBucket: "ggtrade-a5a68.appspot.com",
  messagingSenderId: "771502113735",
  appId: "1:771502113735:web:132952517f893306928fe2",
  measurementId: "G-HDPG53VWYL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);