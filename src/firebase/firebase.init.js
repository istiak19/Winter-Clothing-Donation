// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJzmba_aLzEGo79sEBMJjdoVuM89Wr8Ic",
    authDomain: "winter-clothes-donation.firebaseapp.com",
    projectId: "winter-clothes-donation",
    storageBucket: "winter-clothes-donation.firebasestorage.app",
    messagingSenderId: "203285286245",
    appId: "1:203285286245:web:9907e3be6b31309e19658c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth