// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDd1ENh-0UFaiadjOlZrSDmapkU2Td2THM",
    authDomain: "gymgc-5c5e1.firebaseapp.com",
    databaseURL: "https://gymgc-5c5e1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gymgc-5c5e1",
    storageBucket: "gymgc-5c5e1.appspot.com",
    messagingSenderId: "699419025899",
    appId: "1:699419025899:web:5f0b594d5dbd4ed946f9ae"
};

// Initialize Firebase
initializeApp(FIREBASE_CONFIG);

function initialize() {
    const FORM_MESSAGE = document.getElementById("form-message");
    FORM_MESSAGE.addEventListener("submit", addMessage);
    showMessages();
}

function showMessages() {
    const MESSAGES_REF = ref(getDatabase(), "messages/");

    onValue(MESSAGES_REF, showAllMessages);
}

function showAllMessages(snapshot) {
    const VALUES = snapshot.val();

    const SENT_MESSAGES = document.getElementById("sent-messages");
    SENT_MESSAGES.innerHTML = "";

    for (let value in VALUES) {
        const SENDER = VALUES[value].sender;
        const VALUE = VALUES[value].text;

        SENT_MESSAGES.innerHTML += `<p>${SENDER}: ${VALUE}</p>`;
    }
}

function addMessage(e) {
    e.preventDefault();

    const MESSAGE_SENDER = e.target["message-sender"].value;
    const MESSAGE_TEXT = e.target["message-text"].value;

    const MESSAGES_REF = ref(getDatabase(), "messages/");
    const NEW_MESSAGE = {
        sender: MESSAGE_SENDER,
        text: MESSAGE_TEXT,
    };
    push(MESSAGES_REF, NEW_MESSAGE);

    // Limpiar los campos de entrada después de enviar el mensaje
    e.target["message-sender"].value = "";
    e.target["message-text"].value = "";
}


initialize();