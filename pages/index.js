// pages/index.js

import Form from "@/pages/Components/Form";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Form2 from "@/pages/Components/Form2";

function Home(props) {
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()


    useEffect(
        () => {
     props.user&&props.user._delegate.accessToken ? setDisabled(false) : setDisabled(true)
        }, [disabled,props.user]
    )
    return (
        <div className={"flex flex-col items-center justify-center gap-4"}>
            <h1 className="mt-40 text-2xl bg-red-50 rounded-xl w-full h-11 text-center text-black font-semibold ">👈
                Please login on the sidebar to access. We have a free community tier for everyone.</h1>
            <h1 className={"text-black w-full text-5xl font-bold"}>Generate Basic Cards - Question & Answer Pair</h1>
            <p className={"text-black"}>Converts PDF files such as lecture slides, notes and PPTs into a .apkg file that
                can be imported into Anki and .txt that can be imported into other flashcard programmes using AI. Only
                text from PDFs are supported. Images are not supported at the moment.</p>
            <div className={"flex flex-row gap-4 w-full"}>
                <Form disabled={disabled}/><Form2 disabled={disabled}/>

            </div>
            <div>
                <p className={"text-black"}>Converts PDF files such as lecture slides, notes and PPTs into a .apkg file
                    that
                    can be imported into Anki and .txt that can be imported into other flashcard programmes using AI.
                    Only
                    text from PDFs are supported. Images are not supported at the moment.</p>
            </div>

        </div>
    );
}

export default Home;
