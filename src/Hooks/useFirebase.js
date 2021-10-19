import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

// initializing firebase
initializeApp(firebaseConfig);

// provider
const googleProvider = new GoogleAuthProvider();
// main function
// ------------------
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const handleGoogleSignin = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => console.log(error.code));
  };
  const handleEmailPasswordSignup = (userName, userEmail, userPassword) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((res) => {
        updateProfile(auth.currentUser, { displayName: userName })
          .then(() => {
            setUser(res.user);
            setError("");
          })
          .catch((error) => console.log(error.code));
      })
      .catch((error) => console.log(error.code));
  };
  const handleEmailPasswordSignin = (userEmail, userPassword) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((res) => {
        setUser(res.user);
        setError("");
      })
      .catch((error) => console.log(error.code));
  };
  const handleSignOut = () => {
    return signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => console.log(err.code));
  };
  //   auth state change
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
    });
  }, []);
  /*
  ----------------------
  ----------------------
  ----------------------
   */
  return {
    user,
    handleGoogleSignin,
    handleEmailPasswordSignup,
    handleEmailPasswordSignin,
    handleSignOut,
  };
};
export default useFirebase;
