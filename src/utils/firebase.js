
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7rLR6eJwJBYZRumXxh1HqD9jMXsttvpk",
  authDomain: "netflix-gpt-a1377.firebaseapp.com",
  projectId: "netflix-gpt-a1377",
  storageBucket: "netflix-gpt-a1377.appspot.com",
  messagingSenderId: "95781454163",
  appId: "1:95781454163:web:2b37559687ba0d17dba1a6",
  measurementId: "G-SNQTH7P8PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
auth.languageCode = 'en';


export const hangleSignInWithGoogle = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });
}

