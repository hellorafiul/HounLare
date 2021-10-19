import FirebaseInit from './../Firebase/Firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from 'react';

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {

    return signInWithPopup(auth, provider)
      // .then((result) => {
      //   setUser(result.user);
      //   setError('');
      //   console.log(result.user)
      // })
      .catch((error) => {
        setError(error.message);
      });

  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        const uid = user.uid;

      } else {

      }
    });
  }, [])

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
    }).catch((error) => {

    });
  }

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  }

  return { handleGoogleLogin, user, handleLogout, handleUserRegister, handleUserLogin };

};
export default useFirebase;