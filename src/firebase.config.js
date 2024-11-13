// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBVU4Xpu0jGoC3BuOUqc1ZV9tV8Cdq-vkI',
    authDomain: 'auth-consep-practise.firebaseapp.com',
    projectId: 'auth-consep-practise',
    storageBucket: 'auth-consep-practise.firebasestorage.app',
    messagingSenderId: '274747306148',
    appId: '1:274747306148:web:8ef127193e1eb060207631'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;