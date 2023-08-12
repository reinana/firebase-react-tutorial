import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgsEBOOABh6RSiXKxlQCvGIGjR3RrEnX0",
  authDomain: "fir-tutorial-2e273.firebaseapp.com",
  projectId: "fir-tutorial-2e273",
  storageBucket: "fir-tutorial-2e273.appspot.com",
  messagingSenderId: "842356853133",
  appId: "1:842356853133:web:4799c7e2cc72a8a653d5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;