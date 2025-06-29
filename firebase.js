 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCmFxvsFGA-F2Z-KU4gmdKaKigUOuEtp-c",
    authDomain: "finance-67595.firebaseapp.com",
    projectId: "finance-67595",
    storageBucket: "finance-67595.firebasestorage.app",
    messagingSenderId: "231304329323",
    appId: "1:231304329323:web:e961ba2e1235a8dc94592e",
    measurementId: "G-041J00MZ6V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


export{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
}