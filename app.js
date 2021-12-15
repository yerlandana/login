import { initializeApp, FirebaseError } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3fyrXaAhpzxGKYvTYX2kJKV547EgCbj0",
    authDomain: "login-8c975.firebaseapp.com",
    databaseURL: "https://login-8c975.firebaseio.com",
    projectId: "login-8c975",
    storageBucket: "login-8c975.appspot.com",
    messagingSenderId: "579935469606",
    appId: "1:579935469606:web:794508a300f2efc4c726e7"
  };

const app = initializeApp(firebaseConfig);

var messageRef = app.database().ref("messages");
document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    SaveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = block;

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

    document.getElementById('contactForm').reset();
}



function getInputVal(id){
    return document.getElementById(id).value;
}


function SaveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company, 
        email: email, 
        phone: phone, 
        message: message
    });
}



