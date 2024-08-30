// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNFthCKLfUsC0K3zJne-e9prIORinCu4",
  authDomain: "workshop-afb5b.firebaseapp.com",
  projectId: "workshop-afb5b",
  storageBucket: "workshop-afb5b.appspot.com",
  messagingSenderId: "596550543079",
  appId: "1:596550543079:web:c47406e848d62d343a6442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };