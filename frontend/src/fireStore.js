import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAvx8x6Apw-yj46-PyswpWKOzxITwvdnUs",
    authDomain: "jmndao-portfolio.firebaseapp.com",
    projectId: "jmndao-portfolio",
    storageBucket: "jmndao-portfolio.appspot.com",
    messagingSenderId: "637031402827",
    appId: "1:637031402827:web:d85209814a9da2c255ecce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage();

export { storage };