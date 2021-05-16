import React from "react";
import ReactDom from "react-dom";
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/firestore';
import "./style.scss";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPCCKpGbNk8HE9w5bjp0OTLeiNct3WAME",
  authDomain: "firechat-40e22.firebaseapp.com",
  projectId: "firechat-40e22",
  storageBucket: "firechat-40e22.appspot.com",
  messagingSenderId: "208361844509",
  appId: "1:208361844509:web:814d2f8e0285775d8dfbf4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDom.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
