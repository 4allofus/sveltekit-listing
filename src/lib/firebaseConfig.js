import {writable} from "svelte/store";

export let isSignedIn = writable(false);
export let isReady = writable(false);
export let currentUser = writable([]);
export const adminId = "iQC2zm7vPrfmfTLLQptdtM8KBcU2";
export const mapConfig = "AIzaSyBWoZVhsZoSFSNG_fcyioe3ef5kzeuuqPE";

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
