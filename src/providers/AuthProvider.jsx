import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signUpGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfileUser = (update) => {
        return updateProfile(auth.currentUser, update)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        signUpUser,
        signUpGoogle,
        signInUser,
        signOutUser,
        passwordReset,
        updateProfileUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;