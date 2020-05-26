import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDt3EVOo7XOrY3GHr-qNiP-7YdS5IQHHnQ",
    authDomain: "notifica-a3d65.firebaseapp.com",
    databaseURL: "https://notifica-a3d65.firebaseio.com",
    projectId: "notifica-a3d65",
    storageBucket: "notifica-a3d65.appspot.com",
    messagingSenderId: "1083664168744",
    appId: "1:1083664168744:web:f885364c052c28f086821d",
    measurementId: "G-CX8L5EZEYJ",
};
// Initialize Firebase

    if(!firebase.app.length){
firebase.initializeApp(firebaseConfig);
   //    }   
   }

   export default firebase;