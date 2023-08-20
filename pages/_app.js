import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {useEffect, useState} from "react";
import "../styles/globals.css";
import Sidebar from "@/pages/Components/Sidebar";
import {useRouter} from "next/router"; // Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBKk7qlcYV-axge05Ej83ZI-dLcDJ49da4",
    authDomain: "pdflogin-47793.firebaseapp.com",
    projectId: "pdflogin-47793",
    storageBucket: "pdflogin-47793.appspot.com",
    messagingSenderId: "819310100854",
    appId: "1:819310100854:web:83e4fbfa0e6b34e20f7a57"
};// Initialize firebase and google provider
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});// Sign in and sign out functins
const signIn = () => auth.signInWithRedirect(provider);
const signOut = () => auth.signOut();

function MyApp({Component, pageProps}) {
    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            setUser(user ? user : "");
            localStorage.setItem('token', user && user._delegate.accessToken ? user && user._delegate.accessToken : "")
            //reload the page
            // router.reload();
            console.log(user && user._delegate.accessToken ? user && user._delegate.accessToken : "")
        });
    }, [user]);
    return (

        <div className="flex w-full h-screen">
            <Sidebar user={user}
                     signIn={signIn}
                     signOut={signOut}/>
            <div className="flex-grow bg-white overflow-y-auto h-full p-12">
                <Component
                    {...pageProps}
                    user={user}
                    signIn={signIn}
                    signOut={signOut}
                />
            </div>
        </div>
    );
}

export default MyApp;