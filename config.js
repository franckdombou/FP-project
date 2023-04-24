import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA94Hm_MvYmx68DdN-utQg96hR51UROLI4",
  authDomain: "apppipo-b8867.firebaseapp.com",
  projectId: "apppipo-b8867",
  storageBucket: "apppipo-b8867.appspot.com",
  messagingSenderId: "19771682342",
  appId: "1:19771682342:web:999ed00d9b5bc38bb840e7",
  measurementId: "G-SB7RKGF8D7"
}

let app; 

export default  app = firebase.initializeApp(firebaseConfig)

const Mydb = getFirestore(app);
const db = app.firestore();
const auth = getAuth(app);
const storage= getStorage(app)

export { db, auth,storage,firebase,Mydb };