const firebaseConfig = {
    apiKey: "AIzaSyB9iD4tJvH1fyQRnG17lo-4160KQuSFCmw",
    authDomain: "amar-7b365.firebaseapp.com",
    databaseURL: "https://amar-7b365-default-rtdb.firebaseio.com",
    projectId: "amar-7b365",
    storageBucket: "amar-7b365.firebasestorage.app",
    messagingSenderId: "1074209238712",
    appId: "1:1074209238712:web:453980e9e0eb7075f64e4d",
    measurementId: "G-3W0MY4R220"
};

// Initialize Firebase
// Note: We will rely on the CDN import in the HTML files to provide the 'firebase' namespace.
// This file just holds the config and initialization logic to be called after libraries load.

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase Initialized");
    } else {
        firebase.app(); // if already initialized, use that one
    }
}
