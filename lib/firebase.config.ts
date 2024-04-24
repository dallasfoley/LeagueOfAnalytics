import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU_bhW_P4gSKTAPT_yUcNfz5_q-VPQy84",
  authDomain: "league-of-analytics.firebaseapp.com",
  projectId: "league-of-analytics",
  storageBucket: "league-of-analytics.appspot.com",
  messagingSenderId: "645799976707",
  appId: "1:645799976707:web:a0dd324f67c4cd0f421336",
  measurementId: "G-99M5C2D3PK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
