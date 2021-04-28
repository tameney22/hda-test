import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDF40q742rSX9rYwuaOLpdg70QLNfcDMaw",
    authDomain: "huon-digital-archive.firebaseapp.com",
    databaseURL: "https://huon-digital-archive-default-rtdb.firebaseio.com",
    projectId: "huon-digital-archive",
    storageBucket: "huon-digital-archive.appspot.com",
    messagingSenderId: "405715148508",
    appId: "1:405715148508:web:7f1330476a029c6d475e19",
    measurementId: "G-Z4JDN1TR5K"
};

  // Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.database().ref("Annotations").push()  
//firebase.database().ref(0).update(example2)

//firebase auth -> have an annotations for each User ID
//move to public
//show approved
//comment updates state, submit to database
//did mount is load state from database
//only get when mounting
//sets for updating