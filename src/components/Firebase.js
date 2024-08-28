import { initializeApp } from "firebase/app";
import 'firebase/database';
import firebase from 'firebase/app';
import { getDatabase, ref, push } from "firebase/database";
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUsDjL_z8wK2VIo0JBx38BLLg_Kk_R43Q",
  authDomain: "ecoguardian-75e07.firebaseapp.com",
  databaseURL: "https://ecoguardian-75e07-default-rtdb.firebaseio.com",
  projectId: "ecoguardian-75e07",
  storageBucket: "ecoguardian-75e07.appspot.com",
  messagingSenderId: "248241239591",
  appId: "1:248241239591:web:9cc5ccfde71ad14e6a0002"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
export const auth = getAuth(app);
export const complaintsRef = ref(db, "complaints");
export const addComplaint = (data) => push(complaintsRef, data);


export { storage, ref, uploadBytesResumable, getDownloadURL };

export default db;

