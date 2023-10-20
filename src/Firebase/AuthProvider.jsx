import { useState } from "react";
import { createContext } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./Firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);
   


    const createUser = (email, password) => {
        setloading(true);
      return createUserWithEmailAndPassword(auth, email, password) ;

    }
// Update profile picture
    const updateName = (name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }

    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    //Google sign in
    const googleSignIn = (value) =>{
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () =>{
        setloading(true);
        return signOut(auth);
    }

    useEffect( () =>{
     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('user in the auth state');
        setUser(currentUser);
        setloading(false);
       });
       return() =>{
        unSubscribe();
       }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser, 
        signIn,
        logOut,
        updateName,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// AuthProvider.propTypes = {
//     children: propTypeChildren.node 
// }