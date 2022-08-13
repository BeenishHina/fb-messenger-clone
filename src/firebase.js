import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// const firebaseConfig = {
    
//         apiKey: "AIzaSyBR-0IJ9CXzmy_LxDzq2Q7l9JCEBQ4V6OI",
//         authDomain: "facebook-messenger-clone-7ff05.firebaseapp.com",
//         projectId: "facebook-messenger-clone-7ff05",
//         storageBucket: "facebook-messenger-clone-7ff05.appspot.com",
//         messagingSenderId: "492261062526",
//         appId: "1:492261062526:web:be9a24a772e16a8bdae52f",
//         measurementId: "G-45WMJ61QG4"
   

// };
const firebaseConfig = {
        apiKey: "AIzaSyCqkr_JNfy5mIcy3WXOnac89XMBEpDG3OY",
        authDomain: "fb-messenger-clone-6cf0a.firebaseapp.com",
        projectId: "fb-messenger-clone-6cf0a",
        storageBucket: "fb-messenger-clone-6cf0a.appspot.com",
        messagingSenderId: "526875523912",
        appId: "1:526875523912:web:eddb0a5ecd9087a51a517d"
      };
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(app);
 export default db;


