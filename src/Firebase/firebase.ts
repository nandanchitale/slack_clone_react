// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkEiCTQWI2uGvvruDWA1XiYRg05gflrd8",
    authDomain: "slack-clone-cbdd4.firebaseapp.com",
    projectId: "slack-clone-cbdd4",
    storageBucket: "slack-clone-cbdd4.appspot.com",
    messagingSenderId: "770597534856",
    appId: "1:770597534856:web:3a8822807235991431733d",
    measurementId: "G-WJERY1KMZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Get Google Auth provider
const provider = new GoogleAuthProvider();

export { auth, provider, db };