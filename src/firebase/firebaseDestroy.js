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

const example = {
    "@context": "http://www.w3.org/ns/anno.jsonld",
    "id": "http://example.org/anno1",
    "type": "Annotation",
    "body": "http://example.org/post1",
    "target": "http://example.com/page1"
}

const example2 = {
    "@context": "http://wworg/ns/anno.jsonld",
    "id": "http://examorg/anno1",
    "type": "Annation",
    "body": "http://ele.org/post1",
    "target": "http://ex.com/page1"
}

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.database().ref("Annotations").push(example)  
//firebase.database().ref(0).update(example2)

firebase.database().ref("Annotations").once("value").then((data) => 
{
    var annotationList = data.val();
    const keys = Object.keys(annotationList);
    keys.forEach((k) => {
        if(annotationList[k].target === "http://ex.com/page1")
        {
            console.log(annotationList[k].type)
        }
    })
})

//firebase auth -> have an annotations for each User ID
//move to public
//show approved
//comment updates state, submit to database
//did mount is load state from database
//only get when mounting
//sets for updating