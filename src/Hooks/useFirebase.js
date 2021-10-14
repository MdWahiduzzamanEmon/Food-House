import { useEffect, useState } from 'react';
import initializationFirebase from '../Firebase/Firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
initializationFirebase()

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');

    const auth = getAuth();

    // google sign 
    const googleSign = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              setUser(result.user);
          })
            .catch((error) => {
              setError(error.message);
          });

    }

    // stateChange 
    useEffect(() => {
      const unSubcribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
           setUser({});
        }
      });
        return unSubcribe;
    }, []);

// logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            setPopUpMessage("LogOut Successful")
          })
          .catch((error) => {
            // An error happened.
          });
    }
    
    
    return {
      googleSign,
      user,
        error,
      popUpMessage,
        logOut
      
    };
};

export default useFirebase;