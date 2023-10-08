import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const ggoogleProvider =new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setUser(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setUser(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setUser(true);
        return signOut(auth);
    }

    const googleLogIn =()=>{
        return signInWithPopup(auth,ggoogleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // Handle the authentication state change here
            console.log('Current user:', currentUser);
            setUser(currentUser); // Update the user state
            setLoading(false);
        });

        // Return a cleanup function to unsubscribe when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);







    const AuthInfo = {
        user,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;

