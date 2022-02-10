import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOoDW42p-WwPdB26RzEYxRmTqlMyxjTl8",
    authDomain: "fb-clone-b81f0.firebaseapp.com",
    projectId: "fb-clone-b81f0",
    storageBucket: "fb-clone-b81f0.appspot.com",
    messagingSenderId: "1097539503895",
    appId: "1:1097539503895:web:6ea0042609b4d32bfd5952"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;