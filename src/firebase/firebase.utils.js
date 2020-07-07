import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3_aAcU-1uWDRaBOnFRdJTAQH9geQ2yO4",
    authDomain: "crown-db-a8b23.firebaseapp.com",
    databaseURL: "https://crown-db-a8b23.firebaseio.com",
    projectId: "crown-db-a8b23",
    storageBucket: "crown-db-a8b23.appspot.com",
    messagingSenderId: "562614753775",
    appId: "1:562614753775:web:96ee7522a97b59dfea3e1a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;