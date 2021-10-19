import FirebaseInit from './../Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

FirebaseInit();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError('');
        console.log(result.user)
      }).catch((error) => {
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

  return { handleGoogleLogin, user, handleLogout };

};
export default useFirebase;