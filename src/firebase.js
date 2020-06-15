import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAR6onQP7cKz2oUeDoA8FOcmAdT9Qk8z6A",
    authDomain: "componentui-c0035.firebaseapp.com",
    databaseURL: "https://componentui-c0035.firebaseio.com",
    projectId: "componentui-c0035",
    storageBucket: "componentui-c0035.appspot.com",
    messagingSenderId: "1098288586268",
    appId: "1:1098288586268:web:07d15983781611c35209d9",
    measurementId: "G-Z0438JC89J"
  };
  firebase.initializeApp(firebaseConfig);

  
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  
  export default firebase;