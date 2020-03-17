  import firebase from 'firebase/app';
  import firestore from 'firebase/firestore';
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCynJ12WUaF3VeTnALO0sF7PSnga4XhG2s",
    authDomain: "vue-crud-firebase-98e2a.firebaseapp.com",
    databaseURL: "https://vue-crud-firebase-98e2a.firebaseio.com",
    projectId: "vue-crud-firebase-98e2a",
    storageBucket: "vue-crud-firebase-98e2a.appspot.com",
    messagingSenderId: "47334723494",
    appId: "1:47334723494:web:85c143634407749cf9c967",
    measurementId: "G-P57J1NFZ1R"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore()

  export default firebaseApp.firestore()