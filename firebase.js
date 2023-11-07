import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCMczyoFUyIHmvB0dH8yLuNaINKxEjIUyM",
    authDomain: "languagelearninggame-f5f69.firebaseapp.com",
    projectId: "languagelearninggame-f5f69",
    storageBucket: "languagelearninggame-f5f69.appspot.com",
    messagingSenderId: "289099951613",
    appId: "1:289099951613:web:8deb84949896b5baf53d94"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
