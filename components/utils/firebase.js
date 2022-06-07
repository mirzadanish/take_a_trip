import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAL_o1d3Qci2rBwvrdOTTcW9TVnOt0ADVA",
  authDomain: "taketrip-675d0.firebaseapp.com",
  projectId: "taketrip-675d0",
  storageBucket: "taketrip-675d0.appspot.com",
  messagingSenderId: "112943381676",
  appId: "1:112943381676:web:1833d099720038182ef309",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
