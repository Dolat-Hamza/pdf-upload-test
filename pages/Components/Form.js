import React, {useState} from "react";
import FileDragAndDrop from "@/pages/Components/FileDragAndDrop";
import SelectField from "@/pages/Components/SelectField";
import InputField from "@/pages/Components/InputTextField";

const Form = ({disabled}) => {
    const [uploadedData, setUploadedData] = useState([]);

    // Define a callback function to receive data from App component
    const handleDataUpload = (data) => {
        // Do something with the data in the parent component
        setUploadedData([...uploadedData, ...data]);
    };
    return (
        <div className={"flex flex-col gap-5"}>
            <form className={"flex flex-col gap-6"}>

                <FileDragAndDrop onDataUpload={handleDataUpload} disabled={disabled}/>
                <SelectField type={"text"} disabled={disabled} title={"Hello "} content={"Hello"}/>
                <SelectField type={"text"} disabled={disabled} title={"Hello "} content={"Hello"}/>
                <SelectField type={"tags"} disabled={disabled} title={"Hello "} content={"Hello"}/>
                <InputField disabled={disabled} title={"Hello "} content={"Hello"}/>
            </form>
            <div>
                <p className={"text-black"}>Converts PDF files such as lecture slides, notes and PPTs into a .apkg file
                    that
                    can be imported into Anki and .txt that can be imported into other flashcard programmes using AI.
                    Only
                    text from PDFs are supported. Images are not supported at the moment.</p>
            </div>
        </div>
    )
}
export default Form;