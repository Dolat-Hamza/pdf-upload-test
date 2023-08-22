import {Input, Tooltip} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const InputField = ({title, content, disabled, type}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-row justify-between items-center "}>
                <p className={"text-black"}>
                    {title}
                </p>
                <Tooltip className={"text-black"} title={content}>
                    <QuestionCircleOutlined/>
                </Tooltip>
            </div>
            {type === "text" ? <Input disabled={disabled}>

            </Input> : <Input.TextArea disabled={disabled}>
            </Input.TextArea>}


        </div>
    )
}
export default InputField;