import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs6F7N3zy_yEst9ekHtcMMemRzwnbTjzc",
  authDomain: "manga-store-2e99d.firebaseapp.com",
  projectId: "manga-store-2e99d",
  storageBucket: "manga-store-2e99d.appspot.com",
  messagingSenderId: "944342718354",
  appId: "1:944342718354:web:fb90d619f427643ff6d34b"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


