// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZwot2ZSU28hBKw4trgH7udMJL_jDJyRQ",
    authDomain: "dental-solution-2564b.firebaseapp.com",
    projectId: "dental-solution-2564b",
    storageBucket: "dental-solution-2564b.appspot.com",
    messagingSenderId: "706410752370",
    appId: "1:706410752370:web:53b90c8593ee839aea95eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;