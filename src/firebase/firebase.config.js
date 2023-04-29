// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1YHhkfWw7hd6vfBW9-lzplb5uCGoXNM",
  authDomain: "the-news-dragon-e1ed3.firebaseapp.com",
  projectId: "the-news-dragon-e1ed3",
  storageBucket: "the-news-dragon-e1ed3.appspot.com",
  messagingSenderId: "62147929456",
  appId: "1:62147929456:web:4efe4362bb0a69c18d5bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;