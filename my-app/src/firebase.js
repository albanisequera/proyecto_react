import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeHMnv4RSdB9xibwBm8hF7pHW2LuHu-WE",
  authDomain: "proyecto-react-87aae.firebaseapp.com",
  projectId: "proyecto-react-87aae",
  storageBucket: "proyecto-react-87aae.appspot.com",
  messagingSenderId: "768921397256",
  appId: "1:768921397256:web:0199771476f401511e89bd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
  