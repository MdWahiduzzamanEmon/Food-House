import { useEffect, useState } from 'react';
import initializationFirebase from '../Firebase/Firebase.init';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
    onAuthStateChanged,
  TwitterAuthProvider ,
  signOut,
} from "firebase/auth";
initializationFirebase()

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [popUpMessage, setPopUpMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // google sign 
    const googleSign = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            

    }
    // twitter sign 

    const twitterSign = () => {
        signInWithPopup(auth, twitterProvider)
          .then((result) => {
              setUser(result.user);
              console.log(result.user);
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
        setIsLoading(false);
      });
        return unSubcribe;
    }, []);

// logout 
  const logOut = () => {
      setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            setPopUpMessage("LogOut Successful")
          })
          .catch((error) => {
            // An error happened.
          }).finally(() => {
            setIsLoading(false);
          })
    }
    
    
    return {
      googleSign,
      user,
      error,
      popUpMessage,
      twitterSign,
      logOut,
      isLoading,
      setIsLoading,
    };
};

export default useFirebase;