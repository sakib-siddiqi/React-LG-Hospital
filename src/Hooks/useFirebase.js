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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const handleGoogleSignin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const handleEmailPasswordSignup = (userName, userEmail, userPassword) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((res) => {
        updateProfile(auth.currentUser, { displayName: userName }).then(() => {
          setUser(res.user);
        });
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const handleEmailPasswordSignin = (userEmail, userPassword) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  const handleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  //   auth state change
  useEffect(() => {
    setLoading(true);
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);
  /*
  ----------------------
  ----------------------
  ----------------------
   */
  return {
    user,
    error,
    loading,
    handleGoogleSignin,
    handleEmailPasswordSignup,
    handleEmailPasswordSignin,
    handleSignOut,
  };
};
export default useFirebase;
