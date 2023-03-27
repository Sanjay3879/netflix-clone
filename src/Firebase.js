import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlXtCYMncgAu_0yaEby_P_IANuUoS4RuA",
  authDomain: "netflix-clone-561cf.firebaseapp.com",
  projectId: "netflix-clone-561cf",
  storageBucket: "netflix-clone-561cf.appspot.com",
  messagingSenderId: "1020150930744",
  appId: "1:1020150930744:web:8c6d55fb9fdda69c6335cd",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
