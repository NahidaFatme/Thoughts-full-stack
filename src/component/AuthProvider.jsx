import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import {signInWithPopup, signOut, updateProfile, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, SetLoading] = useState(true);
    const auth = getAuth(app); 

    const createUser = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
       SetLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const loginGoogle = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const loginGithub = (provider) =>{
        return signInWithPopup(auth, provider);
    }
    
    const logOut = ( ) =>{
        SetLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        // SetLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
          })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            SetLoading(false);
        });
        return () => {
            unSubscribe ();
        }
    },[])

    const authInfo = { user,loading, createUser, loginUser, loginGoogle, loginGithub, logOut, updateUserProfile, setUser, };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
