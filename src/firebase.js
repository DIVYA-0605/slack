import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBn9cIxhGDPtLDnfXZ4X740AjZxj6KHcTs",
  authDomain: "slack-8409a.firebaseapp.com",
  projectId: "slack-8409a",
  storageBucket: "slack-8409a.appspot.com",
  messagingSenderId: "631031532356",
  appId: "1:631031532356:web:67b134d69a9182c380e511",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth,provider };
