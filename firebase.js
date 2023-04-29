// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXOL4nAUMgtAP1Bdn_CLr35Add6suyvDw",
  authDomain: "video-sharing-platform-3c855.firebaseapp.com",
  databaseURL: "https://video-sharing-platform-3c855-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "video-sharing-platform-3c855",
  storageBucket: "video-sharing-platform-3c855.appspot.com",
  messagingSenderId: "343432031123",
  appId: "1:343432031123:web:82b73a943137fa91091666",
  measurementId: "G-Z0W74966HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;