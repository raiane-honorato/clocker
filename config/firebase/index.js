import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsFzTkL2NYBHWKsAmJqcx7jARKg3RbDTg",
    authDomain: "clocker-42.firebaseapp.com",
    projectId: "clocker-42",
    storageBucket: "clocker-42.appspot.com",
    messagingSenderId: "1059665110251",
    appId: "1:1059665110251:web:ab7369105f220a52694aae",
    measurementId: "G-FQ8NGSZZVD"
  };

  // Initialize Firebase
  export default firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig)