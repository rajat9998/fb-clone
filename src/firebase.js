import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAajiE8Dzs2b3vSI0A0U6itT-f0SSn6Jqk",
    authDomain: "facebook-clone-7c813.firebaseapp.com",
    databaseURL: "https://facebook-clone-7c813.firebaseio.com",
    projectId: "facebook-clone-7c813",
    storageBucket: "facebook-clone-7c813.appspot.com",
    messagingSenderId: "229893236734",
    appId: "1:229893236734:web:47c88041a890eb5d4902af",
    measurementId: "G-W0RX5PKF2Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;