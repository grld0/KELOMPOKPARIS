// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZTGCXA5XRJxH9GvE7w160jgDsJJim9IM',
  authDomain: 'inventora-5b6ca.firebaseapp.com',
  databaseURL:
    'https://inventora-5b6ca-default-rtdb.firebaseio.com/',
  projectId: 'inventora-5b6ca',
  storageBucket: 'inventora-5b6ca.appspot.com',
  messagingSenderId: '611610190747',
  appId: '1:611610190747:web:4c88afcd47ad4ff523773e',
  measurementId: 'G-B1ZRNLH9WR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default authentication = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
