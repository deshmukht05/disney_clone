import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBiM8n3w3f7ckActcRGIQMLhUBUV80GPLA",
    authDomain: "disneyplus-clone-d54d0.firebaseapp.com",
    projectId: "disneyplus-clone-d54d0",
    storageBucket: "disneyplus-clone-d54d0.appspot.com",
    messagingSenderId: "611868474652",
    appId: "1:611868474652:web:b0615e93eae75af94c4ed9",
    measurementId: "G-TTZXV7HLWZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;