import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDfKSdCFXn77z8pj0zWnWGLD-h0J4-9guk",
  authDomain: "myresume-e939a.firebaseapp.com",
  databaseURL: "https://myresume-e939a.firebaseio.com",
  projectId: "myresume-e939a",
  storageBucket: "myresume-e939a.firebasestorage.app",
  messagingSenderId: "87139879444",
  appId: "1:87139879444:web:12c899d976f6b1e2527501",
  measurementId: "G-HHY53HS5CX"
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth();