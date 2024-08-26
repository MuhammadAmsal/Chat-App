 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyAaTpitZeo6WwjYQSYCzeKF6eyA_tPZI10",
  authDomain: "chat-app-88a22.firebaseapp.com",
  projectId: "chat-app-88a22",
  storageBucket: "chat-app-88a22.appspot.com",
  messagingSenderId: "856948915388",
  appId: "1:856948915388:web:0e28161382946caefbe4b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  const storage = getStorage(app)
  const db = getFirestore(app)
  export{
    auth,
    storage,
    app,
    db,
  }