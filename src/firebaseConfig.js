import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJe2dRbSswQSsE7mO593V2jxrLB1SlZr4",
  authDomain: "garments-5545a.firebaseapp.com",
  projectId: "garments-5545a",
  storageBucket: "garments-5545a.appspot.com",
  messagingSenderId: "654678898625",
  appId: "1:654678898625:web:b87048c3a8e03fa5412140"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;


