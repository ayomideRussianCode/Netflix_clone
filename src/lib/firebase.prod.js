import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";


const config = {
  apiKey: "AIzaSyAFNWjyT9GDC8yR-CHS3et1LmhWMjErs0U",
  authDomain: "netflix-clone-33dd6.firebaseapp.com",
  databaseURL: "https://netflix-clone-33dd6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-clone-33dd6",
  storageBucket: "netflix-clone-33dd6.appspot.com",
  messagingSenderId: "208156373646",
  appId: "1:208156373646:web:8736977e9b5533fafd4fdf"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);


export { firebase };
