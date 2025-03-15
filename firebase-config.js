// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASo2i-uae0y4X7zAG4rv-9mJ3S4YpEUaw",
    authDomain: "smarttollsystem.firebaseapp.com",
    databaseURL: "https://smarttollsystem-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smarttollsystem",
    storageBucket: "smarttollsystem.firebasestorage.app",
    messagingSenderId: "467876954788",
    appId: "1:467876954788:web:246a5dae027d9c8e51dc31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; 