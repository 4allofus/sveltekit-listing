import { initializeApp, getApps, getApp } from "firebase/app";
import { browser } from "$app/env";
import { getFirestore } from "firebase/firestore";
import {derived} from "svelte/store";

export let isSignedIn = false;

export const firebaseConfig = {
  
  apiKey: "AIzaSyAtFQ1idN8EfWztKDY9IpfUfk5CXvuO2G8",
  authDomain: "allofussvelte.firebaseapp.com",
  databaseURL: "https://allofussvelte-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "allofussvelte",
  storageBucket: "allofussvelte.appspot.com",
  messagingSenderId: "352722336552",
  appId: "1:352722336552:web:5e144ce988d22e799f2e1d",
  measurementId: "G-39RZPFYC16"
  
};

export const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
export const db = browser && getFirestore(firebaseApp);
