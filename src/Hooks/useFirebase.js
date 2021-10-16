import { useEffect, useState } from 'react';
import initializationFirebase from '../Firebase/Firebase.init';
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
    onAuthStateChanged,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail ,
  signOut,
} from "firebase/auth";
initializationFirebase()

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

toast.configure();
 
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
const [name,setName]=useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popUpMessage, setPopUpMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [addingFood, setAddingFood] = useState([]);

  const handleToAddToCart = (meal) => {
    const adding = [...addingFood, meal];
    setAddingFood(adding);
  };

  console.log(addingFood);
  const auth = getAuth();

  // google sign
  const googleSign = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // twitter sign

  const twitterSign = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  // stateChange
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unSubcribe;
  }, []);

  const handleToGetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleToGetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleToGetName = (e) => {
    setName(e.target.value);
  };

  const handleRegForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast("Password must be atleast 6 character");
    }
    register(email, password);
    
  };

  console.log(email, password);

  //create user email/pass

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // ...
         toast("Succesfully register");
        updateName();
        emailVerification();
      })
  };

  // login user

  const loginUser = () => {
    return signInWithEmailAndPassword(auth, email, password)
      
  };

  //update name

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName:name,
    })
      .then(() => {
      
      })
  }

  // email verification 
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
       toast("Email verification sent!");
      // ...
    });

  }

  // reset Pass 
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
    
         toast("Check your email to reset");
        // ..
      })
      
  }
  
  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    googleSign,
    user,
    error,
    popUpMessage,
    twitterSign,
    logOut,
    isLoading,
    setIsLoading,
    handleToAddToCart,
    addingFood,
    handleToGetEmail,
    handleRegForm,
    handleToGetPassword,
    handleToGetName,
    loginUser,
    resetPassword,
  };
};

export default useFirebase;