import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDZK02E6kUeDQKULK_3_J-X088uzKuuRkM",
  authDomain: "mate-amargo-camisetas.firebaseapp.com",
  projectId: "mate-amargo-camisetas",
  storageBucket: "mate-amargo-camisetas.appspot.com",
  messagingSenderId: "236193238472",
  appId: "1:236193238472:web:af0e6ead2930b0458884fd"
};

const app = initializeApp(firebaseConfig);

//referencia a la base de datos
export const db = getFirestore(app);