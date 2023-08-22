// components/Sidebar.js
import React from 'react';
import Image from "next/image";
import firebase from "firebase/app";
import SliderForm from "@/pages/Components/SliderForm";
import Link from "next/link";

const Sidebar = (props) => {

    const handleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            console.log("Signed in user:", user);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };
    return (<div className="bg-red-50 text-white h-full gap-7 w-72 flex-shrink-0 py-4 ">
        <div className="flex items-center justify-center mb-6">
            <Image
                src="/logo.png"
                alt="Logo" width={200} height={200}/>

        </div>
        <nav className="border-b border-black px-4">
            <ul>
                <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                    <Link className={"text-black"} href="/">
                        Home
                    </Link>
                </li>
                <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                    <Link className={"text-black"} href="/power-user">
                        Power User
                    </Link>
                </li>
                <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                    <Link className={"text-black"} href="/xon-anki-replacement">
                        Xon - An Anki Replacement
                    </Link>
                </li>

            </ul>
        </nav>
        <div className={"flex flex-col w-full py-2 px-4 mt-4 gap-4 items-center"}>
            {props.user ? <button onClick={props.signOut}
                                  className="bg-red-500 rounded-xl h-11  hover:bg-red-600 text-white   w-9/12">
                Logout
            </button> : <button onClick={props.signIn}
                                className="bg-red-500 rounded-xl h-11  hover:bg-red-600 text-white   w-9/12">
                Login
            </button>}
            <div>
                <p className={"text-black"}>
                    🙌 To support further development of PDF2Anki, upgrade to PDF2Anki Power User.
                </p>
            </div>

        </div>
        <div className={"w-full  px-3"}>
            <SliderForm/>

        </div>
    </div>);
};

export default Sidebar;
