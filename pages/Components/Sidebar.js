// components/Sidebar.js
import React from 'react';
import Image from "next/image";
import firebase from "firebase/app";
import SliderForm from "@/pages/Components/SliderForm";

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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABLCAYAAADK+7ojAAAMfGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZGM6Zm9ybWF0PSJpbWFnZS9wbmciCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249Ijc1IgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9Ijc1IgogICB0aWZmOkltYWdlV2lkdGg9IjMwMCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNDAwLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjQwMC8xIgogICB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNy0yNFQwMjowMDozMSswODowMCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMSAoTWFjaW50b3NoKSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOC0wMlQwMzoxNzowNCswODowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDgtMDJUMDM6MTc6MDQrMDg6MDAiCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplYTVkYjgwOS04YzI2LTM1NGQtYTMwZi1iZWYzNTk2ODI5NDMiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M2I3ZWIwNWQtNDk3Ni00Mzg4LTk1MzgtMzlmZDBiZTU4ZmQ3IgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTU2ZjcyYzctYzAzMC00Njc0LWJiMTAtZDcyZmZlYjE1MGRmIj4KICAgPHhtcE1NOkRlcml2ZWRGcm9tCiAgICB4bXBNTTpkb2N1bWVudElEPSJ4bXAuZGlkOmE1NmY3MmM3LWMwMzAtNDY3NC1iYjEwLWQ3MmZmZWIxNTBkZiIKICAgIHhtcE1NOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2RhMWUyNDYtMjYzNS00YzljLTgxYTUtMzU0NWE1ZWFkMjJiIgogICAgeG1wTU06b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE1NmY3MmM3LWMwMzAtNDY3NC1iYjEwLWQ3MmZmZWIxNTBkZiIvPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgeG1wTU06YWN0aW9uPSJjcmVhdGVkIgogICAgICB4bXBNTTppbnN0YW5jZUlEPSJ4bXAuaWlkOmE1NmY3MmM3LWMwMzAtNDY3NC1iYjEwLWQ3MmZmZWIxNTBkZiIKICAgICAgeG1wTU06c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiCiAgICAgIHhtcE1NOndoZW49IjIwMjMtMDctMjRUMDI6MDA6MzErMDg6MDAiLz4KICAgICA8cmRmOmxpCiAgICAgIHhtcE1NOmFjdGlvbj0ic2F2ZWQiCiAgICAgIHhtcE1NOmNoYW5nZWQ9Ii8iCiAgICAgIHhtcE1NOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGE1N2I3Y2QtZDE2NS00N2Y1LWI3OTQtODBlYTVlMTg0YzQwIgogICAgICB4bXBNTTpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjMuMSAoTWFjaW50b3NoKSIKICAgICAgeG1wTU06d2hlbj0iMjAyMy0wNy0yNFQxMjo1ODowOCswODowMCIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wTU06YWN0aW9uPSJzYXZlZCIKICAgICAgeG1wTU06Y2hhbmdlZD0iLyIKICAgICAgeG1wTU06aW5zdGFuY2VJRD0ieG1wLmlpZDpjZGExZTI0Ni0yNjM1LTRjOWMtODFhNS0zNTQ1YTVlYWQyMmIiCiAgICAgIHhtcE1NOnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy4xIChNYWNpbnRvc2gpIgogICAgICB4bXBNTTp3aGVuPSIyMDIzLTA3LTI0VDEzOjE1OjIzKzA4OjAwIi8+CiAgICAgPHJkZjpsaQogICAgICB4bXBNTTphY3Rpb249ImNvbnZlcnRlZCIKICAgICAgeG1wTU06cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wTU06YWN0aW9uPSJkZXJpdmVkIgogICAgICB4bXBNTTpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPgogICAgIDxyZGY6bGkKICAgICAgeG1wTU06YWN0aW9uPSJzYXZlZCIKICAgICAgeG1wTU06Y2hhbmdlZD0iLyIKICAgICAgeG1wTU06aW5zdGFuY2VJ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"
                    alt="Logo" width={200} height={200}/>

            </div>
            <nav className={"border-b border-black px-4"}>
                <ul>
                    <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                        <a className="text-black hover:text-gray-900 " href="#">
                            Home
                        </a>
                    </li>
                    <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                        <a className="text-black hover:text-gray-900" href="#">
                            About
                        </a>
                    </li>
                    <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                        <a className="text-black hover:text-gray-900" href="#">
                            Services
                        </a>
                    </li>
                    <li className="mb-2 w-full hover:bg-red-200 p-2 hover:rounded-xl">
                        <a className="text-black hover:text-gray-900" href="#">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={"flex flex-col w-full py-2 px-4 mt-4 gap-4 items-center"}>
                {props.user?<button onClick={props.signOut}
                                  className="bg-red-500 rounded-xl h-11  hover:bg-red-600 text-white   w-9/12">
                    Logout
                </button>:<button onClick={props.signIn}
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
