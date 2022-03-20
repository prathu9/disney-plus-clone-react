import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5bEjXN-HIrFSaWVfgO2RZcDl5aSBcdNQ",
  authDomain: "disney-plus-clone-4161b.firebaseapp.com",
  projectId: "disney-plus-clone-4161b",
  storageBucket: "disney-plus-clone-4161b.appspot.com",
  messagingSenderId: "373930004750",
  appId: "1:373930004750:web:379117ec52eb7b585a475f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
//   const collectionRef = db.collection(collectionKey);
//   const batch = db.batch();

//   objectsToAdd.forEach((obj, i) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   })

//   return await batch.commit();
// }

export { auth, provider, storage };
export default db;
