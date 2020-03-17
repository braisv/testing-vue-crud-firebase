  import firebase from 'firebase/app';
  import firestore from 'firebase/firestore';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "vue-crud-firebase-98e2a.firebaseapp.com",
    databaseURL: "https://vue-crud-firebase-98e2a.firebaseio.com",
    projectId: "vue-crud-firebase-98e2a",
    storageBucket: "vue-crud-firebase-98e2a.appspot.com",
    messagingSenderId: "47334723494",
    appId: process.env.FIREBASE_ID,
    measurementId: "G-P57J1NFZ1R"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore()

  export default firebaseApp.firestore()