import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlsutXDyFsDNCVWVDAPHLFI_1_Lz6cHRU",
  authDomain: "scorefit-89f4f.firebaseapp.com",
  projectId: "scorefit-89f4f",
  storageBucket: "scorefit-89f4f.appspot.com",
  messagingSenderId: "506731190096",
  appId: "1:506731190096:web:1d60300721f0f5f039be55"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };