import firebase from "firebase/app"; // to initialize the app
import "firebase/firestore"; // for firestore
import "firebase/auth"; //for authentication

// const apiKey = `${process.env.API_KEY}`; //to acess the environmental variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Y7pimHptSFGHVIK1gtFoliW7Are2Y4I",
  authDomain: "ebsite-23-11-2000.firebaseapp.com",
  projectId: "ebsite-23-11-2000",
  storageBucket: "ebsite-23-11-2000.appspot.com",
  messagingSenderId: "198634179686",
  appId: "1:198634179686:web:93fec83f3c1ae9a1ea31a7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
