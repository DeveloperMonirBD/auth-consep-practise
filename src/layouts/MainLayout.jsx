/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const authContext = createContext();

import { Outlet } from 'react-router-dom';
import auth from '../firebase.config';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleGoogleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider).then(result => setUser(result.user));
    };

    const handleGithubLogin = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider).then(result => setUser(result.user));
    };
    const handleTwitterLogin = () => {
        setLoading(true)
        signInWithPopup(auth, twitterProvider).then(result => setUser(result.user));
    };

    const handleLogout = () => {
        setLoading(true)
        signOut(auth).then(res => console.log(res));
    };

    const handleSignUp = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }

    const handleSignIn = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then(result => console.log(result.user));
    }

    useEffect(() => {
        console.log("User state: ",user)
    }, [user])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)
            
            //    if (user) {
            //        // User is signed in, see docs for a list of available properties
            //        // https://firebase.google.com/docs/reference/js/auth.user
            //        const uid = user.uid;
            //        // ...
            //    } else {
            //        // User is signed out
            //        // ...
            //    }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        handleTwitterLogin,
        user,
        setUser,
        handleLogout,
        handleSignUp,
        handleSignIn,
        loading
    };

    return (
        <div>
            <authContext.Provider value={authData}>
                <Navbar />
                <Outlet />
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;
